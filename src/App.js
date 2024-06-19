import React from 'react';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Tophead from './components/Tophead/Tophead';
import Header from './components/Header/Header';
import Navs from './components/Navbar/Navs';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';


function App() {
  return (
    
    <>
    <Tophead/>
    <Header/>
    <Navs/>
    <Section/>
    <Footer/>
    </>
  );
}

export default App;
