import React from 'react'
import HomeProducts from '../components/HomeProducts'
import { Container } from 'react-bootstrap'
import Banner from '../components/Banner';
  const bannerImage = '/static/media/1400.5b998818e97ff18c5b37.jpg';import QuoteBox from '../components/Quote';

const Catalogues = () => {
  return (
 <>
          {/* Banner Section */}
      <div className='w-100' >
              <Banner
                image={bannerImage}
                heading="Catologues"
                subheading="Welcome to our website"
              />
            </div>


<Container fluid >
<HomeProducts/>
</Container>

<div className='w-100'>
<QuoteBox/>
</div>
</>
  )
}

export default Catalogues
