import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Banner from "../components/Banner"
import 'swiper/css';
import 'swiper/css/autoplay';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const bannerImage = '/static/media/1400.5b998818e97ff18c5b37.jpg';import './About.css';
import CircleSlider from '../components/CircleSlider';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";




const stats = [
  { id: 1, image: '/static/media/s-handshake-1--unscreen.ae133cc64d4b11667125.gif', count: 5000, suffix: '+', label: 'Dealers' },
  { id: 2, image: '/static/media/s-placeholder-unscreen.90072c44cf01b7b0f56f.gif', count: 25, suffix: '+', label: 'Countries Exported To' },
  { id: 3, image: '/static/media/s-project-unscreen.0963c2be151d5fffe185.gif', count: 500, suffix: '+', label: ' Projects Completed' },
  { id: 4, image: '/static/media/s-handshake-1--unscreen.ae133cc64d4b11667125.gif', count: 45, suffix: '+', label: ' Years Market Trust' },
];
const aboutImage = [
  '/static/media/about us 01.2c744c2808410d687ab7.png',
   '/static/media/about us 02.3ae85829d63a24cf17cc.png',
];
const About = () => {
    const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [counterKey, setCounterKey] = useState(0);


const [ref, inView] = useInView({
  threshold: 0.2, // triggers when 30% visible
  triggerOnce: true, // only once
});
const [zigzagRef, zigzagInView] = useInView({
  threshold: 0.2,
  triggerOnce: true,
});

useEffect(() => {
  const interval = setInterval(() => {
    setCounterKey(prevKey => prevKey + 1); // re-triggers CountUp
  }, 3500); // every 2 seconds

  return () => clearInterval(interval);
}, []);

  const images = [
    '/static/media/manu-1.34190f402aeda9fcae10.jpg',
  '/static/media/manu-2.55d1ead91b71b4c2b704.jpg',
    '/static/media/manu-3.66cf62114830976e56ae.jpg',
      '/static/media/manu-4.bee958d5272b4ee9fab6.jpg',
        '/static/media/manu-5.693a0a6bfe1f90863c1c.jpg',
          '/static/media/manu-6.a558f5b41bdf941c44e1.jpg',
            '/static/media/manu-7.e31d1f635ace8ce6e5db.jpg',
              '/static/media/manu-8.70e212740ca4b19b3d9a.jpg',

  ];
const [card1Ref, card1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
const [card2Ref, card2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
const [card3Ref, card3InView] = useInView({ triggerOnce: true, threshold: 0.2 });

const settings = {
  infinite: true,
  speed: 5000,
  autoplay: true,
 autoplaySpeed: 0,
 cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
  responsive: [
        {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200, // below 1200px
      settings: {
        slidesToShow: 3,
      },
    },
    
    {
      breakpoint: 992, // below 992px
      settings: {
        slidesToShow: 3,
      },
    },
     {
      breakpoint: 768, // below 576px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576, // below 576px
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};


  return (
    <>
<Helmet>
<title>About Alutuff | ACP Aluminium Composite Panel Manufacturer</title>


  <meta
    name="description"
content="Know Alutuff, a leading ACP aluminium composite panel manufacturer in India with world-class manufacturing, pan-India presence, global exports and decades of industry trust."


  />

  <link rel="canonical" href="https://alutuff.in/about" />
<meta name="robots" content="index, follow, max-image-preview:large" />


<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Alutuff ACP Sheets",
  "url": "https://alutuff.in/about",
  "description": "Alutuff is an Indian manufacturer of aluminium composite panels and ACP sheets for facade, exterior and interior applications.",
  "areaServed": "IN",
  "knowsAbout": [
    "ACP Sheets",
    "Aluminium Composite Panels",
    "Facade Cladding",
    "Exterior ACP Panels"
  ]
})}
</script>

</Helmet>


<h1 className="seo-h1">
  About Alutuff ACP Sheets
</h1>

  <p className="seo-intro">
  Alutuff is a leading manufacturer of aluminium composite panels (ACP) in India,
  delivering high-performance facade and interior cladding solutions.
</p>





 <div className='w-100' >
      <Banner
        image={bannerImage}
        heading="About Us"
        subheading="Welcome to our website"
      />
    </div>
     {/*  */}
 <Container fluid className='about-us-section'>
            <Container className='about-us-content-div'>
      
      <div className='about-us-text-div'>
        {/* <p className='section-heading'>About Alutuff</p> */}
        <h2 className='section-heading'>About Alutuff</h2>

        <p className='page-text'>Where Strong ACP Panels Meet Timeless Aesthetic Design</p>
      <p className='page-text'>Alutuff is India’s premier manufacturer of Aluminium Composite Panels (ACPs), delivering innovation, durability, and design excellence for over a decade. </p>
      <p className='page-text' >Our state-of-the-art manufacturing facility spans 5 lakh square feet in Bareilly, where advanced technology and strict quality standards ensure the production of premium-grade panels for both interior and exterior use. Alutuff panels are fire-retardant, weather-resistant, and available in a wide range of finishes, from wood to metallic to marble. 
</p>
      <p className='page-text'>
        Trusted by architects, developers, and designers across all 28 Indian states, our products are proudly made in India and meet international standards. With Alutuff, every project reflects strength, sophistication, and a deep understanding of design possibilities.
</p>
      {/* <button className='pink-button'  onClick={() => navigate('/about')} >Purchase</button> */}
      </div>
      
  <div className='about-us-img-slider'>
<Swiper
  modules={[Autoplay, Navigation]} // Add Navigation here
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
  slidesPerView={1}
  navigation={true} // Enable arrows
  className="about-swiper"
>

        {aboutImage.map((img, index) => (
          <SwiperSlide key={index}>
<img
  className='about-us-img'
  src={img}
  alt={`Alutuff ACP manufacturing facility image ${index + 1}`}
  loading="lazy"
/>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
            </Container>
          </Container>

      {/* Glance Section */}
 <div ref={ref} className={`glance ${inView ? 'glance-visible' : ''}`} >

        <h2 className='page-heading' style={{marginBottom:"0rem "}}> Alutuff World-Class Campus at a Glance
</h2>
        <p className='section-heading sub-heading'> Built on scale, driven by innovation, a powerhouse of precision manufacturing, skilled talent, and world-class infrastructure excellence.</p>

        <div className="glance-container">
          {/* Left Points */}
          <div className="glance-points glance-left">
            <div className="point-box" >  Industrial Campus <span></span><span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginLeft:"auto"}}>5lac+ sq.ft.</span>	</div>
            <div className="point-box">Total Investment  <span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginLeft:"auto"}}>$168M+ </span> </div>
            <div className="point-box"> In-House Plant <span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginLeft:"auto"}}>24/7 Power</span>   </div>
          </div>

          {/* Center Image */}
          <div className="glance-image">
<img
  src={'/static/media/alutuff-acp-manufacturing-campus.53de8f7e80b377df2845.jpg'}
  alt="Alutuff world-class ACP manufacturing campus"
  loading="lazy"
/>

          </div>

          {/* Right Points */}
          <div className="glance-points glance-right">
            <div className="point-box"><span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginRight:"auto"}}>6 Units </span> Manufacturing Plants </div>
            <div className="point-box"><span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginRight:"auto"}}>1200+</span> Skilled Employees</div>
            <div className="point-box"><span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginRight:"auto"}}>India + UAE</span>  Operational Presence</div>
          </div>

          {/* Connecting Lines */}
          <div className="line line-left-1"></div>
          <div className="line line-left-2"></div>
          <div className="line line-left-3"></div>

          <div className="line line-right-1"></div>
          <div className="line line-right-2"></div>
          <div className="line line-right-3"></div>
        </div>
      </div>

      {/* Key Values Section */}
  <Container fluid className="zigzag-card-section" ref={zigzagRef}>
        <div className="zigzag-card-content-container">

          {/* Card 1 */}
         <div ref={card1Ref} className={`zigzag-card zigzag-card-1 ${card1InView ? 'fade-in-left' : ''}`}>
            <div className='zigzag-card-div'>
              <h3 className='zigzag-card-heading'>OUR MISSION</h3>
              <p className='zigzag-card-descp '>
               To transform spaces with premium Metal Composite Panels, delivering unmatched quality, timely service, and trust-driven partnerships that empower dealers, customers, and stakeholders across every project.
               </p>
            </div>
            <div className='zigzag-img-div' style={{ marginLeft: "auto" }}>
<img
  className='zigzag-img'
  src={'/static/media/Mission (1).9b32cf38ea9c7bcdc169.gif'}
  alt="Alutuff mission premium ACP panel manufacturing"
  loading="lazy"
/>

            </div>
          </div>

          {/* Card 2 */}
         <div ref={card2Ref} className={`zigzag-card zigzag-card-2 ${card2InView ? 'fade-in-right-zigzag' : ''}`}>
            <div className='zigzag-img-div' style={{ marginRight: "auto" }}>
              <img className='zigzag-img'  loading="lazy" src={'/static/media/Growth (1).0904206b83f8a1db51b7.gif'}   alt="Make in India certified ACP panels by Alutuff" />
            </div>
            <div className='zigzag-card-div' style={{marginLeft:"auto",marginRight:"0px"}}>
              <h3 className='zigzag-card-heading'>OUR VISION</h3>
              <p className='zigzag-card-descp '>
              To be India’s most trusted ACP brand, globally recognized for innovation, integrity, and reliability, by building strong relationships with architects, builders, homeowners, and channel partners everywhere.
              </p>
            </div>
          </div>

          {/* Card 3 */}
       <div ref={card1Ref} className={`zigzag-card zigzag-card-1 ${card1InView ? 'fade-in-left' : ''}`}>
            <div className='zigzag-card-div'>
              <h3 className='zigzag-card-heading'>OUR PROMISE</h3>
              <p className='zigzag-card-descp '>At Alutuff, we create more than panels. We build dreams, protect reputations, and stand beside every partner, offering strength, style, and unwavering support in every square foot.
</p>
            </div>
            <div className='zigzag-img-div' style={{ marginLeft: "auto" }}>
              <img className='zigzag-img'   loading="lazy" src={'/static/media/Hand Shake.214d45d153c4a6a1fdd0.gif'} />
            </div>
          </div>

        </div>
      </Container>
{/*  */}
<CircleSlider/>
{/*  */}
          <Container fluid className="about-stats-section">
      <div className="about-banner-overlay"></div> {/* Black Overlay */}
      <Container className="about-banner-content">
        <div className="about-stats-wrapper">
          {/* {stats.map(item => (
            <div key={item.id} className="about-stat-card">
              <img className='stats-icon' src={item.image} alt={item.label} />
   <h3>
                <CountUp start={0} end={item.count} duration={2} separator=',' />
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </div>
          ))} */}
          {stats.map(item => (
  <div key={item.id} className="about-stat-card">
    <img className='stats-icon'   loading="lazy" src={item.image} alt={item.label} />
    <h3>
      {/* <CountUp key={counterKey + item.id} start={0} end={item.count} duration={2} separator=',' /> */}
      <CountUp key={counterKey + item.id} start={0} end={item.count} duration={2} separator=',' />

      {item.suffix}
    </h3>
    <p>{item.label}</p>
  </div>
))}

        </div>
      </Container>
    </Container>

      {/* Slider Section */}
      <Container fluid className="about-slider-container">
          <div className='d-flex justify-content-center align-items-center mb-5 '>
        <p className="page-heading">Manufacturing Unit</p>
      </div>
        <Slider {...settings} className='manufacturing-slider'>
          {images.map((img, index) => (
            <div key={index} className="about-slide-image-wrapper">
          <img
  src={img}
  alt={`Alutuff manufacturing unit machinery ${index + 1}`}
  loading="lazy"
/>

            </div>
          ))}
        </Slider>
      </Container>
      {/*  */}
      <Container  style={{marginTop:"6%"}}>
<img  style={{width:"100%",maxWidth:"100%"}} src={'/static/media/alutuff-process.a333062014b5bc13c80d.jpg'}   loading="lazy" alt="Alutuff ACP manufacturing process flow"/>
      </Container>
{/*  */}
  <Container fluid  className='d-flex justify-content-center align-items-center g-0' style={{marginTop:"5%",marginBottom:"-5%"}}>
<img  style={{maxWidth:"100%"}} src={'/static/media/makein-new-alutiff.f830f6a221bb95bbaf99.png'}   loading="lazy" alt="Alutuff ACP aluminium composite panel manufacturing facility India"/>
  </Container>
      {/*  */}


    </>
  );
};

export default About;