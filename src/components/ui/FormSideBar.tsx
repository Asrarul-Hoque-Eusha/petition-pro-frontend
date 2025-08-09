import { useState } from "react";
import { User, Star, Award, FileText } from "lucide-react"; 
import { Link } from "react-scroll";

  const sidebarItems = [
    { id: 'Basic Details', icon: User, label: 'Basic Details', link: 'basic-details' },
    { id: 'Achievements', icon: Award, label: 'Achievements', link: 'achievements' },
    { id: 'Summary', icon: FileText, label: 'Summary, Endeavor and Plan', link: 'summary-endeavor-plan' },
    { id: 'External', icon: Star, label: 'External Recognitions', link: 'external-recognition' }
  ];

const FormSideBar = () => {
  const [activeSection, setActiveSection] = useState<string>("Basic Details");

  return (
    <div className="w-80 bg-blue-500 text-white border-r rounded-lg border-gray-200 h-[400px]">
      <div className="p-2">
        {/* Sidebar Navigation */}
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link to={item.link} smooth={true} duration={350}
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-2 py-3 rounded-xl text-left transition-colors ${
                  activeSection === item.id
                    ? "bg-white text-black"
                    : "text-white hover:bg-gray-200 hover:text-black"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default FormSideBar;
