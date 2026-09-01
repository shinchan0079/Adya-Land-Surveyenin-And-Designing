import { useEffect, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Map, BookOpen, LogOut, Menu, X } from 'lucide-react';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }
      
      try {
        const res = await fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          setIsAdmin(true);
        } else {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }
      } catch (e) {
        navigate('/admin/login');
      }
    };
    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (!isAdmin) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Verifying Access...</div>;

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} />, exact: true },
    { name: 'All Leads', path: '/admin/leads', icon: <Users size={20} /> },
    { name: 'Survey Requests', path: '/admin/leads?type=Quote', icon: <Map size={20} /> },
    { name: 'Training Enquiries', path: '/admin/leads?type=Training', icon: <BookOpen size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} flex-shrink-0 bg-[#10263F] text-white flex flex-col transition-all duration-300 shadow-xl`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
          {isSidebarOpen && <span className="font-heading font-bold text-lg tracking-wider text-[#F59E0B]">ADYA CRM</span>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 rounded hover:bg-gray-800 text-gray-300">
            <Menu size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              <NavLink 
                key={item.name}
                to={item.path}
                end={item.exact}
                className={({ isActive }) => 
                  `flex items-center px-3 py-3 rounded-lg transition-colors font-medium text-sm ${
                    isActive ? 'bg-[#F59E0B] text-white shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                <div className={`${!isSidebarOpen ? 'mx-auto' : 'mr-3'}`}>{item.icon}</div>
                {isSidebarOpen && <span>{item.name}</span>}
              </NavLink>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-800">
          <button onClick={handleLogout} className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-lg transition-colors">
            <LogOut size={20} className={`${!isSidebarOpen ? 'mx-auto' : 'mr-3'}`} />
            {isSidebarOpen && <span>Secure Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
          <h1 className="text-lg font-bold text-[#10263F]">CRM Administration</h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
              A
            </div>
            <span className="text-sm font-bold text-gray-700 hidden sm:block">Admin User</span>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;
