import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import About from './Pages/About';
import ProductPage from './Pages/ProductPage';
import TestReport from './Pages/TestReport';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Established from './Pages/Established';
import Projects from './Pages/Projects';
import Certificates from './Pages/Certificates';
import Catalogues from './Pages/Catalogues';
import Career from './Pages/Career';
import DealerPage from './Pages/Dealer';
import LinkTree from './components/LinkTree';
import { HelmetProvider } from 'react-helmet-async';
import Blog from './Pages/Blogs/Blog';
import BlogDetails from './Pages/Blogs/BlogDetails';
import PageTracker from './PageTracker';
import SEO from './SEO';

function NotFound() {
  return (
    <main style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1>Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      <a href="/">Return to Alutuff Home</a>
    </main>
  );
}

function App() {
  // Do not block the initial render with the old 3-second loader.
  // Static prerendering needs the actual page HTML immediately.
  return (
    <HelmetProvider>
      <Router>
        <PageTracker />
        <SEO />
        <div className="App">
          <Navbar />
          <LinkTree />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/career" element={<Career />} />
            <Route path="/news" element={<News />} />
            <Route path="/testReport" element={<TestReport />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalogues" element={<Catalogues />} />
            <Route path="/established" element={<Established />} />
            <Route path="/dealer" element={<DealerPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
