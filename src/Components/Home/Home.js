import './Home.css'
import React from 'react'
import p from '../../Images/photo.png'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Project } from '../Project/Project'
import { Contact } from '../Contact/Contact'
import { Contact1 } from '../Contact1/Contact1'

export const Home = () => {
  return (
    <>
      <Navbar />
      <div class='flex justify-start items-start pl-2 pt-16 '>

        <div className='homeimage'>
          <img src={p} alt="image description"></img>
          <div className='bgcolor'></div>
        </div>

        <div className='hometext pt-24'>
          <div class="text-9xl text-teal-400 font-bold"><h1>Hello</h1></div>
          <div class="text-5xl text-sky-400 font-medium pt-3"><h1>I'm Durgesh</h1></div>

          <div id="box" class="block max-w-sm p-6 bg-custom-color border-bg-gray-800 shadow mt-10 pr-15 ">

            <p class="mb-2 text-1xl font-thin bg-custom-color text-gray-500 ">// My self introduction</p>
            <p class="font-light text-pink-500  bg-custom-color">Name &#123; </p>
            <span class="font-light text-white  bg-custom-color">First Name : </span>
            <span class="font-light text-sky-400  bg-custom-color">Durgesh; </span><br></br>
            <span class="font-light text-white  bg-custom-color">Last Name : </span>
            <span class="font-light text-sky-400  bg-custom-color">Chaudhary; </span>
            <p class="font-light text-pink-500  bg-custom-color"> &#125; </p>
          </div>

          <div id="box" class="block w-full p-6 bg-custom-color border-bg-gray-800 shadow mt-8 ml-32 pr-0">
            <p class="mb-2 text-1xl font-thin bg-custom-color text-gray-500 ">// My profession</p>
            <p class="font-light text-pink-500  bg-custom-color">.What I Do &#123; </p>
            <span class="font-light text-white  bg-custom-color">Profession : </span>
            <span class="font-light text-sky-400  bg-custom-color">Full Stack Developer; </span><br></br>
            <span class="font-light text-white  bg-custom-color">Expert : </span>
            <span class="font-light text-sky-400  bg-custom-color">MERN STACK; </span>
            <p class="font-light text-pink-500  bg-custom-color"> &#125; </p>
          </div>
        </div>
      </div>

      <div className='experience ml-24'>
        <div class="text-6xl text-teal-400 font-bold"><h1>#2</h1></div>
        <div class="text-5xl text-sky-400 font-medium pt-3"><h1>Experience</h1></div>
      </div>

      <div class="flex ">
        <div id="card" class="p-8 mt-28 mr-7 ml-28  cursor-pointer  bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl bg-custom-color">
          <p class=" bg-custom-color text-3xl text-teal-400 font-bold pt-5">2019</p>
          <p class=" bg-custom-color text-2xl text-sky-400 font-medium pt-5">Front-End Developer</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Company Name:,</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">From:,</p>
          <a href="#" class=" bg-custom-color inline-flex items-center text-blue-600 hover:underline pt-3">
            Certificate
          </a>
        </div>

        <div id="card" class="p-8  cursor-pointer mt-48 mr-7 pb-10 bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl bg-custom-color">
          <p class=" bg-custom-color text-3xl text-teal-400 font-bold pt-5">2019</p>
          <p class=" bg-custom-color text-2xl text-sky-400 font-medium pt-5">Front-End Developer</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Company Name:,</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">From:,</p>
          <a href="#" class=" bg-custom-color inline-flex items-center text-blue-600 hover:underline pt-3">
            Certificate
          </a>
        </div>

        <div id="card" class="p-8  cursor-pointer mt-28 mr-7  bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl bg-custom-color">
          <p class=" bg-custom-color text-3xl text-teal-400 font-bold pt-5">2019</p>
          <p class=" bg-custom-color text-2xl text-sky-400 font-medium pt-5">Front-End Developer</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Company Name:,</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">From:,</p>
          <a href="#" class=" bg-custom-color inline-flex items-center text-blue-600 hover:underline pt-3">
            Certificate
          </a>
        </div>

        <div id="card" class="p-8   cursor-pointer mt-48 mr-7 pb-10 bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl bg-custom-color">
          <p class=" bg-custom-color text-3xl text-teal-400 font-bold pt-5">2019</p>
          <p class=" bg-custom-color text-2xl text-sky-400 font-medium pt-5">Front-End Developer</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Company Name:,</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">From:,</p>
          <a href="#" class=" bg-custom-color inline-flex items-center text-blue-600 hover:underline pt-3">
            Certificate
          </a>
        </div>
      </div>
      <div className='bgcolorc'></div>

      <div className='line bg-teal-400'></div>
      <div className='experience ml-24'>
        <div class="text-6xl text-teal-400 font-bold"><h1>#3</h1></div>
        <div class="text-5xl text-sky-400 font-medium pt-3"><h1>Projects</h1></div>
      </div>
      <Project />
      <Contact1 />
      <Footer />
    </>
  )
}
