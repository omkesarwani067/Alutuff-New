import React, { useRef, useEffect, useState } from 'react';
import './StickySection.css';
import { Container } from 'react-bootstrap';

const StickySection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const paraRefs = useRef([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/static/media/INOVATION 1.d6719a368c3f3dbc6da6.jpg',
    '/static/media/INOVATION 2.083c201316d8bf42be95.jpg',
    '/static/media/INOVATION 3.2ea9c0da01f515b5250a.jpg',
    '/static/media/INOVATION  4.562e8470614a81ab46e3.jpg',
  ];

  const paragraphs = [
    {
      main: 'At Alutuff, every panel is crafted using advanced technology and strict quality controls, ensuring unmatched durability, flawless finishes, and',
      highlight: ' performance that stands strong in every climate.',
    },
    {
      main: 'We believe one size doesn’t fit all. From textures to thickness, Alutuff panels offer flexible options tailored to match your',
      highlight: ' design intent, project needs, and creative aspirations.',
    },
    {
      main: 'With over a decade of experience and a nationwide footprint, Alutuff combines global standards with Indian innovation, serving ',
      highlight: 'architects and developers who demand excellence, reliability, and value.',
    },
    {
      main: 'We don’t just manufacture materials, we enable possibilities. Our commitment to safety, sustainability, and customer-first thinking helps us ',
      highlight: 'deliver more than panels; we deliver project confidence.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!paraRefs.current || !imageRef.current) return;

      const imageRect = imageRef.current.getBoundingClientRect();
      const imageCenter = imageRect.top + imageRect.height / 2;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      paraRefs.current.forEach((para, index) => {
        if (para) {
          const paraRect = para.getBoundingClientRect();
          const paraCenter = paraRect.top + paraRect.height / 2;
          const distance = Math.abs(paraCenter - imageCenter);

          if (distance < smallestDistance) {
            smallestDistance = distance;
            closestIndex = index;
          }
        }
      });

      if (closestIndex !== currentImageIndex) {
        setCurrentImageIndex(closestIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentImageIndex]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="crafted-to-endure-heading"
    >
      {/* Desktop View */}
      <Container
        fluid
        style={{
          marginTop: "4.5%",
          background: "#000",
          color: "#fff",
          paddingTop: "4.2rem"
        }}
      >
        <div className="section-title text-center" style={{ marginBottom: "0px" }}>
          <h2
            id="crafted-to-endure-heading"
            className="page-heading"
            style={{ marginBottom: "0px" }}
          >
            Crafted to Endure
          </h2>
        </div>

        <div className="sticky-scroll-wrapper">
          <div className="sticky-scroll-container">
            <div className="text-section" ref={textRef}>
              <div className="para-wrapper">
                {paragraphs.map((para, index) => (
                  <p
                    key={index}
                    className="para-text"
                    ref={(el) => (paraRefs.current[index] = el)}
                  >
                    {para.main}
                    <span className="grey-text">{para.highlight}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="image-section">
              <img
                ref={imageRef}
                src={images[currentImageIndex]}
                alt="Alutuff ACP innovation and advanced panel manufacturing"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="mobile-scroll-wrapper">
          {images.map((img, index) => (
            <article className="mobile-item" key={index}>
              <p className="para-text">
                {paragraphs[index].main}
                <span className="grey-text">
                  {paragraphs[index].highlight}
                </span>
              </p>
              <img
                src={img}
                alt="Alutuff ACP innovation detail view"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StickySection;
