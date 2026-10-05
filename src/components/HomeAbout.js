import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import "./HomeAbout.css";

export default function HomeAbout() {
  const navigate = useNavigate();

  return (
    <section className="home-about-section" aria-labelledby="about-alutuff-heading">
      <Container fluid>
        <Container className="home-about-content-div">

          {/* Text Content */}
          <header className='home-about-text-div'>
            <h2 id="about-alutuff-heading" className='section-heading'>
              About Alutuff
            </h2>

            <h3 className='page-text'>
              Turning Your Ideas Into Timeless <br /> Architectural Reality
            </h3>

            <p className='page-text'>
              At Alutuff, we transform your vision into built reality. With over a decade of expertise,
              cutting-edge facilities in Bareilly spanning 5 lakh sq ft, and a fully-integrated,
              ISO-certified manufacturing setup, our fire-retardant, weather-resistant ACPs are
              precision-engineered for safety, style, and durability.
            </p>

            <p className='page-text'>
              Whether it's residential exteriors or large commercial façades, each panel reflects
              your ideas—crafted with global standards and proud Indian-made excellence.
            </p>

            <p className='page-text'>
              Because we don’t just build panels—we build your trust.
            </p>

            <button
              className='pink-button'
              aria-label="View more about Alutuff"
              onClick={() => navigate('/about')}
            >
              View More
            </button>
          </header>

          {/* Image */}
          <div className='home-about-img1-div'>
            <img
              className='home-about-img1'
              src={'/static/media/home-about2.1ab3f511bb4b928ff0bd.jpg'}
              alt="Alutuff ACP manufacturing facility showcasing architectural panels"
              loading="lazy"
              width="100%"
              height="auto"
            />
          </div>

        </Container>
      </Container>
    </section>
  );
}
