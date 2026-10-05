import React, { useState } from 'react';
const cataloguePDF = '/static/media/Shade Card (1).d7636aca01202903c695.pdf';import './LinkTree.css';

const LinkTree = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <>
      <button className="open-popup-btn" onClick={handleOpen}>Explore More</button>

      {showPopup && (
        <div className="popup-overlay">
          <div className='popup-contentt'>
            <button className="close-btn" onClick={handleClose}>×</button>
            <h2 className="popup-heading">Alutuff </h2>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/profile.php?id=61578129710470" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/alutuff.panels/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://wa.me/916396854974" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="https://www.linkedin.com/company/alutuff/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li ><a href="/projects" target="_blank" rel="noreferrer">Projects Portfolio</a></li>
            <li><a href="mailto:sales@alutuff.in">sales@alutuff.in</a></li>  
              <li><a href="tel:+916396854974">+91 63968 54974</a></li>
<li><a
style={{ textDecoration:"none"}}
  href={cataloguePDF}
  target="_blank"
  rel="noopener noreferrer"
  className=""
>
  Download Catalogue
</a></li>

             {/*  <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li> */}

            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkTree;
