import Toolbar from "../../components/ui/Toolbar";
import Footer from "../../components/ui/Footer";
import LandingSection from "../../components/ui/LandingSection";
import GetStarted from "../../components/ui/GetStarted";
import PetitionProPricing from "../../components/ui/Pricing";
import PetitionProPortals from "../../components/ui/UserAttorneyProtal";
import BenefitsPetitionPro from "../../components/ui/BenefitsPetitionPro";
import PetitionProIntro from "../../components/ui/PetitionProIntro";


const HomePage = () => {
    return (
        <div className="min-h-screen ">
        <Toolbar />
        <LandingSection />
        <PetitionProIntro />
        <BenefitsPetitionPro />
        <PetitionProPortals />
        <PetitionProPricing />
        <GetStarted />
        <Footer />
        </div>
    );
}

export default HomePage;