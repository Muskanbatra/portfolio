import React from 'react'
import p1 from '../../Images/p1.png'
import p2 from '../../Images/loadkro.png'
import p3 from '../../Images/shopping.png'
import { SlArrowRightCircle } from "react-icons/sl";
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer';

export const Page = () => {
    return (
        <>
            <Navbar />
            <div class="container pl-32 mt-24 w-full absolute">
                <img src={p1} alt="Your Image" class="image ml-6"></img>
                <div className='bgcolorp'></div>
                <div className='z-20'>
                <div className='z-20'>
                    <p class="  text-overlayp top-5 font-normal text-teal-400"># Alpha</p>
                    <p class="  text-overlayp1 top-16 text-2xl text-sky-400 ">~ Ecommerce website</p>
                </div>
                    <p className='text-xl ml-6 mt-36'>
                        <span className='text-teal-200 font-normal'> Alpha</span>
                        <span className='text-sky-200 font-light'> ~ Ecommerce website</span>
                    </p>
                    <p className='text-xl ml-6'>
                        <span className='text-teal-300 font-normal'> Github</span>
                        <span className='text-sky-300 font-light'> ~ Ecommerce website</span>
                    </p>
                    <p className='text-xl ml-6'>
                        <span className='text-teal-400 font-normal'>Live Demo</span>
                        <span className='text-sky-400 font-light'> ~ Ecommerce website</span>
                    </p>
                    <p className='text-xl ml-6'>
                        <span className='text-teal-500 font-normal'>Tech Stack Used</span>
                        <span className='text-sky-500 font-light'> ~ Ecommerce website</span>
                    </p>
                </div>
            </div>

            <div class="container pl-32 mt-24 w-full relative ">
                <img src={p2} alt="Your Image" class="image ml-6 "></img>
                <div className='bgcolorp'></div>
                <div className='z-20'>
                <div className='z-20'>
                    <p class="  text-overlayp top-5 font-normal text-teal-400"># Alpha</p>
                    <p class="  text-overlayp1 top-16 text-2xl text-sky-400 ">~ Ecommerce website</p>
                </div>
                    <p className='text-xl ml-6 mt-36'>
                        <span className='text-teal-200 font-normal'> Alpha</span>
                        <span className='text-sky-200 font-light'> ~ Ecommerce website</span>
                    </p>
                    <p className='text-xl ml-6'>
                        <span className='text-teal-300 font-normal'> Github</span>
                        <span className='text-sky-300 font-light'> ~ Ecommerce website</span>
                    </p>
                    <p className='text-xl ml-6'>
                        <span className='text-teal-400 font-normal'>Live Demo</span>
                        <span className='text-sky-400 font-light'> ~ Ecommerce website</span>
                    </p>
                    <p className='text-xl ml-6'>
                        <span className='text-teal-500 font-normal'>Tech Stack Used</span>
                        <span className='text-sky-500 font-light'> ~ Ecommerce website</span>
                    </p>
                </div>
            </div>


            <div class="container pl-32 mt-24 mb-24 w-full relative ">
                <img src={p3} alt="Your Image" class="image ml-6 "></img>
                <div className='bgcolorp'></div>
                <div className='z-20'>
                <div className='z-20'>
                    <p class="  text-overlayp top-5 font-normal text-teal-400"># Alpha</p>
                    <p class="  text-overlayp1 top-16 text-2xl text-sky-400 ">~ Ecommerce website</p>
                </div>
                    <p className='text-xl ml-6 mt-36'>
                        <span className='text-teal-200 font-normal'> Alpha</span>
                        <span className='text-sky-200 font-light'> ~ Ecommerce website</span>
                    </p>
                    <p className='text-xl ml-6'>
                        <span className='text-teal-300 font-normal'> Github</span>
                        <span className='text-sky-300 font-light'> ~ Ecommerce website</span>
                    </p>
                    <p className='text-xl ml-6'>
                        <span className='text-teal-400 font-normal'>Live Demo</span>
                        <span className='text-sky-400 font-light'> ~ Ecommerce website</span>
                    </p>
                    <p className='text-xl ml-6'>
                        <span className='text-teal-500 font-normal'>Tech Stack Used</span>
                        <span className='text-sky-500 font-light'> ~ Ecommerce website</span>
                    </p>
                </div>
            
            </div>

<Footer/>

        </>
    )
}
