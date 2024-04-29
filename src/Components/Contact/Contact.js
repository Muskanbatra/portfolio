import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Contact = () => {
  return (
    <>
      <div className='ml-20 p-12 mt-16 '>
        <div class="text-5xl  text-sky-400 font-bold"><h1>Get in touch</h1></div>
        <div class="text-5xl text-teal-400 font-medium pt-3"><h1>say hi ;</h1></div>
      </div>
      <div className='flex flex-row gap-9 mb-7 '>
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
      <div class="max-w-md mx-auto p-8">
        <h1 class="text-3xl font-semibold mb-4">Contact Us</h1>
        <div class="border-b-2 mb-8"></div>
        <p class="text-gray-600 mb-4">Feel free to reach out to us using the contact information below.</p>

        <form>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" class="w-full border border-gray-300 rounded-md p-2"></input>
          </div>

          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" class="w-full border border-gray-300 rounded-md p-2"></input>
          </div>

          <div class="mb-4">
            <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message:</label>
            <textarea id="message" name="message" rows="4" class="w-full border border-gray-300 rounded-md p-2"></textarea>
          </div>

          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md">Send Message</button>
        </form>

        <div class="mt-8">
          <p class="text-gray-600">Connect with us on social media:</p>
          <div class="flex mt-4">

            <a href="#" class="text-blue-500 hover:text-blue-700 mr-4">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-blue-400 hover:text-blue-600 mr-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-red-500 hover:text-red-700">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>
    </>
  )
}
export default Contact
