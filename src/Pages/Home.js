import React from 'react'
import HomeBanner from "../components/HomeBanner"
import OverlappingCards from "../components/OverlappingCards"
import Separate from '../components/Separate'
import BeforeAfterSlider from "../components/BeforeAfterSlider"
import StickySection from "../components/StickySection"
import FaqSection from '../components/FaqSection'
import StayWithUs from '../components/StayWithUs'
import HomeAbout from '../components/HomeAbout'
import WhyDifferent from '../components/WhyDifferent'
import HomeProducts from '../components/HomeProducts'
import { Helmet } from 'react-helmet-async';
import "./Home.css"

function Home() {
  return (
    <div>

<Helmet>
<title>ACP Sheets Manufacturer in India | Aluminium Composite Panels – Alutuff</title>

<meta
  name="description"
  content="Alutuff is a trusted ACP sheets manufacturer in India offering premium aluminium composite panels for facade, exterior, interior & signage with pan-India supply and long warranty."
/>
 <link rel="canonical" href="https://alutuff.in/" />
  <meta name="robots" content="index, follow, max-image-preview:large" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
<meta property="og:title" content="ACP Sheets Manufacturer in India – Alutuff" />
  <meta
    property="og:description"
    content="Premium ACP panels manufactured in India for modern architecture, facades and interiors."
  />
  <meta property="og:url" content="https://alutuff.in/" />
  <meta property="og:image" content="https://alutuff.in/alutuff-acp-sheets-manufacturer-supplier-india.jpg" />
  <meta property="og:site_name" content="Alutuff ACP Sheets" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Best ACP Sheets Manufacturer in India | Alutuff" />
  <meta
    name="twitter:description"
    content="High-quality aluminium composite panels manufactured by Alutuff for pan-India projects."
  />
  <meta name="twitter:image" content="https://alutuff.in/alutuff-acp-sheets-manufacturer-supplier-india.jpg" />
</Helmet>



 <h1 className="seo-h1">
         ACP Sheets Manufacturer in India
      </h1>
<p className="seo-intro">
  Alutuff manufactures premium aluminium composite panels for facade,
  exterior, interior and signage applications across India.
</p>

      <HomeBanner />
      <HomeAbout />
      <HomeProducts />
      {/* <WhyDifferent /> */}
      <OverlappingCards />
      <BeforeAfterSlider />
      <StickySection />
      <FaqSection />

      <div style={{ marginBottom: "-5%" }}>
        <StayWithUs />
      </div>
    </div>
  )
}

export default Home
