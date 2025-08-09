import { useRef, useState } from 'react';
import { Element } from 'react-scroll';
import { ChevronUp, ChevronDown, Upload, Sparkles } from 'lucide-react';
import DegreeSection from './DegreeSection';
import { formAPI } from '../../services/form-api';

interface DegreeData {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  major: string;
  isStillStudying: boolean;
}

const BasicDetails = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cvFile, setCVFile] = useState<File | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [immigrationStatus, setImmigrationStatus] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [countDegrees, setCountDegrees] = useState(1);
  
  // Store degree data and files
  const [degreeData, setDegreeData] = useState<Record<number, DegreeData>>({});
  const [degreeFiles, setDegreeFiles] = useState<Record<number, File | null>>({});

  const addMoreDegree = () => {
    if (countDegrees < 5) {
      setCountDegrees(prev => prev + 1);
    }
  };

  const handleCvChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > 10 * 1024 * 1024) {
      alert("Please select a file under 10MB.");
      return;
    }

    setCVFile(file);

    const userId = "user-12345"; // Call auth api to get user id
    const payload = {
      user_id: userId,
      cv_file: file,
    };

    try {
      const response = await formAPI.uploadCv(payload);
      if (response.status === 200 || response.status === 201) {
        // Note: Avoid localStorage as per instructions
        alert("CV uploaded successfully!");
      } else {
        alert(`Upload failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  // Handle degree data changes
  const handleDegreeChange = (index: number, data: DegreeData) => {
    setDegreeData(prev => ({
      ...prev,
      [index]: data
    }));
  };

  // Handle degree file changes
  const handleFileChange = (index: number, file: File | null) => {
    setDegreeFiles(prev => ({
      ...prev,
      [index]: file
    }));
  };

  // Submit education data
  const submitEducation = async () => {
    try {
      const userId = "user-12345"; // Get from auth

      // Prepare education entries - convert object to array
      const educationEntries = Object.keys(degreeData).map(key => {
        const index = parseInt(key);
        const data = degreeData[index];
        
        return {
          institution: data.institution,
          degree: data.degree,
          startDate: data.startDate,
          endDate: data.isStillStudying ? null : data.endDate,
          major: data.major,
          isStillStudying: data.isStillStudying
        };
      });

      // Prepare files - convert object to array, maintaining order
      const files = Object.keys(degreeFiles)
        .sort((a, b) => parseInt(a) - parseInt(b))
        .map(key => degreeFiles[parseInt(key)])
        .filter(file => file !== null) as File[];

      // Create FormData
      const formData = new FormData();
      
      // Add degree entries as JSON string (based on your backend parser)
      formData.append('degree_entries', JSON.stringify(educationEntries));
      
      // Add files
      files.forEach(file => {
        formData.append('degree_files', file);
      });

      // Make API call
      const response = await fetch(`/api/users/${userId}/submit/education`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        alert('Education data submitted successfully!');
        console.log('Submission result:', result);
      } else {
        const error = await response.text();
        alert(`Submission failed: ${error}`);
      }

    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit education data. Please try again.');
    }
  };

  return (
    <Element name='basic-details'>
      <div className="flex-1 px-8 py-2 justify-center items-center bg-gray-50">
        <div className="max-w-4xl mx-auto w-full">
          <div className='border border-gray-200 hover:border-blue-200 rounded-lg px-6 py-3'>
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
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Curriculum Vitae</label>
                    <div onClick={handleClick}
                      className="border-2 border-dashed border-gray-300 rounded-lg 
                      p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                      <p className="text-blue-600 font-medium mb-1">Click to upload, Or Drag and Drop</p>
                      <input type="file" 
                        onChange={handleCvChange} 
                        ref={fileInputRef} 
                        className='hidden'
                        accept="application/pdf"
                      />
                      {cvFile && (<p className='mt-2 text-sm text-green-400'>Selected: {cvFile.name}</p>)}
                      <p className="text-sm text-gray-500">Upload PDF file max file size: 10MB</p>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-3">
                  {[...Array(countDegrees)].map((_, index) => (
                    <DegreeSection 
                      key={index}
                      index={index}
                      onDegreeChange={handleDegreeChange}
                      onFileChange={handleFileChange}
                    />
                  ))}

                  <div className="flex justify-between items-center">
                    {countDegrees < 5 && (
                      <button onClick={addMoreDegree}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="text-lg">+</span>
                        <span className="text-sm font-medium">Add More Degree</span>
                      </button>
                    )}
                    
                    <button 
                      onClick={submitEducation}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Mark as Completed
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default BasicDetails;