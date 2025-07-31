import { useState } from 'react';
import { ChevronUp, ChevronDown, Upload, Sparkles } from 'lucide-react';
import DegreeSection from './DegreeSection';

const BasicDetails = () => {
  const [activeSection, setActiveSection] = useState('Basic Details');
  const [isExpanded, setIsExpanded] = useState(true);
  const [immigrationStatus, setImmigrationStatus] = useState('');
  const [countDegrees, setCountDegrees] = useState(1);

  const addMoreDegree = () => {
    if (countDegrees >= 5) {
      setCountDegrees(countDegrees + 1);
    }
  };

  return (
    <div className="flex-1 p-8 justify-center items-center bg-gray-50">
      <div className="max-w-4xl mx-auto w-full">
        <div className='border border-gray-200 hover:border-blue-200 rounded-lg p-6 mb-4'>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Basic Details</h1>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-gray-600"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {/* Personal Information Section */}
        {isExpanded && (
          <>
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <span className="text-sm font-medium">Fill with AI</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Immigration Status</label>
            <select
              value={immigrationStatus}
              onChange={(e) => setImmigrationStatus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white"
            >
              <option value="">Select</option>
              <option value="h1b">H-1B</option>
              <option value="f1">F-1</option>
              <option value="j1">J-1</option>
              <option value="o1">O-1</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Curriculum Vittae</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <p className="text-blue-600 font-medium mb-1">Click to upload, Or Drag and Drop</p>
              <p className="text-sm text-gray-500">Upload PDF file max file size: 5MB</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <DegreeSection />
          
          {countDegrees<5 && (<button onClick={addMoreDegree}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <span className="text-lg">+</span>
                    <span className="text-sm font-medium">Add More Degree</span>
          </button>)}
        </div>
        </>
        )}
      </div>
      </div>
    </div>
  );
};

export default BasicDetails;
