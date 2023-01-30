import React from 'react';

// import image
import Image2 from '../assets/img/feature-2-img.png';

const FeaturesSection2 = () => {
  return (
    <section className='py-[35px] lg:py-[120px]'>     
      <div className='container mx-auto'>
        <div className='flex flex-col justify-end items-center lg:flex-row'>
        {/* images */}
        <div className='flex-1 lg:absolute lg:left-0 order-2 lg:order-1' data-aos='fade-right' data-aos-offset='400'>
          <img src={Image2} alt="img2" />
        </div>
        {/* text */}
        <div className='flex-1 max-w-[456px]'  data-aos='fade-left' data-aos-offset='400'>
          <h3 className='h3 mb-6'>Detailed Statistixs</h3>
          <p className='text-gray mb-8'>View all minig related inforamtion in realtime, at any point at ant location and decide which polls you want to mine in</p>
          <button className='btn px-8 mb-6 lg:mb-0 '>Lear more</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
