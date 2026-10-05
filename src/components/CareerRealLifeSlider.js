import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CareerRealLifeSlider.css";

// Media Array
const lifeMedia = [
{ src: '/static/media/1.41f67b1bd911fd36b34b.png', alt: "1", type: "image", category: "Birthday" },
{ src: '/static/media/4.c4c9e123cbcfaef86637.png', alt: "4", type: "image", category: "Birthday" },
{ src: '/static/media/8.5e26d574a3faac16b28d.png', alt: "8", type: "image", category: "Birthday" },
{ src: '/static/media/3.4b2d0680641b20d65d61.png', alt: "3", type: "image", category: "Birthday" },
{ src: '/static/media/5.034f458b1d67811aea85.png', alt: "5", type: "image", category: "Birthday" },
{ src: '/static/media/6.3ac1bcd89556b85ca274.png', alt: "6", type: "image", category: "Birthday" },
{ src: '/static/media/7.bdf45c3cdfdb4d124fe8.png', alt: "7", type: "image", category: "Birthday" },
{ src: '/static/media/99.973f2c8d657034f8f434.jpeg', alt: "9", type: "image", category: "Birthday" },




    { src: '/static/media/BATU3511.3533daa58faf1ac83ab7.JPG', alt: "Event image 1", type: "video", category: "Events" },
      { src: '/static/media/video2.8f1c39ac29b11c2fd427.mp4', alt: "Event Video 2", type: "video", category: "Events" },
  { src: '/static/media/BATU3550.66f62825fb6add13c231.JPG', alt: "Event image 2", type: "image", category: "Events" },
    { src: '/static/media/BATU3583.43f43e81637639b96b85.JPG', alt: "Event image 1", type: "image", category: "Events" },
      { src: '/static/media/video1.9cea067f1d9e5d6fe37d.mp4', alt: "Event Video 1", type: "video", category: "Events" },
  { src: '/static/media/BATU3864.bda1e090c57d4cb784ec.JPG', alt: "Event image 2", type: "image", category: "Events" },
    { src: '/static/media/BATU3882.7b0d6bbc072b6e6a81cb.JPG', alt: "Event image 2", type: "image", category: "Events" },

  { src: '/static/media/video1.9cea067f1d9e5d6fe37d.mp4', alt: "Event Video 1", type: "video", category: "Training" },
  { src: '/static/media/video2.8f1c39ac29b11c2fd427.mp4', alt: "Event Video 2", type: "video", category: "Training" },
];

const CareerRealLifeSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sliderRef = useRef(null); // ref to control slider

  // Filtered media
  const getFilteredMedia = () => {
    return selectedCategory === "All"
      ? lifeMedia
      : lifeMedia.filter((item) => item.category === selectedCategory);
  };

  const filteredMedia = getFilteredMedia();

  // Slider settings
  const slidesToShow = Math.min(3, filteredMedia.length);

  const lifeSliderSettings = {
    infinite: filteredMedia.length > slidesToShow,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, filteredMedia.length),
          infinite: filteredMedia.length > 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: Math.min(2, filteredMedia.length),
          infinite: filteredMedia.length > 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: filteredMedia.length > 1,
        },
      },
    ],
  };

  // Pause autoplay when video plays
  const handleVideoPlay = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  // Resume autoplay after video ends
  const handleVideoEnded = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <Container fluid className="career-lyfAt-card-section">
      <Container className="career-lyfAt-card">
        <div className='text-center mx-auto'>
          <h2 className="page-heading text-center mx-auto">Life at Alutuff</h2>

          {/* Filter Buttons */}
          <div className="lyf-filter-buttons mt-0">
            {["All", "Birthday", "Events", "Training"].map((cat) => (
              <button
                key={cat}
                className={`lyf-filter-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Slick Carousel */}
        <Slider {...lifeSliderSettings} ref={sliderRef}>
          {filteredMedia.map((item, idx) => (
            <div key={idx} className="life-slide">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Life at Alutuff ${item.alt}`}
                  className="life-slide-img"
                />
              ) : (
                <div className='life-slide-video-div'>
                <video
                  controls
                  className="life-slide-video"
                  onPlay={handleVideoPlay}
                  onEnded={handleVideoEnded}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default CareerRealLifeSlider;
