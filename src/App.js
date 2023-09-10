import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Blog from "./pages/blog/Blog";
import Error from "./pages/error404/Error";
import Contact from "./pages/contact/Contact";
import Inscription from "./pages/inscription/Inscription";
import Activites from "./pages/activites/Activites";
import NosValeurs from './pages/NosValeurs/NosValeurs';

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
    <Route path="/contact" element ={<Contact/>} />
    <Route path="/inscription" element ={<Inscription/>} />

    {/* path"*" fonctionne si l'url ne correspond pas  */}
    <Route path="*" element ={<Error/>} />


    </Routes>
    </BrowserRouter>

  );
};

export default App;


