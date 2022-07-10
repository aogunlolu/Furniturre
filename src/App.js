import './App.css';
import {Routes, Route} from "react-router-dom"
import Collections from './Component/Collections'
import Contact from './Component/Contact'
import Journal from './Component/Journal'
import Home from './pages/Home'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Sofas from './Component/Sofas';
import About from './Component/About';
import Sidebar from './Component/Sidebar';
import Banners from './Component/Banners';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/collections" element={<Collections/>} />
        <Route path="/sofas" element={<Sofas/>} /> 
        <Route path="/journal" element={<Journal/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/Sidebar" element={<Sidebar/>} />
        <Route path="/banner" element={<Banners/>} />
      </Routes> 
      {/* <Footer/> */}
    </>

  );
}

export default App;
