import React from 'react'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// import InsuranceSection from './components/insurance/InsuranceSection';
// import ContactForm from './components/contact/ContactForm';
import Home from './components/home/Home';
// import TopBar from './components/topBar/TopBar';

import './App.css'


function App() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <Home />
      {/* <InsuranceSection /> */}
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}

export default App;
