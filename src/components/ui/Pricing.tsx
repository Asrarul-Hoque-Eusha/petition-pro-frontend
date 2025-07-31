import { useState } from 'react';
import { Check } from 'lucide-react';

const PetitionProPricing = () => {
  const [isAttorney, setIsAttorney] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "/for ever",
      description: "Best for small business owners, startups who neededs landing page for their business.",
      buttonText: "Get Started",
      buttonStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50",
      features: [
        "Draft basic petitions (limited types)",
        "Watermarked downloads",
        "Save up to 5 drafts"
      ]
    },
    {
      name: "Pro",
      price: "$20",
      period: "/per month",
      description: "Best for small business owners, startups who neededs landing page for their business.",
      buttonText: "Get Started",
      buttonStyle: "bg-blue-500 text-white hover:bg-blue-600",
      isRecommended: true,
      features: [
        "All petition types",
        "Unlimited drafts",
        "No watermark on downloads",
        "Priority email support",
        "Edit & finalize with AI assist"
      ]
    },
    {
      name: "Attorney Pro",
      price: "$60",
      period: "/per month",
      description: "Best for small business owners, startups who neededs landing page for their business.",
      buttonText: "Get Started",
      buttonStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50",
      features: [
        "All Pro features",
        "Client collaboration tools",
        "Team access (up to 3 seats)",
        "API / case management integration",
        "Secure cloud storage for petitions",
        "Version history & tracking"
      ]
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Make the wise decision with plan
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Enjoy a 30-day free trial with selected features. Explore how much Petitions costs including essential features.
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAttorney ? 'text-gray-900' : 'text-gray-500'}`}>
              For User
            </span>
            <button
              onClick={() => setIsAttorney(!isAttorney)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAttorney ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAttorney ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAttorney ? 'text-gray-900' : 'text-gray-500'}`}>
              For Attorney
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border p-8 ${
                plan.isRecommended ? 'border-blue-200 shadow-lg' : 'border-gray-200 shadow-sm'
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Get Started Button */}
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors mb-6 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">
                  What's included
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PetitionProPricing;