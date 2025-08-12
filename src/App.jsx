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
import TalentManagement from './pages/services/Talent Management/TalentManagement';
import EventManagement from './pages/services/Event Management/EventManagement';
import BrandJingleCreations from './pages/services/Brand Jingle Creations/BrandJingleCreations';
import PRseedingsMediaAds from './pages/services/PR seedings & Media Ads/PRseedings&MediaAds';
import MovieOTTIntegrations from './pages/services/Movie & OTT Integrations/Movie&OTTIntegrations';
import BrandConsultancy from './pages/services/Brand Consultancy/Brand-Consultancy';
import SponsorshipOpportunities from './pages/services/Sponsorship Opportunities/SponsorshipOpportunities';
import TVCDigitalAds from './pages/services/TVC & Digital Ads/TVC&DigitalAds';

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
          <Route path="/talent-management" element={<TalentManagement />} />
          <Route path="/event-management" element={<EventManagement />} />
          <Route path="/brand-jingle-creations" element={<BrandJingleCreations />} />
          <Route path="/pr-seedings&media-ads" element={<PRseedingsMediaAds />} />
          <Route path="/movie&ott-integrations" element={<MovieOTTIntegrations />} />
          <Route path="/brand-consultancy" element={<BrandConsultancy />} />
          <Route path="/sponsorship-opportunities" element={<SponsorshipOpportunities />} />
          <Route path="/tvc&digitalads" element={<TVCDigitalAds />} />
        </Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
