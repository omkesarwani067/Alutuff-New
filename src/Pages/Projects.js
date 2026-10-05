import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaBuilding } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Projects.css";
import { Helmet } from "react-helmet-async";

// -------------------- GOVERNMENT PROJECTS --------------------
const governmentProjects = [
  { id: 1, image: '/static/media/GOV1.4692ad4c316740283119.jpg', title: "Gov Project 1", desc: "Government Building ACP Facade" },
  { id: 2, image: '/static/media/GOV 2.798ce522ea84a4b5d3ec.jpg', title: "Gov Project 2", desc: "Airport Lounge Panels" },
  { id: 3, image: '/static/media/GOV  3.2e04da1c12da8bafb652.jpg', title: "Gov Project 3", desc: "Transport Terminal Design" },
  { id: 4, image: '/static/media/GOV  4.4216f525402eab41def3.jpg', title: "Gov Project 4", desc: "Gov HQ Front Elevation" },
  { id: 5, image: '/static/media/GOV  5.9ecd98cfe2115befd783.jpg', title: "Gov Project 5", desc: "Stadium ACP Work" },
  { id: 6, image: '/static/media/GOV  6.f66e576a1c3064b5f175.jpg', title: "Gov Project 6", desc: "Gov Complex Facade" },
  { id: 7, image: '/static/media/GOV  7.f24be1218010f96c0982.jpg', title: "Gov Project 7", desc: "Utility Service Campus" },
];

// -------------------- PRIVATE PROJECTS --------------------
const privateProjects = [
  // CHHATTISGARH
  { image: '/static/media/5e6cd74c-a295-4cd3-bdb9-aacf1ed2bd67.c8c5c08de947ff033fc9.jpg', title: "Private Project 1", desc: "Retail Showroom Panels", state: "CHHATTISGARH" },
  { image: '/static/media/bisalpur new.0a7b9c09c4065bcc1fd4.jpg', title: "Private Project 2", desc: "Luxury Mall Interior", state: "CHHATTISGARH" },
  { image: '/static/media/bisalpur.7b43fc2b81d6d97dd07b.jpg', title: "Private Project 3", desc: "Commercial Office Tower", state: "CHHATTISGARH" },

  // GUJRAT
  { image: '/static/media/surat.f3ae85615443f8fe437a.jpg', title: "Private Project 4", desc: "Film City Entrance Panels", state: "GUJRAT" },
  { image: '/static/media/surat.f3ae85615443f8fe437a.jpg', title: "Private Project 5", desc: "Modern Hospital Elevation", state: "GUJRAT" },
  { image: '/static/media/surat.f3ae85615443f8fe437a.jpg', title: "Private Project 6", desc: "Corporate Park Elevation", state: "GUJRAT" },

  // HARYANA
  { image: '/static/media/Faridabad neww.2c482074016e2d6812f1.jpg', title: "Private Project 7", desc: "Shopping Complex Panels", state: "HARYANA" },
  { image: '/static/media/Faridabad.0e4fdebdde47a9a78598.jpg', title: "Private Project 8", desc: "Luxury Office Interior", state: "HARYANA" },
  { image: '/static/media/Faridabad neww.2c482074016e2d6812f1.jpg', title: "Private Project 9", desc: "Hospital Front Facade", state: "HARYANA" },
  { image: '/static/media/sep-IMG-20250911-WA0001.afd93c078ce0ae0e7b02.jpg', title: "Private Project 10", desc: "Shopping Complex Panels", state: "HARYANA" },
  { image: '/static/media/sep-IMG-20250911-WA0002.1895b6afc535000264dd.jpg', title: "Private Project 11", desc: "Luxury Office Interior", state: "HARYANA" },
  { image: '/static/media/sep-IMG-20250911-WA0003.b3b42c36e87e84e3a5b3.jpg', title: "Private Project 12", desc: "Hospital Front Facade", state: "HARYANA" },

  // MP
  { image: '/static/media/Indore2.ecc8bfb3832e10c81444.jpg', title: "Private Project 13", desc: "Cinema Hall Exterior", state: "MP" },
  { image: '/static/media/Indore4.1a61280f4e3f92f566f4.jpg', title: "Private Project 14", desc: "Business Tower Panels", state: "MP" },
  { image: '/static/media/Sehore.678eb3cb1b54c8779dea.jpg', title: "Private Project 15", desc: "School Elevation Work", state: "MP" },
  { image: '/static/media/Ujjain new.030943df5d452360ba74.jpg', title: "Private Project 16", desc: "School Elevation Work", state: "MP" },
  { image: '/static/media/Ujjain.0ccbb4fb0d9a864babd9.jpg', title: "Private Project 17", desc: "School Elevation Work", state: "MP" },
  { image: '/static/media/indore 3.69d02450c4abfbab4f25.jpg', title: "Private Project 18", desc: "School Elevation Work", state: "MP" },
  { image: '/static/media/indore.ca605ed3bc035f3f3d4a.jpg', title: "Private Project 19", desc: "School Elevation Work", state: "MP" },
  { image: '/static/media/jabalpur.e43435e72848a3f8527e.jpg', title: "Private Project 20", desc: "School Elevation Work", state: "MP" },
  { image: '/static/media/sep-Rewa, MP.3179e4df4c9553097e6b.jpg', title: "Private Project 21", desc: "School Elevation Work", state: "MP" },


   // UP
  {  image: '/static/media/Agra.fc7cd49506cec7a1b9c6.jpg', title: "Private Project 13", desc: "Hotel Facade Design", state: "UP" },
  // { id: 26, image: '/static/media/recovered-placeholder.png', title: "Private Project 14", desc: "Retail Mall Entrance", state: "UP" },
  {  image: '/static/media/Azamgarh.1b8346d94d5d2b00dd47.jpg', title: "Private Project 15", desc: "IT Park ACP Work", state: "UP" },
    { image: '/static/media/Chakia.834373166a49901d90ef.jpg', title: "Private Project 13", desc: "Hotel Facade Design", state: "UP" },
  {  image: '/static/media/Hapur new.660eb54b0b82b7179cb9.jpg', title: "Private Project 14", desc: "Retail Mall Entrance", state: "UP" },
  {  image: '/static/media/Hapur.cf407cd522bf5e2d0a85.jpg', title: "Private Project 15", desc: "IT Park ACP Work", state: "UP" },
    { image: '/static/media/Kharihani.92a8f8648a75fa073d72.jpg', title: "Private Project 13", desc: "Hotel Facade Design", state: "UP" },
  {  image: '/static/media/Lucknow.d957866a3ec5facb8cbd.jpg', title: "Private Project 14", desc: "Retail Mall Entrance", state: "UP" },
  {  image: '/static/media/Mau.fd194902c9040368569e.jpg', title: "Private Project 15", desc: "IT Park ACP Work", state: "UP" },
    {  image: '/static/media/Varanasi.bf255815994b2b196dd0.jpg', title: "Private Project 13", desc: "Hotel Facade Design", state: "UP" },
  { image: '/static/media/Varanasinew.afa28163cde3567de6db.jpg', title: "Private Project 14", desc: "Retail Mall Entrance", state: "UP" },
  {  image: '/static/media/bisalpur.7b43fc2b81d6d97dd07b.jpg', title: "Private Project 15", desc: "IT Park ACP Work", state: "UP" },
    {  image: '/static/media/kaushambi.c86178f8b2ec8016aaac.jpg', title: "Private Project 13", desc: "Hotel Facade Design", state: "UP" },
  {  image: '/static/media/meerut.4f3e67a891ab96396645.jpg', title: "Private Project 14", desc: "Retail Mall Entrance", state: "UP" },
  {  image: '/static/media/modipuram, meerut.e09c0c0211221044f25c.jpg', title: "Private Project 15", desc: "IT Park ACP Work", state: "UP" },

  // WEST BANGOLE
  {  image: '/static/media/Asansol.636043427d9c853b03a0.jpg', title: "Private Project 16", desc: "Metro Station Panels", state: "WEST BANGOLE" },
  {  image: '/static/media/Raniganj.d3ad680294e81e05a17c.jpg', title: "Private Project 17", desc: "Convention Center Interior", state: "WEST BANGOLE" },
  { image:'/static/media/Asansol.636043427d9c853b03a0.jpg', title: "Private Project 18", desc: "Luxury Resort Exterior", state: "WEST BANGOLE" },

  // J&k
// J&K PROJECTS
{ image: '/static/media/jk1.dd9a45dde414af061d95.jpg', title: "Private Project 19", desc: "Metro Station Panels", state: "J&K" },
{ image: '/static/media/jk2.b453636388247cb1bcf9.jpg', title: "Private Project 20", desc: "Commercial Building Facade", state: "J&K" },
{ image: '/static/media/jk3.5987916fec60d6d1918d.jpg', title: "Private Project 21", desc: "Government Office ACP Work", state: "J&K" },

// jk4.jpg skipped intentionally

{ image: '/static/media/jk5.59b403cadf78c940b379.jpg', title: "Private Project 22", desc: "Hospital Exterior Panels", state: "J&K" },
{ image: '/static/media/jk6.13043ffd488a835a9d77.jpg', title: "Private Project 23", desc: "Shopping Complex ACP Panels", state: "J&K" },
{ image: '/static/media/jk7.427e765df9b3ab13216c.jpg', title: "Private Project 24", desc: "Educational Campus Facade", state: "J&K" },
{ image: '/static/media/jk8.2ea06cf81770091b5586.jpg', title: "Private Project 25", desc: "Residential Tower Elevation", state: "J&K" },
{ image: '/static/media/jk9.60709632d20c4fe29bd1.jpg', title: "Private Project 26", desc: "Hotel Building ACP Cladding", state: "J&K" },
{ image: '/static/media/jk10.c9d2fe2aeac16b794643.jpg', title: "Private Project 27", desc: "Mall Interior ACP Panels", state: "J&K" },
{ image: '/static/media/jk11.dabff9d93795886443c1.jpg', title: "Private Project 28", desc: "Corporate Office Elevation", state: "J&K" },
{ image: '/static/media/jk12.6a34ed0e595a1d469545.jpg', title: "Private Project 29", desc: "Airport Utility Building Panels", state: "J&K" },
{ image: '/static/media/jk13.fd6ec2b976841c700bc4.jpg', title: "Private Project 30", desc: "Industrial Facility ACP Work", state: "J&K" },
{ image: '/static/media/jk14.f136a975612961794884.jpg', title: "Private Project 31", desc: "Convention Centre Facade", state: "J&K" },
{ image: '/static/media/jk15.a6f510793dcc789fd33b.jpg', title: "Private Project 32", desc: "Mixed-Use Development Panels", state: "J&K" },



];


// -------------------- CLIENTS --------------------
const allClients = [
  "Kalyan Jewellers – UAE", "Kalyan Jewellers – PAN INDIA", "Sardar Vallabh Bhai Patel Airport, Ahmedabad",
  "Ramoji Film City, Hydrabad", "Transport Corporation, Bangalore", "ITC Outlets", "Coffee Day Lounge", "ONGC",
  "Chennai Airport", "Godrej Building, Kathmadnu", "Maharajganj, Kathmandu", "Baneshwor, Kathmadnu",
  "Kalimati, Kathmandu", "Koteshwar, Kathmandu", "Eissan Hospital, Kathmandu", "Prime Hi-Tech Infrastructure, Andra Pradesh",
  "Comio Mobiles", "Apollo Hospital", "BKC Complex, Mumbai", "Techniplex, Mumbai", "Solitaire Mall, Mumbai",
  "Town Centre, Mumbai", "Parker Mall, New Delhi", "Sports Stadium, Goa", "Radisson, Haridwar", "ONGC,VIZAG",
  "Reliance Milk, Vellore, Tamil Nadu", "McDonalds", "Calicut Bus Terminal Project", "Shri moga Hospital, Shimoga",
  "Nepal Telecom", "Ishaan Hospital, Maharajganj", "Volks Wagon", "Hatti Kaapi Chain", "Gujarat Gas"
];

const governmentClients = allClients.filter(name =>
  ["ONGC", "ONGC,VIZAG", "Nepal Telecom", "Transport Corporation, Bangalore",
   "Sardar Vallabh Bhai Patel Airport, Ahmedabad", "Chennai Airport",
   "Sports Stadium, Goa", "Calicut Bus Terminal Project", "Gujarat Gas"].includes(name)
);
const privateClients = allClients.filter(name => !governmentClients.includes(name));

const ProjectCarousel = () => {
  const [visibleClients, setVisibleClients] = useState(12);
  const [selectedState, setSelectedState] = useState("UP");

  const filteredProjects = privateProjects
    .filter(item => item.state === selectedState)
    .map((item, index) => ({ ...item, id: index + 1 }));

  const isFullyVisible = visibleClients >= privateClients.length;
  const handleToggleClients = () => {
    setVisibleClients(prev => (isFullyVisible ? 12 : prev + 12));
  };

  return (
    <>
<Helmet>
  <title>ACP Sheet Projects Across India | Alutuff Installations</title>

  <meta
    name="description"
    content="View real ACP sheet installations by Alutuff across India in commercial, residential and architectural projects."
  />

  <link rel="canonical" href="https://alutuff.in/projects" />
  <meta name="robots" content="index, follow" />
</Helmet>


<h1 className="seo-h1">
  ACP Sheet Projects Across India by Alutuff
</h1>


      <Container fluid className="projects-banner-section">
        <Container className="projects-banner-content-div">
          <div className="project-banner-text-div">
            <h2 className="project-banner-heading">
              Transforming Spaces with Durable, Stylish Panel Solutions
            </h2>
            <p className="project-banner-descp">
              At Alutuff, our panels are trusted by architects, builders, and developers across industries. Explore our diverse project portfolio to see how Alutuff enhances structures with quality craftsmanship and long-lasting protection.
            </p>
          </div>
          <div className="image-layout-wrapper">
            <div className="top-section">
              <div className="left-images">
                <img src={'/static/media/P 2.202e66a993d684d4992c.jpg'} alt="Alutuff Panel Installation 1" className="img img1 from-left" loading="lazy" />
                <img src={'/static/media/P3.dac360bba09a1142bf98.jpg'} alt="Alutuff Panel Installation 2" className="img img2 from-left" loading="lazy" />
              </div>
              <img src={'/static/media/p1.a4fb4c401029ea913bc4.jpg'} alt="Alutuff Panel Installation 3" className="img img3 from-right" loading="lazy" />
            </div>
          </div>
        </Container>
      </Container>

      {/* PRIVATE PROJECTS */}
      <Container className="project-carousel-container">
        <div className="d-flex flex-column align-items-center mb-4">
          <h2 className="page-heading">PRIVATE PROJECTS</h2>
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {["CHHATTISGARH", "GUJRAT", "HARYANA", "MP", "UP", "WEST BANGOLE","J&K"].map(state => (
              <button
                key={state}
                className={`filter-btn pink-button ${selectedState === state ? "active" : ""}`}
                onClick={() => setSelectedState(state)}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          loopedSlides={filteredProjects.length}
          autoplay={{ delay: 1500 }}
          centeredSlides
          className="project-swiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {(filteredProjects.length <= 3
            ? [...filteredProjects, ...filteredProjects]
            : filteredProjects
          ).map(item => (
            <SwiperSlide key={item.id} className="project-card custom-slide">
              <div className="project-inner">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* PRIVATE CLIENTS */}
      <Container className="clients-section">
        <h2 className="page-heading">Private Clients</h2>
        <div className="clients-grid">
          {privateClients.slice(0, visibleClients).map((client, index) => (
            <div className="client-box" key={index}>
              <FaBuilding className="client-icon" />
              <span>{client}</span>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button className="view-more-btn pink-button" onClick={handleToggleClients}>
            {isFullyVisible ? "View Less" : "View More"}
          </button>
        </div>
      </Container>

      {/* GOVERNMENT PROJECTS */}
      <Container className="project-carousel-container">
        <div className="d-flex justify-content-center align-items-center mb-5">
          <h2 className="page-heading">GOVERNMENT PROJECTS</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2500 }}
          className="project-swiper"
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: false },
            768: { slidesPerView: 2, centeredSlides: true },
            992: { slidesPerView: 3, centeredSlides: true },
          }}
        >
          {governmentProjects.map(item => (
            <SwiperSlide key={item.id} className="project-card">
              <div className="project-inner">
                <img src={item.image} alt={item.desc} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* GOVERNMENT CLIENTS */}
      <Container className="clients-section">
        <h2 className="page-heading">Government Clients</h2>
        <div className="clients-grid">
          {governmentClients.map((client, index) => (
            <div className="client-box" key={index}>
              <FaBuilding className="client-icon" />
              <span>{client}</span>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ProjectCarousel;
