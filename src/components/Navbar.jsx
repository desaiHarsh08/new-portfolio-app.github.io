import React from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {

    const handleMenu = () => {
        document.getElementById('menu').classList.toggle('translate-x-[1000px]');
    }

    return (
        <>
            <div className='navbar z-10 top-0 bg-blue-500 text-white fixed w-full' id='navbar'>
                <header>
                    <nav className='flex px-3 md:px-14 py-4 font-semibold'>
                        <div className='left w-1/2'>
                            <span>#HD</span>
                        </div>
                        <div className='right w-1/2 flex justify-end items-center'>
                            {/* For large screen */}
                            <ul className='hidden md:flex justify-end items-center space-x-3'>
                                <li className='cursor-pointer hover:text-yellow-400 '>
                                    <Link to={'home'} smooth={true} offset={-100} duration={500} >Home</Link>
                                </li>
                                <li className='cursor-pointer hover:text-yellow-400 '>
                                    <Link to={'about'} smooth={true} offset={-100} duration={500} >About</Link>
                                </li>
                                <li className='cursor-pointer hover:text-yellow-400 '>
                                    <Link to={'skills'} smooth={true} offset={-100} duration={500} >Skills</Link>
                                </li>
                                <li className='cursor-pointer hover:text-yellow-400 '>
                                    <Link to={'projects'} smooth={true} offset={-100} duration={500} >Projects</Link>
                                </li>
                                <li className='cursor-pointer hover:text-yellow-400 '>
                                    <Link to={'contact'} smooth={true} offset={-100} duration={500} >Contact</Link>
                                </li>

                            </ul>


                            {/* Hamburger */}
                            <div className='md:hidden ' onClick={handleMenu}>
                                <div className='h-1 w-7 my-1 bg-white rounded-md'></div>
                                <div className='h-1 w-7 my-1 bg-white rounded-md'></div>
                                <div className='h-1 w-7 my-1 bg-white rounded-md'></div>
                            </div>

                            {/* Menu */}
                            <div id='menu' className='absolute p-7 translate-x-[1000px] duration-700 md:hidden transition-all bg-slate-700 text-white top-0 h-screen right-0 w-full le  ft-0 '>
                                <div className='flex justify-between pb-2 items-center border-b-2'>
                                    <div><h2>desaiharsh</h2></div>
                                    <div onClick={handleMenu}>
                                        <div className='h-1 w-7 my-1 bg-white rounded-md rotate-45'></div>
                                        <div className='h-1 w-7 my-1 bg-white rounded-md -rotate-45 -translate-y-2 '></div>
                                    </div>
                                </div>
                                <ul className='flex my-20 flex-col justify-center items-center space-y-7'>
                                    <li></li>
                                    <li className='cursor-pointer hover:text-yellow-400 '>
                                        <Link to={'home'} smooth={true} offset={-100} duration={500} >Home</Link>
                                    </li>
                                    <li className='cursor-pointer hover:text-yellow-400 '>
                                        <Link to={'about'} smooth={true} offset={-100} duration={500} >About</Link>
                                    </li>
                                    <li className='cursor-pointer hover:text-yellow-400 '>
                                        <Link to={'skills'} smooth={true} offset={-100} duration={500} >Skills</Link>
                                    </li>
                                    <li className='cursor-pointer hover:text-yellow-400 '>
                                        <Link to={'projects'} smooth={true} offset={-100} duration={500} >Projects</Link>
                                    </li>
                                    <li className='cursor-pointer hover:text-yellow-400 '>
                                        <Link to={'contact'} smooth={true} offset={-100} duration={500} >Contact</Link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </nav>
                </header>
            </div>

            {/* <div className='fixed z-10 h-full top-1/2 px-3 left-0'>
                <ul className='space-y-2'>
                    <li id='home-point' className='ring-2 ring-blue-300  rounded-full w-4 flex justify-center items-center h-4 '>
                        <div className='bg-blue-500 px-1 py-[5px] rounded-full w-3 '></div>
                    </li>
                    <li id='about-point' className='ring-2 ring-blue-300  rounded-full w-4 flex justify-center items-center h-4 '>
                        <div className='bg-blue-500 px-1 py-[5px] rounded-full w-3 '></div>
                    </li>
                    <li id='skills-point' className='ring-2 ring-blue-300  rounded-full w-4 flex justify-center items-center h-4 '>
                        <div className='bg-blue-500 px-1 py-[5px] rounded-full w-3 '></div>
                    </li>
                    <li id='projects-point' className='ring-2 ring-blue-300  rounded-full w-4 flex justify-center items-center h-4 '>
                        <div className='bg-blue-500 px-1 py-[5px] rounded-full w-3 '></div>
                    </li>
                    <li id='contact-point' className='ring-2 ring-blue-300  rounded-full w-4 flex justify-center items-center h-4 '>
                        <div className='bg-blue-500 px-1 py-[5px] rounded-full w-3 '></div>
                    </li>
                </ul>
            </div> */}
        </>
    )
}

export default Navbar