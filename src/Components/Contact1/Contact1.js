import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

export const Contact1 = () => {
  return (
    <>
      <Navbar />
      <div class="w-[610px] mx-auto pl-12 m-7">
        <h1 class="text-5xl text-sky-300 font-semibold mb-4 pt-10">Contact Us</h1>
        <div class="border-b-2 mb-8"></div>
        <p class="text-teal-300 mb-4 text-2xl tracking-wide">Feel free to reach out to us using this contact form.</p>

        <form>

          <div class="mb-4">
            <label for="name" class="block text-gray-300 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" class="w-full border border-gray-300 text-white rounded-md p-2"></input>
          </div>

          <div class="mb-4">
            <label for="email" class="block text-gray-300 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" class="w-full border border-gray-300 text-white rounded-md p-2"></input>
          </div>

          <div class="mb-4">
            <label for="message" class="block text-gray-300 text-sm font-bold mb-2">Message:</label>
            <textarea id="message" name="message" rows="4" class="w-full border border-gray-300 text-white rounded-md p-2"></textarea>
          </div>

          <button type="submit" class="bg-sky-300 text-[#111827] border border-white py-2 px-4 rounded-md">Send Message</button>
        </form>

        <div class="mt-12">
          
         
          <span class="text-teal-300 text-2xl flex  items-center gap-6">Connect with us on social media:
                        <a href='' className='text-sky-300'><FaInstagram /></a>
                        <a href='' className='text-sky-300'><FaYoutube /> </a>
                        <a href='' className='text-sky-300'> <FaGithub /></a>
                        <a href='' className='text-sky-300'><CiLinkedin /></a>
                    </span>
        </div>

      </div>
      
      
      

   
      <Footer />
    </>
  )
}
