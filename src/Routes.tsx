import { createBrowserRouter } from 'react-router-dom';

import Login from './components/ui/Login';
import NotFound from './components/ui/NotFound';
import HomePage from './screens/HomePage/HomePage';
import UserPortal from './screens/UserPortal/UserPortal';
import Register from './components/ui/Register';

export const Router = createBrowserRouter([
  
  { path: '*', element: <NotFound /> },
  {  path: "/login", element: <Login />},
  { path: '/register', element: <Register /> },
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/user-portal', element: <UserPortal /> },
]);
