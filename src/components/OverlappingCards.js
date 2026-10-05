import React, { useEffect, useRef } from 'react';
import './OverlappingCards.css';
import { Container } from 'react-bootstrap';

const OverlappingCards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('lift');
          } else {
            entry.target.classList.remove('lift');
          }
        });
      },
      { threshold: 0.5 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className='stack-section' aria-labelledby="why-alutuff-heading">
      <Container fluid>

        {/* Section Heading */}
        <div className='text-center'>
          <h2 id="why-alutuff-heading" className='page-heading text-white'>
            Why Alutuff ?
          </h2>
        </div>

        <Container className="stack-section-card">

          {/* Card 1 */}
          <article className="card card1" ref={el => cardsRef.current[0] = el}>
            <div className='overlap-card-content'>
              <img
                className='overlap-card-img'
                src={'/static/media/WHY 2.cf5a9bc82cbd2e98ece6.jpg'}
                alt="Customer-centric ACP panel solutions by Alutuff"
                loading="lazy"
              />

              <div className='overlap-card-text'>
                <h3 className='overlap-cards-heading'>
                  Here's why Alutuff is the premier choice for your needs
                </h3>

                <ul className='overlap-cards-text'>
                  <li>We Listen, You Succeed.</li>
                  <li>Tailored Design Versatility.</li>
                  <li>Solutions That Reflect Your Vision.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="card card2" ref={el => cardsRef.current[1] = el}>
            <div className='overlap-card-content'>
              <img
                className='overlap-card-img'
                src={'/static/media/map.b05dbbefd5cd4c2749a6.png'}
                alt="Alutuff ACP panels presence across India map"
                loading="lazy"
              />

              <div className='overlap-card-text'>
                <h3 className='overlap-cards-heading'>
                  Alutuff ACP Panels — Made in India, Trusted Nationwide
                </h3>

                <ul className='overlap-cards-text'>
                  <li>Proven Performance, Preferred in All 28 States.</li>
                  <li>Resilience Engineered, Beauty That Endures.</li>
                  <li>Proudly Indian, Globally Trusted Quality.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="card card3" ref={el => cardsRef.current[2] = el}>
            <div className='overlap-card-content'>
              <img
                className='overlap-card-img'
                src={'/static/media/WHY3.044cc5ef39ed1027ce94.jpg'}
                alt="Alutuff ACP panel cross-section showing core strength"
                loading="lazy"
              />

              <div className='overlap-card-text'>
                <h3 className='overlap-cards-heading'>
                  Alutuff ACP Cross-Section: Unveiling Our Core Strength
                </h3>

                <ul className='overlap-cards-text'>
                  <li>Engineered for Extreme Durability.</li>
                  <li>Superior Core, Lasting Finish.</li>
                  <li>Built to Withstand, Designed to Impress.</li>
                </ul>
              </div>
            </div>
          </article>

        </Container>
      </Container>
    </section>
  );
};

export default OverlappingCards;
