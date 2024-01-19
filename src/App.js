import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Navigate, Route, Routes } from 'react-router-dom';
// import './App.css';
import About from './Sections/About';
import Home from './Sections/Home';
import Service from './Sections/Service';
import Contact from './Sections/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';




function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/service" element={<Service />}/>
      <Route exact path="/contact" element={<Contact/>}/>
      
    <Route path="*" element={<Navigate to ="/" />}/>

    </Routes>
    <Footer/>
  
   </>
  );
}

export default App;
