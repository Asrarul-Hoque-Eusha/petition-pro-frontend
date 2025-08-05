import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Element } from 'react-scroll';

const SummaryEndeavorPlan: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Element name='summary-endeavor-plan'>
    <div className='justify-center items-center bg-gray-50 flex-1 p-8'>
        <div className='max-w-4xl mx-auto w-full'>
    <div className="bg-white rounded-lg border border-gray-200 hover:border-blue-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Summary, Endeavor and Plan</h2>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-gray-600"
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-8">
          {/* Reusable textarea section */}
          {[
            { title: "Summary", label: "Personal Summary" },
            { title: "Endeavor", label: "Proposed Endeavor" },
            { title: "Work Plan", label: "Work Plan" }
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <span className="text-sm font-medium">Fill with AI</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{item.label}</label>
                <textarea
                  placeholder="Placeholder"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    </div>
    </Element>
  );
};

export default SummaryEndeavorPlan;
