import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Javascript from './components/Javascript';
import Reactcom from './components/Reactcom';
import Csscom from './components/Csscom';
import Htmlcom from './components/Htmlcom';
import Course from './components/Course';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
        <Routes>
          <Route path="/html" element={<Htmlcom />} />
          <Route path="/css" element={<Csscom />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/react" element={<Reactcom />} />
          <Route path="/course" element={<Course />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;