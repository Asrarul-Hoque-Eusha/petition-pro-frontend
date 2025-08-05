import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // TODO: Add logout logic here
    console.log("Logging out...");
    setOpen(false);
    navigate('/');
  };

  const handleProfile = () => {
    setOpen(false);
    navigate('/profile');
  };

  return (
    <div className="relative" ref={menuRef}>
      <div
        className="flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        onClick={() => setOpen(prev => !prev)}
      >
        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="font-medium text-gray-700"><User className='w-4 h-4' /></span>
        </div>
        <span className="">Mohammad Sam</span>
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50 text-gray-800">
          
          <button
            onClick={handleProfile}
            className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-200"
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </button>
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-200"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
          
        </div>
      )}
    </div>
  );
};

export default UserMenu;
