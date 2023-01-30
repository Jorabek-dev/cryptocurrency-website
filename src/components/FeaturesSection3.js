import React from 'react';

// import image
import Image3 from '../assets/img/feature-3-img.png';

const FeaturesSection3 = () => {
  return (
    <section className='py-[30px] lg:py-[120px] '>
    <div className='flex flex-col lg:flex-row'>
      {/* text */}
      <div className='max-w-[454px] mb-6 lg:mt-10' data-aos='fade-right' data-aos-offset='400'>
        <h3 className='h3 mb-6'>Grow your profit and track you inverstment</h3>
        <p className='text-gray mb-8 max-w-[408px] '>Use advanced analtical tools. Clear TradingVieew chart let you track current and historical prfilt investment</p>
        <button className='btn px-8'>Lear More</button>
      </div>
      {/* image */}
      <div className='flex-1 flex justify-end' data-aos='fade-left' data-aos-offset='450'>
        <img src={Image3} alt="" />
      </div>
    </div>
  </section>
  );
};

export default FeaturesSection3;
