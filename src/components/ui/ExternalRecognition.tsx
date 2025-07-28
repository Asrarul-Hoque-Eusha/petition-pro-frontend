import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, RotateCcw, Plus } from 'lucide-react';

const ExternalRecognitions: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const recognitionSections = [
    { id: 'awards', label: 'Awards' },
    { id: 'funding', label: 'Funding' },
    { id: 'expert-remuneration', label: 'Expert Remuneration Evidence' },
    { id: 'professional-org', label: 'Professional Organization Membership' },
    { id: 'review-invitation', label: 'Review Invitation' },
    { id: 'media-reports', label: 'Media & Government Reports' }
  ];

  return (
    <div className='flex-1 p-8 justify-center items-center bg-gray-50'>
    <div className='max-w-4xl mx-auto w-full my-8'>
    <div className="bg-white rounded-lg border hover:border-blue-200 border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">External Recognitions</h2>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-gray-600"
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {recognitionSections.map((section) => (
            <div key={section.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-3">
                <h3 className="text-base font-medium text-gray-900">{section.label}</h3>
                {section.id === 'expert-remuneration' && (
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                    <span className="text-sm font-medium">Fill with AI</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                  <RotateCcw className="w-4 h-4" />
                  <span className="text-sm font-medium">Skip</span>
                </button>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default ExternalRecognitions;
