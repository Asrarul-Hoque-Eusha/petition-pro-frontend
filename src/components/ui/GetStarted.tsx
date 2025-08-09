import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to get started?
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
        
        {/* CTA Button */}
        <div className="mb-4">
          <Link to='/login'
           className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            Try It Free
          </Link>
        </div>
        
        {/* No Credit Card Text */}
        <p className="text-blue-100 text-sm font-medium">
          No Credit Card Required
        </p>
      </div>
    </div>
  );
}

export default GetStarted;