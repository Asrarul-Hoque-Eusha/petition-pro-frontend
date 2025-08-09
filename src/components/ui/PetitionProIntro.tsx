import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const PetitionProIntro = () => {
  return (
    <Element name='how-it-works'>
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Introduce <span className="text-blue-500">Petition Pro.</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Petition Pro is a cutting-edge AI tool designed to assist individuals and legal professionals in drafting precise 
            legal petitions and documents with ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='/register'
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Join for Free
            </Link>
            <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-medium border border-gray-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Making legal documentation faster,
                </h3>
                <h3 className="text-xl font-semibold mb-4">
                  <span className="text-blue-500">accessible, and affordable</span> for everyone.
                </h3>
                <p className="text-gray-600 text-sm">
                  Our AI engine is trained on thousands of legal documents and supervised by 
                  attorneys.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Step 1: Select user type (User or Attorney)",
                  "Step 2: Select petition type (e.g., immigration, civil, family law)",
                  "Step 3: Answer guided questions",
                  "Step 4: AI generates petition draft",
                  "Step 5: Review and edit draft",
                  "Step 6: Collaborate with client or team (for attorneys)",
                  "Step 7: Finalize and submit or download",
                  "Step 8: Manage drafts in your portal"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image and Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face" 
                  alt="Professional working with legal documents" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Introduce Petition Pro.
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Petition Pro is a cutting-edge AI tool designed to assist individuals and
                </p>
                <button className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg font-medium border border-gray-300 transition-colors text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
}

export default PetitionProIntro;