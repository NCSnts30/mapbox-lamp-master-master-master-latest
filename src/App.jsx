import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css';
import ContextProviders from './context/ContextProviders';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import NotFound from './components/404/NotFound';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<ContextProviders />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pagination" element={<Table />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
