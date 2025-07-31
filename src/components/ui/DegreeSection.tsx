import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const DegreeSection = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [major, setMajor] = useState('');
    const [isStillStudying, setIsStillStudying] = useState(false);

    return(
        <>
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Education</h3>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <span className="text-sm font-medium">Fill with AI</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Institutions</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <select
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Placeholder</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <select
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Placeholder</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isStillStudying}
                onChange={(e) => setIsStillStudying(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
              />
              <span className="text-sm text-gray-700">I am still studying</span>
            </label>
          </div>

          <div className='mb-5'>
            <label className="block text-sm font-medium text-gray-700 mb-2">Major</label>
            <select
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white"
            >
              <option value="">Placeholder</option>
              <option value="computer-science">Computer Science</option>
              <option value="engineering">Engineering</option>
              <option value="medicine">Medicine</option>
            </select>
          </div>
        </>
    );
};

export default DegreeSection;