import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { RefreshCw, Phone, Mail, Eye, Filter } from 'lucide-react';
import Loader from '../components/ui/Loader';

const AdminLeads = () => {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterType, setFilterType] = useState(searchParams.get('type') || 'All');

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/leads', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter(lead => {
    if (filterType === 'All') return true;
    if (filterType === 'Quote') return lead.lead_type === 'Quote Request';
    if (filterType === 'Training') return lead.lead_type === 'Training Enquiry';
    if (filterType === 'Contact') return lead.lead_type.includes('Contact') || lead.lead_type.includes('Survey Enquiry');
    return true;
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-[#10263F]">All Leads</h2>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2">
            <Filter size={16} className="text-gray-400 mr-2" />
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-transparent text-sm font-bold text-gray-700 focus:outline-none appearance-none cursor-pointer"
            >
              <option value="All">All Leads</option>
              <option value="Quote">Survey Quotes</option>
              <option value="Training">Training</option>
              <option value="Contact">Contact/General</option>
            </select>
          </div>
          <button onClick={fetchLeads} className="bg-white border border-gray-200 p-2 rounded-lg text-gray-600 hover:text-[#10263F] hover:bg-gray-50 transition-colors">
            <RefreshCw size={18} className={isLoading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex-1 overflow-hidden flex flex-col">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr className="text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="p-4 font-bold whitespace-nowrap">Code / Date</th>
                <th className="p-4 font-bold">Client Info</th>
                <th className="p-4 font-bold">Type / Service</th>
                <th className="p-4 font-bold text-center">Status</th>
                <th className="p-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">
                    {isLoading ? <Loader text="Loading leads..." /> : 'No leads found for this filter.'}
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="p-4 whitespace-nowrap">
                      <div className="font-bold text-[#10263F] bg-gray-100 px-2 py-1 rounded inline-block text-xs mb-1">{lead.lead_code}</div>
                      <div className="text-xs text-gray-500">{new Date(lead.created_at).toLocaleDateString()}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-[#10263F] text-base">{lead.name}</div>
                      <div className="flex items-center text-gray-600 mt-1 text-xs">
                        <Phone size={12} className="mr-1 text-gray-400" /> {lead.phone}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold mb-1 ${
                        lead.lead_type === 'Training Enquiry' ? 'bg-purple-100 text-purple-800' :
                        lead.lead_type === 'Quote Request' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {lead.lead_type}
                      </span>
                      <div className="text-xs text-gray-600 line-clamp-1">{lead.service || lead.location || 'General Enquiry'}</div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold border ${
                        lead.status === 'New' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                        lead.status === 'Contacted' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        lead.status === 'Follow Up' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                        lead.status === 'Quotation Sent' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                        lead.status === 'Converted' ? 'bg-green-50 text-green-700 border-green-200' :
                        'bg-gray-50 text-gray-700 border-gray-200'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Link 
                        to={`/admin/leads/${lead.id}`} 
                        className="inline-flex items-center text-sm font-bold text-white bg-[#10263F] px-3 py-1.5 rounded hover:bg-[#F59E0B] transition-colors"
                      >
                        <Eye size={14} className="mr-1" /> View
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLeads;
