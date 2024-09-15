import Login from '../pages/Login/Login.jsx';
import Signup from '../pages/Signup/Signup.jsx';
import Home from '../pages/Home/Home.jsx';
import AuthenticatedRedirect from '../components/AuthenticatedRedirect/AuthenticatedRedirect.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import GenerateCourse from '../pages/Modules/GenerateCourse.jsx';
import ModuleDetailsPage from '../pages/Modules/ModulesDetailsPage.jsx';

const routes = [
  //user
  { path: "/login", element: <AuthenticatedRedirect><Login /></AuthenticatedRedirect>, protected: false },
  { path: "/signup", element: <AuthenticatedRedirect><Signup /></AuthenticatedRedirect>, protected: false },
  { path: "/", element: <Home />, protected: true },
  // { path: "/dashboard", element: <Dashboard />, protected: true },
  {path:"/generate-course", element:<GenerateCourse/>,protected:true},
  // {path:"/modules", element:<ModuleDetailsPage />,protected:true },
  {path:"/courses/:moduleId", element:<ModuleDetailsPage/>,protected:true }, 
  // {path:"/courses/modules/:courseId", element:<ModuleDetailsPage/>,protected:true }, 

  //other
  { path: "*", element: <NotFound />, protected: false },
];

export default routes;
