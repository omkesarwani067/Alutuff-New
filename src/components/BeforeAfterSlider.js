// BeforeAfterSlider.jsx
import React, { useState, useRef } from "react";
import "./BeforeAfterSlider.css";
import { Container } from "react-bootstrap";

const afterImage = '/static/media/after222.ef474a7362b1f4b91626.jpg';
const beforeImage = '/static/media/before222.2ed3f1d4a0ed5dd20ced.jpg';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isClicked, setIsClicked] = useState(false);
  const containerRef = useRef(null);

  const handleDrag = (e, clicked = false) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let position = ((e.clientX - rect.left) / rect.width) * 100;

    position = Math.max(0, Math.min(100, position));

    if (clicked) setIsClicked(true);
    setSliderPosition(position);
  };

  return (
    <Container fluid className="Before-after-section">
      <h1 className="page-heading">Basic to Bold, The Alutuff Effect</h1>

      <div
        className="slider-container"
        ref={containerRef}
        onMouseMove={(e) => {
          if (e.buttons === 1) {
            setIsClicked(false);
            handleDrag(e);
          }
        }}
        onTouchMove={(e) => {
          setIsClicked(false);
          handleDrag(e.touches[0]);
        }}
        onClick={(e) => handleDrag(e, true)}
      >
        {/* After Image */}
        <img src={beforeImage} alt="After" className="slider-image" />

        {/* Before Image */}
        <img
          src={afterImage}
          alt="Before"
          className={`slider-image slider-top ${
            isClicked ? "animate-clip" : ""
          }`}
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        />

        {/* Slider Handle */}
        <div
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={(e) => handleDrag(e)}
          onTouchStart={(e) => handleDrag(e.touches[0])}
        >
          <div className="slider-icon">⇄</div>
        </div>
      </div>
    </Container>
  );
};

export default BeforeAfterSlider;