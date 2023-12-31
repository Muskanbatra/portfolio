import React from 'react'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <>

            <nav class="bg-white dark:bg-gray-900  w-full z-10 top-0 start-0 border-b border-gray-200 dark:border-gray-600 p-5 font-mono ">
                <div class=" flex flex-wrap items-center pl-16 justify-center p-2">


                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-sticky ">
                        <ul class=" items-center flex flex-col p-6 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-24 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 space-x-60">
                            <li>
                                <Link to="/" class="block py-2 px-3 text-gray-200 bg-teal-300 rounded md:bg-transparent md:text-teal-300 md:p-0 md:dark:text-teal-300" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-300 md:p-0 md:dark:hover:text-teal-300 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Experience</a>
                            </li>
                            <li>
                                <Link to = "/page" class="block py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-300 md:p-0 md:dark:hover:text-teal-300 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</Link>
                            </li>
                            <li>
                                <Link to ="/contact1" class="block py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-300 md:p-0 md:dark:hover:text-teal-300 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
