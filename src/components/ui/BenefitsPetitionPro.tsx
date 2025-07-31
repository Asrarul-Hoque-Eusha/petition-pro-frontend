import { Clock, DollarSign, Edit3, Users, Shield, UserCheck } from 'lucide-react';

const BenefitsPetitionPro = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time and Effort",
      description: "Draft complete petitions in minutes with AI-powered assistance — no more struggling with complex legal formats."
    },
    {
      icon: DollarSign,
      title: "Affordable and Accessible",
      description: "Get high-quality petition drafts at a fraction of the cost of traditional legal drafting — no more struggling with complex legal formats."
    },
    {
      icon: Edit3,
      title: "Accurate and Customizable",
      description: "AI-generated drafts based on legal best practices, with full flexibility to review and edit — no more struggling with complex legal formats."
    },
    {
      icon: Users,
      title: "Built for Users and Attorneys",
      description: "Whether you're an individual or a legal professional, Petition Pro adapts to your needs."
    },
    {
      icon: Shield,
      title: "Secure and Private",
      description: "Your data is protected with industry-standard encryption — privacy comes first."
    },
    {
      icon: UserCheck,
      title: "Easy Collaboration",
      description: "Share drafts securely with clients or team members for feedback and finalization."
    }
  ];

  return (
    <div className="bg-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits of Using Petition Pro
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI engine is trained on thousands of legal documents and supervised by attorneys.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BenefitsPetitionPro;