import { Sparkles } from "lucide-react";

const PatentSection = () =>
{
    return(
        <>     
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Patents</h3>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                    <span className="text-sm font-medium">Fill with AI</span>
                    <Sparkles className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Patents</label>
                    <input
                    type="text"
                    placeholder="Placeholder"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Placeholder"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent pr-10"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                    placeholder="Placeholder"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                />
            </div>
        </>                 
    );
};

export default PatentSection;