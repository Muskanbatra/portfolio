import React from 'react'
import p1 from '../../Images/p1.png'
import { SlArrowRightCircle } from "react-icons/sl";

export const Project = () => {
    return (
        <>
            <div class="container pl-32 mt-24 w-full absolute">
                <img src={p1} alt="Your Image" class="image ml-6"></img>

                <div className='z-20'>
                    <p class="  text-overlay font-bold text-teal-400"># Nano Chat</p>
                    <p class="  text-overlay1 text-2xl text-sky-400 ">~ Educational website</p>
                    <a href="" class=" flex gap-4 text-overlay2 text-3xl font-thin  text-white ">View work <SlArrowRightCircle /></a>
                </div>
                <div className='bgcolorp'></div>
            </div>
        </>
    )
}
