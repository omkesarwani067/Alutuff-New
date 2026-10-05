import React from 'react';
import './Separate.css';

function Separate({ text, imageSrc, imageAlt, reverse }) {
  return (
    <div className={`separate-section-content${reverse ? ' reverse' : ''}`}>
      <div className="text-content">
        {text}
      </div>
      {imageSrc && (
        <div className="image-content">
          <img src={imageSrc} alt={imageAlt || ''} />
        </div>
      )}
    </div>
  );
}

export default Separate;
