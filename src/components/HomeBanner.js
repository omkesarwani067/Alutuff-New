import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import './HomeBanner.css';

const slides = [
  {
    image: '/static/media/h1.0d9b1105000695054152.jpg',
    heading: 'India’s Leading ACP',
    description: 'Trusted for premium aluminium panels across India’s skyline.',
    buttonText: 'Explore Now',
  },
  {
    image: '/static/media/h2.d8857e44b6e2db42e054.png',
    heading: 'Where Design Meets Durability',
    description: 'Alutuff ACP panels crafted to elevate facades with strength and style.',
    buttonText: 'Explore Now',
  },
  {
    image: '/static/media/h3.5ae34bf009d37e5939fb.png',
    heading: 'Made in India, Trusted Globally',
    description: 'Decades of expertise with standards backed by global trust.',
    buttonText: 'Explore Now',
  },
  {
    image: '/static/media/h4.5275abcf659326dbd8ba.png',
    heading: 'Styled for Safety',
    description: 'Fire-retardant, weatherproof panels with a premium finish.',
    buttonText: 'Explore Now',
  },
];

const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="home-banner">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        speed={800}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img
                src={slide.image}
                alt={`ACP sheets banner showcasing ${slide.heading}`}
                className="banner-image"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              <img
                src={'/static/media/15-yearss.da9666816b43c908c768.png'}
                alt="15 years of ACP manufacturing experience"
                className="top-right-image"
                loading="lazy"
              />

              {/* Desktop content */}
              <div className={`content-box ${activeIndex === index ? 'show-text' : ''}`}>
                <h2>{slide.heading}</h2>
                <p>{slide.description}</p>
                <Link to="/product">
                  <button className="pink-button">{slide.buttonText}</button>
                </Link>
              </div>

              {/* Mobile content */}
              <div className={`mobile-content-box ${activeIndex === index ? 'show-text' : ''}`}>
                <h2>{slide.heading}</h2>
                <p>{slide.description}</p>
                <Link to="/product">
                  <button className="pink-button">{slide.buttonText}</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeBanner;
