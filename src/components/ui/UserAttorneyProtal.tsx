import { Check, FileText, Shield, BarChart3, Laptop } from 'lucide-react';
import { Element } from 'react-scroll';

const PetitionProPortals = () => {
  return (
    <Element name='about'>
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* User Portal Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About User Portal
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our AI engine is trained on thousands of legal documents and 
              supervised by attorneys.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Dashboard for managing drafts",
                "Secure storage for documents", 
                "Guided drafting tools",
                "Option to consult a partner attorney"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Join to User Portal
            </button>
          </div>
          
          {/* Right Mockup */}
          <div className="bg-gray-100 rounded-2xl p-6">
            <div className="bg-gray-800 rounded-t-xl p-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-sm">Dashboard for managing drafts</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Sajib Al Seraz</div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Ali Faisal</div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Khalid Hasan</div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-700 font-medium">Option to consult a partner attorney</span>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-blue-900">Secure storage for documents</div>
                  <div className="text-xs text-blue-600">Verified - 4</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attorney Portal Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Mockup */}
          <div className="bg-gray-100 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full flex gap-1 text-xs font-medium">
                    <Laptop className="w-3 h-3" />
                    Collaboration
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  API or Integration Successfully
                </h3>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    Petitions Drafting
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Bulk drafting options
                </h3>
                <div className="w-16 h-16 border-2 border-blue-300 border-dashed rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Manage Client
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">
                  Client petitions in one place
                </h3>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Attorney Portal
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our AI engine is trained on thousands of legal documents and 
              supervised by attorneys.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Manage client petitions in one place",
                "API or integration with case management software",
                "Bulk drafting options", 
                "Visual Attorney portal sample view"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Join to Attorney Portal
            </button>
          </div>
        </div>
        
      </div>
    </div>
    </Element>
  );
}

export default PetitionProPortals;