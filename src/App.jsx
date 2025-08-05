import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Common/layout';
import Homepage from './Components/Homepage/Homepage';
import Aboutus from './pages/aboutus/aboutus';
import Services from './pages/services/services';
import Eventmain from './pages/events/Eventmain';
import CelebrityMain from './pages/celebrities/CelebrityMain';
import SingersMain from './pages/singers/singersMain';
import Booknow from './pages/book-now/booknow';
import Bookmain from './pages/book-now/Bookmain';
import ContactMain from './pages/Contact-Us/ContactMain';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Services from './pages/Services';
// ... import other page components

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the main layout wrapper here */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Eventmain />} />
          <Route path="celebrities" element={<CelebrityMain />} />
          <Route path="singers" element={<SingersMain />} />
          <Route path="book-now" element={<Bookmain />} />
          <Route path="contact" element={<ContactMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
