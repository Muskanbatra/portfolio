import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export const Footer = () => {
    return (
        <>
            <footer class="border-t border-b  border-gray-500  p-4">
                <div className='flex flex-row justify-between items-cente text-gray-300 pl-32 pr-32 pt-20 pb=12 border-white'>

                    <div className=" p-2 font-trattatello text-2xl">Durgesh Chaudhary</div>
                    <div className='flex flex-row justify-between items-center gap-3'>
                        <div><FaInstagram /></div>
                        <div><FaYoutube /> </div>
                        <div> <FaGithub /></div>
                        <div><CiLinkedin /></div>
                    </div>
                </div>
            </footer>
            <div className='flex flex-row justify-between items-center text-zinc-500 pl-36 pr-36 pt-3 pb-3 border-white text-xs'>
            <div className='flex flex-row justify-between items-center gap-12 '>
                        <div> <a href=''>HOME</a> </div>
                        <div><a href=''>EXPERIENCE</a> </div>
                        <div> <a href=''>ABOUT</a></div>
                        <div><a href=''>CONTACT</a></div>
                    </div>
                    <div className=" p-2  ">All Rights Reserved</div>
                  
                </div>
        </>
    )
}
