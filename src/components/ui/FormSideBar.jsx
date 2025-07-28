// src/components/FormSideBar.tsx
import React, { useState } from "react";
import { Sparkles, User, Briefcase, Star } from "lucide-react"; // Example icons

  const sidebarItems = [
    { id: 'Basic Details', icon: User, label: 'Basic Details' },
    { id: 'Achievements', icon: Award, label: 'Achievements' },
    { id: 'Summary', icon: FileText, label: 'Summary, Endeavor and Plan' },
    { id: 'External', icon: Star, label: 'External Recognitions' }
  ];

const FormSideBar = () => {
  const [activeSection, setActiveSection] = useState<string>("basic_info");

  return (
    <div className="w-80 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        {/* Top Instruction Text */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
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
        <div className="flex space-x-3 mb-6">
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Fill with AI</span>
          </button>
          <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium">Preview</span>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default FormSideBar;
