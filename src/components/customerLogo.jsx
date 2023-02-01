import Image from 'next/image';
import React from 'react';
import Google from '../../public/images/google.png';
import Airbnb from '../../public/images/airbnb.png';
import Mailchimp from '../../public/images/mailchimp.png';
import Microsoft from '../../public/images/microsoft.png';
import Spotify from '../../public/images/spotify.png';
import Uber from '../../public/images/uber.png';

export default function CustomerLogo() {
  return (
    <section className='bg-[#202632] md:px-20 py-24 px-4 items-center'>
        <div className='grid md:grid-cols-6 grid-cols-2'>
            <Image src={Google} alt="" className='w-auto' />
            <Image src={Airbnb} alt="" className='w-auto' />
            <Image src={Mailchimp} alt="" className='w-auto' />
            <Image src={Microsoft} alt="" className='w-auto' />
            <Image src={Spotify} alt="" className='w-auto' />
            <Image src={Uber} alt="" className='w-auto' />
        </div>
    </section>
  )
}