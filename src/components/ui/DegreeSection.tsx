import { useRef, useState } from 'react';
import { Sparkles, Upload } from 'lucide-react';

interface DegreeData {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  major: string;
  isStillStudying: boolean;
}

interface Props {
  index: number;
  onDegreeChange: (index: number, data: DegreeData) => void;
  onFileChange: (index: number, file: File | null) => void;
}

const DegreeSection: React.FC<Props> = ({ index, onDegreeChange, onFileChange }) => {
  const [formData, setFormData] = useState<DegreeData>({
    institution: '',
    degree: '',
    startDate: '',
    endDate: '',
    major: '',
    isStillStudying: false,
  });

  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const subjects = [
      { label: 'Computer Science', value: 'computer-science' },
      { label: 'Engineering', value: 'engineering' },
      { label: 'Medicine', value: 'medicine' },
    ];

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10MB.");
      return;
    }
    setFile(selectedFile || null);
    onFileChange(index, selectedFile || null);
  };

  const handleInputChange = (key: keyof DegreeData, value: string | boolean) => {
    const updated = { ...formData, [key]: value };
    setFormData(updated);
    onDegreeChange(index, updated);
  };

  return (
    <div className="mb-8 border-b border-gray-200 pb-3 last:border-b-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">
          Education
        </h3>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
          <span className="text-sm font-medium">Fill with AI</span>
          <Sparkles className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
          <input
            type="text"
            placeholder="Institution Name"
            value={formData.institution}
            onChange={(e) => handleInputChange('institution', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
          <input
            type="text"
            placeholder="Degree"
            value={formData.degree}
            onChange={(e) => handleInputChange('degree', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white"
            required
            />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
            disabled={formData.isStillStudying}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white"
            required
            />
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={formData.isStillStudying}
            onChange={(e) => handleInputChange('isStillStudying', e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
          />
          <span className="text-sm text-gray-700">I am still studying</span>
        </label>
      </div>

      <div className='mb-5'>
        <label className="block text-sm font-medium text-gray-700 mb-2">Major</label>
        <select
          value={formData.major}
          onChange={(e) => handleInputChange('major', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white"
        >
          <option value="">Select</option>
            {subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Degree Certificate (PDF)</label>
        <div
          onClick={handleClick}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
        >
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
          <p className="text-sm text-gray-500">Upload PDF file max size: 10MB</p>
        </div>
      </div>
    </div>
  );
};

export default DegreeSection;