import { createBrowserRouter } from 'react-router-dom';

import Login from './components/ui/Login';
import NotFound from './components/ui/NotFound';
import BasicDetails from './components/ui/BasicDetails';
import Toolbar from './components/ui/Toolbar';
import Achievements from './components/ui/Achievements';
import SummaryEndeavorPlan from './components/ui/SummaryEndeavorPlan';
import ExternalRecognitions from './components/ui/ExternalRecognition';
import Footer from './components/ui/Footer';

export const Router = createBrowserRouter([
  
  { path: '*', element: <NotFound /> },
  {  path: "/login", element: <Login />},
  { path: '/', element: <Toolbar /> },
  { path: '/footer', element: <Footer /> },
  { path: '/basic-details', element: <BasicDetails /> },
  { path: '/achievements', element: <Achievements /> },
  { path: '/summary-endeavor-plan', element: <SummaryEndeavorPlan /> },
  { path: '/external-recognitions', element: <ExternalRecognitions /> },
]);
