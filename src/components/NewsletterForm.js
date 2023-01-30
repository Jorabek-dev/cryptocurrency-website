import React from 'react';

// import componetns
// import NewsletterForm from '../components/NewsletterForm'


const NewsletterForm = () => {
  return (
    <form className='flex-1 flex flex-col items-center w-full gap-y-6 lg:flex-row lg:gap-x-10'>
      <input className='input text-base text-white placeholder:text-white placeholder:text-base' type="text" placeholder='Enter ypur email' />
      <button className='btn bg-white text-darkblue px-8 hover:bg-white/70'>Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
