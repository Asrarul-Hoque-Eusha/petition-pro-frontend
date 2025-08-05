import { useState } from 'react';
import { BarChart3, Clock, Zap, User, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';


const LandingSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState("");

  const chartData = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 35 },
    { month: 'Mar', value: 28 },
    { month: 'Apr', value: 45 },
    { month: 'May', value: 65 },
    { month: 'Jun', value: 40 },
    { month: 'Jul', value: 55 },
    { month: 'Aug', value: 75 }
  ];

  return (
    <Element name='home'>
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full -translate-x-48 -translate-y-48 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full translate-x-48 translate-y-48 opacity-60"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Smart, Accurate, and Fast Petition Drafting
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            for <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Individuals & Attorneys</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our AI handle the complexity so you can focus on winning your case.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Start Drafting
            </Link>
            <Link to="/login"
            className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 bg-white hover:bg-blue-50">
              Try It Free
            </Link>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features and Interface */}
          <div className="space-y-8">
            {/* Search Interface Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 h-3 bg-gray-200 rounded"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    readOnly
                    placeholder="Search here"
                    className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Submit
                  </button>
                </div>
                
                <div className="w-full bg-blue-500 rounded-full h-2 mb-4">
                  <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                </div>
                <div className="w-16 h-4 bg-gray-300 rounded"></div>
              </div>

              {/* Feature Badges */}
              <div className="space-y-3">
                <div 
                  className="flex items-center gap-3 p-3 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 transition-colors"
                  onMouseEnter={() => setHoveredFeature('compelling')}
                  onMouseLeave={() => setHoveredFeature('')}
                >
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700 font-medium">Compelling petitions in minutes</span>
                </div>
                
                <div 
                  className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                  onMouseEnter={() => setHoveredFeature('drafter')}
                  onMouseLeave={() => setHoveredFeature('')}
                >
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Petition Drafter</span>
                </div>
                
                <div 
                  className="flex items-center gap-3 p-3 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 transition-colors"
                  onMouseEnter={() => setHoveredFeature('efficient')}
                  onMouseLeave={() => setHoveredFeature('')}
                >
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700 font-medium">Fast and Efficient</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Attorney Portal */}
          <div className="space-y-8">
            {/* Professional Figure */}
            

            {/* Attorney Portal */}
            <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Attorney Portal</h3>
              <p className="text-gray-700 mb-6">Track your Petition information and make life easier</p>
              
              {/* User List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-white bg-opacity-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">BJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Ben Jeremy</div>
                    <div className="text-sm text-gray-600">Public Inquiry</div>
                  </div>
                  <div className="ml-auto w-8 h-6 bg-red-400 rounded"></div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white bg-opacity-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">KP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Kyle Phil</div>
                    <div className="text-sm text-gray-600">Lawyer</div>
                  </div>
                </div>
              </div>

              {/* Petition Drafter Button */}
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold mb-6 transition-colors">
                Petition Drafter
              </button>

              {/* Report Section */}
              <div className="bg-white bg-opacity-70 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-800">Petition Report</span>
                  <span className="text-sm text-gray-600">Mar 21 - Apr 25</span>
                </div>
                
                {/* Chart */}
                <div className="flex items-end justify-between h-32 mb-4">
                  {chartData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div 
                        className={`w-4 rounded-t transition-all duration-500 ${
                          index < 5 ? 'bg-blue-400' : 'bg-gray-300'
                        }`}
                        style={{ height: `${item.value}%` }}
                      ></div>
                      <span className="text-xs text-gray-600">{item.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Generate compelling petitions in minutes, not hours</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Higher Success Rate</h3>
              <p className="text-gray-600">AI-powered insights improve your petition quality</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105">
              <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
              <p className="text-gray-600">Track and manage all your petitions in one place</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
}

export default LandingSection;