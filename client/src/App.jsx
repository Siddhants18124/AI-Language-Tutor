import './App.css';
import Loader from "./components/Loader/Loader.jsx";
import { useSelector } from "react-redux";
import Router from './router/Router.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function App() {
  const { counter } = useSelector((state) => state.loader);
  const loading = counter > 0;

  const notify = () => toast("Do Not Forget to practice the language course");

  useEffect(() => {
    // Set an interval to call the notify function every 2 seconds
    const intervalId = setInterval(() => {
      notify();
    }, 100000000);

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      {loading && <Loader />}
      <Router />
      <Footer/>
    </div>
  )
};

export default App;

