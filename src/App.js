import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Blog from "./pages/blog/Blog";
import Error from "./pages/error404/Error";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

const App = () => {
  return (
    // Configuration des routes
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/about" element ={<About/>} />
    <Route path="/contact" element ={<Contact/>} />
    <Route path="/blog" element ={<Blog/>} />
    {/* path"*" fonctionne si l'url ne correspond pas  */}
    <Route path="*" element ={<Error/>} />


    </Routes>
    </BrowserRouter>

  );
};

export default App;


