import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Blog from "./pages/blog/Blog";
import Error from "./pages/error404/Error";
import Activites from "./pages/activites/Activites";
import NosValeurs from './pages/NosValeurs/NosValeurs';
import NousContact from './pages/nousContacter/NousContact';
import Formulaire from './pages/Formulaire/Formulaire';
import Afterform from './pages/afterForm/Afterform';

const App = () => {
  return (
    // Configuration des routes
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/activites" element ={<Activites/>} />
    <Route path="/valeurs" element ={<NosValeurs/>} />
    <Route path="/blog" element ={<Blog/>} />
    <Route path="/contact" element ={<NousContact/>} />
    <Route path="/inscription" element ={<Formulaire/>} />
    <Route path="/after" element ={<Afterform/>} />


    {/* path"*" fonctionne si l'url ne correspond pas  */}
    <Route path="*" element ={<Error/>} />


    </Routes>
    <Footer/>
    </BrowserRouter>

  );
};

export default App;


