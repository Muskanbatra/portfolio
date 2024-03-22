import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import p from '../../Images/photo.png'
import p1 from '../../Images/p1.png'
import p2 from '../../Images/loadkro.png'
import p3 from '../../Images/shopping.png'
import './Home.css'
import { SlArrowRightCircle } from "react-icons/sl";
import { Project } from '../Project/Project'
import Contact from '../Contact/Contact'
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

        <div id="card" class="p-8 mt-28 w-[700px]  h-[450px] mr-7 ml-8  cursor-pointer  bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl bg-custom-color">
          <p class=" bg-custom-color text-3xl text-teal-400 font-bold pt-5">Search-In</p>
          <p class=" bg-custom-color text-2xl text-sky-400 font-medium pt-5">Web Developer Intern</p>
          <p class=" bg-custom-color text-1xl text-pink-300 pt-3">Jan 2023 - March 2023</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Worked with Mr. Rushikesh on web services and Creating API for Job Portal and Chance Guru</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Creating backend logic using Node.js and Express.Built UI Using (using HTML, CSS, JavaScript, React.js, Material UI).</p>
<a href="#" class=" bg-custom-color inline-flex items-center text-blue-600 hover:underline pt-3">
            Certificate
          </a>
        </div>

        <div id="card" class="p-8  w-[700px] h-[500px] cursor-pointer mt-48 mr-7 pb-10 bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl bg-custom-color">
          <p class=" bg-custom-color text-3xl text-teal-400 font-bold pt-5">Wedsin Limited</p>
          <p class=" bg-custom-color text-2xl text-sky-400 font-medium pt-5">Full Stack Developer Intern</p>
          <p class=" bg-custom-color text-1xl text-pink-300  pt-3">June 2023 - Aug 2023</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Developed server-side logic and API for mobile app using node.js and express.</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Developed client and server-side web application using React.js, Node.js, Express and MongoDB.Created API and backend logic using Node.js and Express</p>          
          <a href="#" class=" bg-custom-color inline-flex items-center text-blue-600 hover:underline pt-3">
            Certificate
          </a>
        </div>

        <div id="card" class="p-8 w-[700px] h-[450px] cursor-pointer mt-28 mr-7  bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl bg-custom-color ">
          <p class=" bg-custom-color text-3xl text-teal-400 font-bold pt-5">Web2success</p>
          <p class=" bg-custom-color text-2xl text-sky-400 font-medium pt-5">Front end Developer Intern </p>
          <p class=" bg-custom-color text-1xl text-pink-300  pt-3">Aug 2023 - Oct 2023</p>
          {/* <p class=" bg-custom-color text-1xl text-white pt-3">Developed user interface using Next.Js, MUI and TypeScript.</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Integrating REST APIs and Error handling at client side.</p> */}
          <a href="#" class=" bg-custom-color inline-flex items-center text-blue-600 hover:underline pt-3">
            Certificate
          </a>
        </div>

        <div id="card" class="p-8  w-[700px] h-[500px] cursor-pointer mt-48 mr-7 pb-10 bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl bg-custom-color">
          <p class=" bg-custom-color text-3xl text-teal-400 font-bold pt-5">Unico Global</p>
          <p class=" bg-custom-color text-2xl text-sky-400 font-medium pt-5">Full Stack Developer Fulltime</p>
          <p class=" bg-custom-color text-1xl text-pink-300 pt-3">Oct 2023 - Persent</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Developed user interface using Next.Js, MUI and TypeScript and Integrating REST APIs.</p>
          <p class=" bg-custom-color text-1xl text-white pt-3">Creating backend logic using Node.js and Express.</p>
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
      <div class="container pl-32 mt-24 w-full relative ">
        <div className='imgshadow'></div>
        <div className='flex justify-end'><img src={p2} alt="Your Image" class="image ml-12 h-50 w-48   "></img>
          <div className='z-20 '>
            <p class="absolute top-20 left-64  w-60 bg-none text-4xl font-bold text-teal-400"># Loadkro</p>
            <p class="absolute top-32 left-64 w-70 bg-none text-2xl text-sky-400 ">~ Transportation website</p>
            <a href="" class=" flex gap-4 absolute top-60 left-60 w-70 bg-none text-3xl font-thin  text-white ">View work <SlArrowRightCircle /></a>
          </div> </div>

      </div>


      <div class="container pl-32 mt-24 w-full relative ">
        <div className='z-20'>
          <p class="  text-overlay font-bold text-teal-400"># Alpha</p>
          <p class="  text-overlay1 text-2xl text-sky-400 ">~ Ecommerce website</p>
          <a href="" class=" flex gap-4 text-overlay2 text-3xl font-thin  text-white ">View work <SlArrowRightCircle /></a>
        </div>
        <img src={p3} alt="Your Image" class="image ml-6 "></img>
        <div className='bgcolorp'></div>
      </div>

      <Contact />

      <Footer />


    </>


  )
}
