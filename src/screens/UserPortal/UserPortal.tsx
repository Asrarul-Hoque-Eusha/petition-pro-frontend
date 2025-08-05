import { Sparkles, Eye } from 'lucide-react';
import { useState } from 'react';
import FormSideBar from '../../components/ui/FormSideBar';
import BasicDetails from '../../components/ui/BasicDetails';
import Achievements from '../../components/ui/Achievements';
import SummaryEndeavorPlan from '../../components/ui/SummaryEndeavorPlan';
import ExternalRecognitions from '../../components/ui/ExternalRecognition';
import Toolbar from '../../components/ui/Toolbar';
import Footer from '../../components/ui/Footer';

const UserPortal = () => {
  const [tab, setTab] = useState('fill-with-ai');
  const handleFullFormSubmit = () => {
    // Logic to handle full form submission
    // This could include validation, API calls, etc.
    alert("All sections completed and submitted successfully!");
    // Redirect or show success message
  };
    return (
        <div>
        <Toolbar />
        <div className='flex overflow-y-scroll items-center justify-between gap-8 p-6 max-w-7xl my-2 mx-auto border border-gray-200 bg-white rounded-lg shadow-md'>
        {/* Top Instruction Text */}
        <div className="mb-6 max-w-4xl">
          <h2 className="text-lg font-semibold text-gray-900">
            Complete your profile
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Add your Basic Information, professional achievements, and
            recognitions to build your profile. Once finished, click "Mark All
            Complete". Our immigration AI assistant will generate a professional
            and almost ready-to-file NIW petition package (letter and exhibit cover pages)
            for you.
          </p>
        </div>
        {/* Action Buttons */}
        <div className="flex space-x-3 mb-2">
          <button onClick={() => setTab('fill-with-ai')}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Fill with AI</span>
          </button>
          <button onClick={() => setTab('preview')}
          className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Preview</span>
          </button>
        </div>
        </div>
        <div className="flex items-start justify-center max-w-7xl mx-auto p-4">
        {/* Sidebar */}
        <aside className="w-82 sticky top-5">
            <FormSideBar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl ml-6 space-y-6">
            {/* BasicDetails gets full width */}
            <section className="w-full">
            <BasicDetails />
            </section>
            {/* Other components get similar constraints */}
            <section>
            <Achievements />
            </section>
            <section>
            <SummaryEndeavorPlan />
            </section>
            <section>
            <ExternalRecognitions />
            </section>
            <button type='submit' onClick={handleFullFormSubmit}
            className='max-w-3xl bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
              Mark All Complete
            </button>
        </main>
        </div>

        <Footer />
        </div>
    );
}

export default UserPortal;