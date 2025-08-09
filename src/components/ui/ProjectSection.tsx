import { useRef, useState } from "react";
import { Sparkles, Upload } from "lucide-react";

interface ProjectData {
  projectName: string;
  clientName: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface Props {
  index: number;
  onProjectChange: (index: number, data: ProjectData) => void;
  onFileChange: (index: number, file: File | null) => void;
}

const ProjectSection: React.FC<Props> = ({ index, onProjectChange, onFileChange }) => {
  const [formData, setFormData] = useState<ProjectData>({
    projectName: '',
    clientName: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB.");
      return;
    }
    setFile(selectedFile || null);
    onFileChange(index, selectedFile || null);
  };

  const handleInputChange = (key: keyof ProjectData, value: string) => {
    const updated = { ...formData, [key]: value };
    setFormData(updated);
    onProjectChange(index, updated);
  };

  return (
    <div className="mb-8 border-b border-gray-200 pb-6 last:border-b-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">
          Project {index > 0 ? `#${index + 1}` : ''}
        </h3>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
          <span className="text-sm font-medium">Fill with AI</span>
          <Sparkles className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
          <input
            type="text"
            placeholder="Enter project name"
            value={formData.projectName}
            onChange={(e) => handleInputChange('projectName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
          <input
            type="text"
            placeholder="Enter client name"
            value={formData.clientName}
            onChange={(e) => handleInputChange('clientName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <textarea
          placeholder="Enter project description"
          rows={4}
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
          <div className="relative">
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent pr-10"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
          <div className="relative">
            <input
              type="date"
              value={formData.endDate}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent pr-10"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Project Attachment</label>
        <div 
          onClick={handleClick}
          className="border-2 border-dashed border-gray-300 rounded-lg 
          p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
          <p className="text-blue-600 font-medium mb-1">Click to upload, Or Drag and Drop</p>
          <input 
            type="file" 
            onChange={handleFileChange}
            ref={fileInputRef}
            className='hidden'
            accept="application/pdf"
          />
          {file && <p className='mt-2 text-sm text-green-400'>Selected: {file.name}</p>}
          <p className="text-sm text-gray-500">Upload PDF file max file size: 5MB</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;