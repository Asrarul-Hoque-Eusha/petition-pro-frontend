import { useState } from 'react';
import { Element } from 'react-scroll';
import { ChevronUp, ChevronDown } from 'lucide-react';
import ProjectSection from './ProjectSection';
import PublicationSection from './PublicationSection';
import PatentSection from './PatentSection';
import IndustrialAdoptionSection from './IndustrialAdoptionSection';

const Achievements = () => {
  const [activeSection, setActiveSection] = useState('Achievements');
  const [isExpanded, setIsExpanded] = useState(true);
  const [countPublication, setCountPublication] = useState(1);
  const [countProject, setCountProject] = useState(1);
  const [countPatent, setCountPatent] = useState(1);
  const [countIndustrialAdoption, setCountIndustrialAdoption] = useState(1);
    
  const addMorePublication = () => {
    if (countPublication < 5) {
      setCountPublication(prev => prev + 1);
    }
  };

  const addMoreProject = () => {
    if (countProject < 5) {
      setCountProject(prev => prev + 1);
    }
  };

  const addMorePatent = () => {
    if (countPatent < 5) {
      setCountPatent(prev => prev + 1);
    }
  };

  const addMoreIndustrialAdoption = () => {
    if (countIndustrialAdoption < 5) {
      setCountIndustrialAdoption(prev => prev + 1);
    }
  };

  return (
    <Element name="achievements">
    <div className="flex-1 p-8 justify-center items-center bg-gray-50">
        <div className='max-w-4xl mx-auto w-full my-8'>
           <div className=''>
            <div className='border border-gray-200 hover:border-blue-200 rounded-lg p-4 mb-6'>
            {activeSection === 'Achievements' && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-semibold text-gray-900">Achievements</h1>
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-gray-400 hover:text-gray-600"
                    >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {isExpanded && (
                  <>
                  {/* Project Section */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                    {[...Array(countProject)].map((_,index) =>(
                        <ProjectSection key={index} />
                    ))}

                    {countProject<5 && (
                      <button onClick={addMoreProject}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="text-lg">+</span>
                        <span className="text-sm font-medium">Add More Project</span>
                      </button>
                    )}
                  </div>

                  {/* Publications Section */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                    {[...Array(countPublication)].map((_,index) => (
                        <PublicationSection key={index}/>
                    ))}

                    {countPublication<5 && (
                      <button onClick={addMorePublication}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="text-lg">+</span>
                        <span className="text-sm font-medium">Add More Publications</span>
                      </button>
                    )}
                  </div>

                  {/* Patents Section */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                    {[...Array(countPatent)].map((_,index) =>(
                        <PatentSection key={index}/>
                    ))}

                    {countPatent<5 &&(
                      <button onClick={addMorePatent}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="text-lg">+</span>
                        <span className="text-sm font-medium">Add More Patent</span>
                      </button>
                    )}
                  </div>

                  {/* Industrial Adoption Section */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                      {[...Array(countIndustrialAdoption)].map((_,index) =>(
                          <IndustrialAdoptionSection key={index}/>
                      ))}

                      {countIndustrialAdoption<5 && (
                        <button onClick={addMoreIndustrialAdoption}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                          <span className="text-lg">+</span>
                          <span className="text-sm font-medium">Add More Industrial Adoption</span>
                        </button>
                      )}
                  </div>
                </>
                )}
              </>
            )}
          </div>
        
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Achievements;