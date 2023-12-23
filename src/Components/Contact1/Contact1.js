import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export const Contact1 = () => {
  return (
    <>
      <div className='ml-20 p-12'>
        <div class="text-5xl  text-sky-400 font-bold"><h1>Get in touch</h1></div>
        <div class="text-5xl text-teal-400 font-medium pt-3"><h1>say hi ;</h1></div>
      </div>
      <div className='flex flex-row gap-9 '>
      <div className='flex flex-col  gap-4 p-12 ml-20  font-medium  text-gray-300'>
        <a href="" class=" flex gap-4 "> <FaInstagram />durgesh chaudhary</a>
        <a href="" class=" flex gap-4 "> <FaYoutube />durgesh chaudhary</a>
        <a href="" class=" flex gap-4 "> <FaGithub />durgesh chaudhary</a>
      </div>

      <div className='flex flex-col  gap-4 p-12 ml-20 font-medium text-center text-gray-300'>
        <a href="" class=" flex gap-4 "> <FaInstagram />durgesh chaudhary</a>
        <a href="" class=" flex gap-4 "> <FaYoutube />durgesh chaudhary</a>
        <a href="" class=" flex gap-4 "> <FaGithub />durgesh chaudhary</a>
      </div>
      <div className='ml-20 p-12'>
        <div class="text-2xl  text-teal-400 font-bold">email me</div>
        <div class="text-1xl text-gray-300 font-medium pt-3">durgesh@gmail.com</div>
      </div>
      </div>
    </>
  )
}
