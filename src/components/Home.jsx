import React from 'react'
import profileBg from '../assets/profile-bg-img.png'
import scrollGif from '../assets/scroll-gif.gif'
import profileImg from '../assets/p1-removebg.png'
import { Link as LinkRoll } from 'react-scroll'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typed from 'react-typed';
import myResume from '../assets/Resume - HarshNileshDesai (2).docx';

const Home = () => {
  return (
    <>









      <div className=' pt-28 py-20 px-2 flex gap-2 flex-col-reverse  h-full  ' id='home' >
        <div className='md:hidden flex justify-center my-5'>
          <img src={scrollGif} alt="scroll-gif" className='h-12' />
        </div>
        <div className='social media flex justify-center items-center top-1/4 lg:bottom-1/4 md:absolute px-7'>
          <ul className='space-x-7 my-3 sm:space-y-3 flex md:flex-col justify-center items-center '>
            <li className='sm:hidden'></li>
            <li className='p-1 text-white bg-blue-500 hover:scale-125 transition-all rounded-full'>
              <a href="https://www.facebook.com/profile.php?id=100024395020922" target="_blank" rel="noreferrer">
                <FacebookIcon />
              </a>
            </li>
            <li className='p-1 text-white  bg-green-500 hover:scale-125 transition-all rounded-full'>
              <a href="https://wa.me/919322585046" target="_blank" rel="noreferrer">
                <WhatsAppIcon />
              </a>
            </li>
            <li className='p-1 text-white  bg-red-500 hover:scale-125 transition-all rounded-full'>
              <a href="https://www.instagram.com/harshdesai889/" rel="noreferrer" target="_blank">
                <InstagramIcon />
              </a>
            </li>
            <li className='p-1 text-white  bg-black hover:scale-125 transition-all rounded-full'>
              <a href="https://github.com/desaiHarsh08" target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
            </li>
            <li className='p-1 text-white  bg-blue-800  hover:scale-125 transition-all rounded-full'>
              <a href="https://www.linkedin.com/in/harsh-desai-12838026b/" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className='intro w-full flex items-center'>
          <div className=' flex justify-center items-center w-full h-full  '>



            <div className='h-full  flex flex-col  gap-5 sm:gap-2 justify-center items-center '>
              <h1 className='text-2xl  my-3 font-medium'>Hi there, I'm</h1>

              <Typed strings={['Harsh Nilesh Desai']} typeSpeed={40}
                    backSpeed={50} backDelay={2000}
                    loop className='text-4xl font-medium text-purple-700  '></Typed>
              <div className='profile flex justify-center items-center my-5 w-1/4' style={{ backgroundImage: `url(${profileBg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <img src={profileImg} className="rounded-full  " alt="" srcset="" />
              </div>
              <div className='flex justify-center'>
                <p className=' text-center px-1 w-full sm:w-3/4 '>Intend to build a career with a leading corporate environment which will help me explore myself fully and realize my potential.</p>
              </div>
              <div className="btn my-7">
                <button className='px-4 py-2 mx-2 bg-blue-500 text-white font-medium hover:bg-blue-600 rounded-md'>
                  <a href={myResume} download={'HarshNileshDesai_Resume'}>Download CV</a>
                </button>
                <button className='px-4 py-2 mx-2 bg-orange-500 text-white font-medium hover:bg-orange-600 rounded-md'>
                  <LinkRoll to={'contact'} smooth={true} duration={500} >Contact me</LinkRoll>
                </button>
              </div>
              <div className='hidden md:block'>
                <img src={scrollGif} alt="scroll-gif" className='h-12' />
              </div>
            </div>
          </div>
        </div>







      </div>

    </>
  )
}

export default Home