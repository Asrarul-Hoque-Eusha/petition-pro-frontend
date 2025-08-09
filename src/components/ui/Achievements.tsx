import { useState } from 'react';
import { Element } from 'react-scroll';
import { ChevronUp, ChevronDown } from 'lucide-react';
import ProjectSection from './ProjectSection';
import PublicationSection from './PublicationSection';
import PatentSection from './PatentSection';
import IndustrialAdoptionSection from './IndustrialAdoptionSection';

interface ProjectData {
  projectName: string;
  clientName: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface PublicationData {
  publicationName: string;
  year: string;
  description: string;
}

interface PatentData {
  patentName: string;
  year: string;
  description: string;
}

interface IndustrialAdoptionData {
  // Define fields based on your IndustrialAdoptionSection
  name: string;
  year: string;
  description: string;
}

const Achievements = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [countPublication, setCountPublication] = useState(1);
  const [countProject, setCountProject] = useState(1);
  const [countPatent, setCountPatent] = useState(1);
  const [countIndustrialAdoption, setCountIndustrialAdoption] = useState(1);

  // State for storing form data
  const [projectData, setProjectData] = useState<Record<number, ProjectData>>({});
  const [projectFiles, setProjectFiles] = useState<Record<number, File | null>>({});
  const [publicationData, setPublicationData] = useState<Record<number, PublicationData>>({});
  const [patentData, setPatentData] = useState<Record<number, PatentData>>({});
  //const [industrialAdoptionData, setIndustrialAdoptionData] = useState<Record<number, IndustrialAdoptionData>>({});

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

  // Callback handlers for data collection
  const handleProjectChange = (index: number, data: ProjectData) => {
    setProjectData(prev => ({
      ...prev,
      [index]: data
    }));
  };

  const handleProjectFileChange = (index: number, file: File | null) => {
    setProjectFiles(prev => ({
      ...prev,
      [index]: file
    }));
  };

  const handlePublicationChange = (index: number, data: PublicationData) => {
    setPublicationData(prev => ({
      ...prev,
      [index]: data
    }));
  };

  const handlePatentChange = (index: number, data: PatentData) => {
    setPatentData(prev => ({
      ...prev,
      [index]: data
    }));
  };

  // const handleIndustrialAdoptionChange = (index: number, data: IndustrialAdoptionData) => {
  //   setIndustrialAdoptionData(prev => ({
  //     ...prev,
  //     [index]: data
  //   }));
  // };

  // API submission functions
  const submitProjects = async () => {
    try {
      const userId = "user-12345"; // Get from auth

      // Convert object to array
      const projectEntries = Object.keys(projectData).map(key => {
        const data = projectData[parseInt(key)];
        return {
          projectName: data.projectName,
          clientName: data.clientName,
          description: data.description,
          startDate: data.startDate,
          endDate: data.endDate
        };
      });

      const response = await fetch(`/api/users/${userId}/submit/project`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectEntries),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Projects submitted successfully!');
        console.log('Projects result:', result);
      } else {
        const error = await response.text();
        alert(`Project submission failed: ${error}`);
      }

    } catch (error) {
      console.error('Project submission error:', error);
      alert('Failed to submit projects. Please try again.');
    }
  };

  const submitPublications = async () => {
    try {
      const userId = "user-12345"; // Get from auth

      const publicationEntries = Object.keys(publicationData).map(key => {
        const data = publicationData[parseInt(key)];
        return {
          publicationName: data.publicationName,
          year: data.year,
          description: data.description
        };
      });

      const response = await fetch(`/api/users/${userId}/submit/publication`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(publicationEntries),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Publications submitted successfully!');
        console.log('Publications result:', result);
      } else {
        const error = await response.text();
        alert(`Publication submission failed: ${error}`);
      }

    } catch (error) {
      console.error('Publication submission error:', error);
      alert('Failed to submit publications. Please try again.');
    }
  };

  const submitPatents = async () => {
    try {
      const userId = "user-12345"; // Get from auth

      const patentEntries = Object.keys(patentData).map(key => {
        const data = patentData[parseInt(key)];
        return {
          patentName: data.patentName,
          year: data.year,
          description: data.description
        };
      });

      const response = await fetch(`/api/users/${userId}/submit/patent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patentEntries),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Patents submitted successfully!');
        console.log('Patents result:', result);
      } else {
        const error = await response.text();
        alert(`Patent submission failed: ${error}`);
      }

    } catch (error) {
      console.error('Patent submission error:', error);
      alert('Failed to submit patents. Please try again.');
    }
  };

  // Submit all achievements at once
  const submitAllAchievements = async () => {
    try {
      await Promise.all([
        submitProjects(),
        submitPublications(),
        submitPatents(),
        // Add industrial adoption submission when ready
      ]);
      alert('All achievements submitted successfully!');
    } catch (error) {
      console.error('Error submitting achievements:', error);
      alert('Some submissions failed. Please check and try again.');
    }
  };

  return (
    <Element name="achievements">
      <div className="flex-1 px-8 py-2 justify-center items-center bg-gray-50">
        <div className='max-w-4xl mx-auto w-full'>
            <div className='border border-gray-200 hover:border-blue-200 rounded-lg px-6 py-3'>
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
                        {[...Array(countProject)].map((_, index) => (
                          <ProjectSection 
                            key={index}
                            index={index}
                            onProjectChange={handleProjectChange}
                            onFileChange={handleProjectFileChange}
                          />
                        ))}

                        <div className="flex justify-between items-center">
                          {countProject < 5 && (
                            <button onClick={addMoreProject}
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                              <span className="text-lg">+</span>
                              <span className="text-sm font-medium">Add More Project</span>
                            </button>
                          )}
                          
                          <button 
                            onClick={submitProjects}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            Submit Projects
                          </button>
                        </div>
                      </div>

                      {/* Publications Section */}
                      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                        {[...Array(countPublication)].map((_, index) => (
                          <PublicationSection 
                            key={index}
                            index={index}
                            onPublicationChange={handlePublicationChange}
                          />
                        ))}

                        <div className="flex justify-between items-center">
                          {countPublication < 5 && (
                            <button onClick={addMorePublication}
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                              <span className="text-lg">+</span>
                              <span className="text-sm font-medium">Add More Publications</span>
                            </button>
                          )}
                          
                          <button 
                            onClick={submitPublications}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            Submit Publications
                          </button>
                        </div>
                      </div>

                      {/* Patents Section */}
                      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                        {[...Array(countPatent)].map((_, index) => (
                          <PatentSection 
                            key={index}
                            index={index}
                            onPatentChange={handlePatentChange}
                          />
                        ))}

                        <div className="flex justify-between items-center">
                          {countPatent < 5 && (
                            <button onClick={addMorePatent}
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                              <span className="text-lg">+</span>
                              <span className="text-sm font-medium">Add More Patent</span>
                            </button>
                          )}
                          
                          <button 
                            onClick={submitPatents}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            Submit Patents
                          </button>
                        </div>
                      </div>

                      {/* Industrial Adoption Section */}
                      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                        {[...Array(countIndustrialAdoption)].map((_, index) => (
                          <IndustrialAdoptionSection 
                            key={index}
                            // Add props when you update this component
                          />
                        ))}

                        {countIndustrialAdoption < 5 && (
                          <button onClick={addMoreIndustrialAdoption}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                            <span className="text-lg">+</span>
                            <span className="text-sm font-medium">Add More Industrial Adoption</span>
                          </button>
                        )}
                      </div>

                      {/* Submit All Button */}
                      <div className="text-center">
                        <button 
                          onClick={submitAllAchievements}
                          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                        >
                          Mark as Completed All Achievements
                        </button>
                      </div>
                    </>
                  )}
            </div>
        </div>
      </div>
    </Element>
  );
};

export default Achievements;

