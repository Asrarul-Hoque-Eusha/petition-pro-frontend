import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Footer from "../../components/ui/Footer";
import LandingSection from "../../components/ui/LandingSection";
import GetStarted from "../../components/ui/GetStarted";
import PetitionProPricing from "../../components/ui/Pricing";
import PetitionProPortals from "../../components/ui/UserAttorneyProtal";
import BenefitsPetitionPro from "../../components/ui/BenefitsPetitionPro";
import PetitionProIntro from "../../components/ui/PetitionProIntro";
import Navbar from "../../components/ui/NavbarAnonymous";


const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [location]);
    
    return (
        <div className="min-h-screen ">
        <Navbar />
        <LandingSection />
        <PetitionProIntro />
        <BenefitsPetitionPro />
        <PetitionProPortals />
        <section id="pricing">
        <PetitionProPricing />
        </section>
        <GetStarted />
        <Footer />
        </div>
    );
}

export default HomePage;