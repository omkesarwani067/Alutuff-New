import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import { Helmet } from 'react-helmet-async';
const bannerImage = '/static/media/1400.5b998818e97ff18c5b37.jpg';
import ContactForm from '../components/ContactForm';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <>
<Helmet>
  <title>Contact Alutuff | ACP Sheet Enquiry & Support India</title>

  <meta
    name="description"
    content="Get in touch with Alutuff for ACP sheet enquiries, dealership opportunities, pricing details and project support across India."
  />

  <link rel="canonical" href="https://alutuff.in/contact" />
  <meta name="robots" content="index, follow" />

  {/* Local Business Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Alutuff ACP Sheets",
      "url": "https://alutuff.in/contact",
      "telephone": "+91-6396854974",
      "email": "sales@alutuff.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Choupla Road, Civil Lines",
        "addressLocality": "Bareilly",
        "addressRegion": "UP",
        "postalCode": "243001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.3408507,
        "longitude": 79.4075732
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
        ],
        "opens": "09:30",
        "closes": "18:30"
      }],
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61578129710470",
        "https://www.instagram.com/alutuff.panels",
       
      ]
    })}
  </script>
</Helmet>



<h1 className="seo-h1">
  Contact Alutuff for ACP Sheet Enquiries
</h1>
<p className="seo-intro">
  Reach out to Alutuff for product enquiries, dealership opportunities,
  pricing details and project support across India.
</p>



    {/*  */}
      <div className="w-100">
        <Banner
  image={bannerImage}
  heading="Contact Us"
  alt="Contact Alutuff ACP Panel Manufacturer"
/>

      </div>

      <div className="contact-cards">
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Contact</h3>
          <p>+91 63968 54974</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>Alutuff International</p>
          <p style={{ marginTop: "-8px" }}>Choupla Road, Civil Lines, Bareilly</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>sales@alutuff.in</p>
        </div>
      </div>

   <div className="map-container">
  <div className="map-form-wrapper">
  <iframe
  className="testing-google-map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28199.713591104975!2d79.4075732!3d28.3408507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a000d368192bd3%3A0xfdade61c7f684155!2sAlutuff%20Panels!5e0!3m2!1sen!2sin!4v1721275048813!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Alutuff Panels Location"
/>

 <ContactForm />
  </div>
</div>

    </>
  );
};

export default Contact;
