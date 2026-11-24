import React from 'react'
import image1 from '../../assets/Image1.jpg'
import image2 from '../../assets/Image2.png'
import image3 from '../../assets/Image3.png'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
      <Carousel autoPlay={true} infiniteLoop={true} interval={2000} className='mt-8'>  
                <div className='rounded-2xl'>
                    <img className='rounded-2xl' src={image1} />
                </div>
                <div className='rounded-2xl'>
                    <img className='rounded-2xl' src={image2} />
                </div>
                <div className='rounded-2xl'>
                    <img className='rounded-2xl' src={image3} />
                </div>
            </Carousel>
  )
}

export default Banner