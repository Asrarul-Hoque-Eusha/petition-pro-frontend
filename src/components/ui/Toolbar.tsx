import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import UserMenu from './UserMenu';

const Toolbar = () => {

  return (
    /* Header */
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="bg-white text-blue-600 p-2 rounded-lg font-bold text-xl">P</div>
            <span className="text-xl font-semibold">PetitionsPro.</span>
          </div>
          <div className="flex space-x-4">
            <Link to="/user-portal" className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
              <span>Petition Builder</span>
              <Sparkles className="w-4 h-4" />
            </Link>
            <ScrollLink to="pricing" smooth={true} duration={350} className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
              <span>Pricing</span>
              <Sparkles className="w-4 h-4" />
            </ScrollLink>
          </div>
        </div>
        {/* <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700">MS</span>
          </div>
          <span className="text-sm">Mohammad Sam</span>
        </div> */}
        <UserMenu />
      </div>
    </div>
  );
}

export default Toolbar;
