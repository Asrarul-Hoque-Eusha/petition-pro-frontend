import { createBrowserRouter } from 'react-router-dom';

import Login from './components/ui/Login';
import NotFound from './components/ui/NotFound';
import BasicDetails from './components/ui/BasicDetails';
import Achievements from './components/ui/Achievements';
import SummaryEndeavorPlan from './components/ui/SummaryEndeavorPlan';
import ExternalRecognitions from './components/ui/ExternalRecognition';
import Footer from './components/ui/Footer';
import PetitionProIntro from './components/ui/PetitionProIntro';
import BenefitsPetitionPro from './components/ui/BenefitsPetitionPro';
import PetitionProPortals from './components/ui/UserAttorneyProtal';
import PetitionProPricing from './components/ui/Pricing';
import GetStarted from './components/ui/GetStarted';
import LandingSection from './components/ui/LandingSection';
import HomePage from './screens/HomePage/HomePage';
import UserPortal from './screens/UserPortal/UserPortal';

export const Router = createBrowserRouter([
  
  { path: '*', element: <NotFound /> },
  {  path: "/login", element: <Login />},
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/user-portal', element: <UserPortal /> },
  { path: '/footer', element: <Footer /> },
  { path: '/basic-details', element: <BasicDetails /> },
  { path: '/achievements', element: <Achievements /> },
  { path: '/summary-endeavor-plan', element: <SummaryEndeavorPlan /> },
  { path: '/external-recognitions', element: <ExternalRecognitions /> },
  { path: '/intro', element: <PetitionProIntro /> },
  { path: '/benefits', element: <BenefitsPetitionPro /> },
  { path: '/portals', element: <PetitionProPortals /> },
  { path: '/pricing', element: <PetitionProPricing /> },
  { path: '/get-started', element: <GetStarted /> },
  { path: '/landing', element: <LandingSection /> },
]);
