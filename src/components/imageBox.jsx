import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ImageBox({Image_url, title, content, Link_title, Custom_class}) {
    return (
        <div className={`flex md:gap-20 gap-10 items-center flex-col ${Custom_class}`}>
            <div className='md:w-1/2 w-full'>
                <Image src={Image_url} alt="" />
            </div>
            <div className='md:w-1/2 w-full'>
                <h2 className='leading-tight md:text-4xl text-3xl font-extrabold mb-6'>
                    {title}
                </h2>
                <p className='text-lg font-normal mb-6'>
                    {content}
                </p>
                <Link href="#" className="inline-flex items-center bg-blue-700 justify-center px-5 py-3 mr-3 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-none">
                 {Link_title}
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    )
}
