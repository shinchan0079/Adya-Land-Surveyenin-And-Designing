import { useState, useEffect } from 'react';
import { Users, BookOpen, Map, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    quote: 0,
    training: 0,
    contact: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await fetch('/api/leads', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setStats({
            total: data.length,
            new: data.filter(l => l.status === 'New').length,
            quote: data.filter(l => l.lead_type === 'Quote Request').length,
            training: data.filter(l => l.lead_type === 'Training Enquiry').length,
            contact: data.filter(l => l.lead_type.includes('Contact') || l.lead_type.includes('Survey Enquiry')).length
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { title: 'Total Leads', value: stats.total, icon: <Users size={24} />, color: 'bg-blue-500', link: '/admin/leads' },
    { title: 'New (Unread)', value: stats.new, icon: <TrendingUp size={24} />, color: 'bg-orange-500', link: '/admin/leads' },
    { title: 'Survey Quotes', value: stats.quote, icon: <Map size={24} />, color: 'bg-[#10263F]', link: '/admin/leads?type=Quote' },
    { title: 'Training Enquiries', value: stats.training, icon: <BookOpen size={24} />, color: 'bg-purple-500', link: '/admin/leads?type=Training' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#10263F] mb-6">Overview Dashboard</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, idx) => (
          <Link key={idx} to={card.link} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between group">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">{card.title}</p>
              <h3 className="text-3xl font-heading font-bold text-[#10263F] group-hover:text-[#F59E0B] transition-colors">{card.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm ${card.color}`}>
              {card.icon}
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center mt-12">
        <h3 className="text-xl font-bold text-[#10263F] mb-2">Welcome to the ADYA CRM</h3>
        <p className="text-gray-500 max-w-md mx-auto mb-6">Manage all your incoming survey requests, training applications, and general enquiries from one unified dashboard.</p>
        <Link to="/admin/leads" className="inline-flex bg-[#F59E0B] text-white font-bold px-5 py-2.5 text-sm md:text-base rounded-lg hover:bg-orange-600 transition-colors">
          View Recent Leads
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
