import React, { useState } from 'react';
import './Certificates.css';
import { Container } from 'react-bootstrap';
const bannerImage = '/static/media/1400.5b998818e97ff18c5b37.jpg';import Banner from '../components/Banner';
import TestingSlider from '../components/TestingSlider';

const images = [
  {
    thumb: '/static/media/11.843d19a4620a2617b3f1.jpeg',
    full: '/static/media/full11.bf5d94469d576a8d913a.jpg',
  },
  {
    thumb: '/static/media/22.08d4395af3e710e64a06.jpg',
    full: '/static/media/full22.15308e2f839e7dc7a8b1.jpg',
  },
  {
    thumb: '/static/media/33.31b313a6f20c92f2210a.jpg',
    full: '/static/media/full33.71198da13ad23a829681.jpg',
  },
  {
    thumb: '/static/media/44.c31b39e52af11e027257.jpg',
    full: '/static/media/full44.3ce80416d66ca2471705.jpg',
  },
];

const testingImages = [
  '/static/media/recovered-placeholder.png',
  '/static/media/beckers.8a80acb1f13bc172c882.png',
  '/static/media/recovered-placeholder.png',
  '/static/media/energy.16e0168d96560d073f6a.png',
  '/static/media/recovered-placeholder.png',
  '/static/media/iso.e8513fd78f6a5e571e97.png',
  '/static/media/iso2.d32d75170d4b4cff74d1.png',
  '/static/media/lynar.43d64272d221bda82c4e.png',
  '/static/media/member.44a624041c2fa180afdc.png',
  '/static/media/mk-India.fc634978e5e00655b224.png',
  '/static/media/ohss.10de4bc39e1068dc142a.png',
  '/static/media/oupont.158bf2f8db888efdab25.jpg',
  '/static/media/ppg.6c014631aa8898330f6f.png',
  '/static/media/recycle.b1c026be7ba248ecba73.png',
  '/static/media/recovered-placeholder.png',
];


const Certificates = () => {
  const [popupImg, setPopupImg] = useState(null);

  const openImage = (img) => {
    setPopupImg(img);
  };

  const closePopup = () => {
    setPopupImg(null);
  };

  console.log("hello...!");

  return (
<>
     <div className='w-100' >
              <Banner
                image={bannerImage}
                heading="Certificates "
                subheading="Welcome to our website"
              />
            </div>
    <Container fluid className='certificates-wrapper'>
      <div className='d-flex justify-content-center align-items-center mb-5'>
        <p className='page-heading'>Alutuff - Completion & Appreciation Certificates</p>
      </div>

      <Container>
        <div className='cert-grid'>
          {images.map((imgObj, idx) => (
            <div className='cert-card' key={idx} onClick={() => openImage(imgObj.full)}>
              <img src={imgObj.thumb} alt={`Certificate ${idx + 1}`} />
            </div>
          ))}
        </div>

      {popupImg && (
        <div className='popup-overlay'>
          <span className='close-icon' onClick={closePopup}>×</span>
          <img src={popupImg} alt='Popup' className='popup-image' />
        </div>
      )}
      </Container>
    </Container>

    <div className='w-100'>
  <TestingSlider testingImages={testingImages} title="Alutuff Testing" />
    </div>
    </>
  );
};

export default Certificates;
