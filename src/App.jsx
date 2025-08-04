import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Common/layout';
import Homepage from './Components/Homepage/Homepage';
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
          {/* <Route path="aboutus" element={<AboutUs />} />
          <Route path="services" element={<Services />} /> */}
          <Route path="events" element={<div>Events</div>} />
          <Route path="celebrities" element={<div>Celebrities</div>} />
          <Route path="singers" element={<div>Singers</div>} />
          <Route path="book-now" element={<div>Book Now</div>} />
          <Route path="contact" element={<div>Connect</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
