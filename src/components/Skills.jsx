import React from 'react'
import htmlImg from '../assets/html-image.png'
import cssImg from '../assets/css-image.png'
import jsImg from '../assets/javascript-image.png'
import cImg from '../assets/c-image.png'
import nodejsImg from '../assets/nodejs.png'
import javaImg from '../assets/java-image.png'
import reactImg from '../assets/react-image.jpg'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col items-center  py-7 mb-20 '>
      <h2 className='text-3xl font-semibold text-center mb-9 '>Skills</h2>
      <div className='px-3 w-full md:w-3/4'>
        <ul className='w-full'>
          <li className='w-full my-3 flex flex-col gap-2'>
            <div>
              <p className='text-xl font-medium'>HTML</p>
            </div>
            <div className='bg-slate-700 text-white rounded-md flex items-center gap-1 '>
              <div className='w-[78%] bg-red-500 h-full rounded-md '><span className='invisible'>.</span></div>
              <span>78%</span>
            </div>
          </li>
          <li className='w-full my-3 flex flex-col gap-2'>
            <div>
              <p className='text-xl font-medium'>CSS</p>
            </div>
            <div className='bg-slate-700 text-white rounded-md flex items-center gap-1 '>
              <div className='w-[45%] bg-yellow-500 h-full rounded-md '><span className='invisible'>.</span></div>
              <span>45%</span>
            </div>
          </li>
          <li className='w-full my-3 flex flex-col gap-2'>
            <div>
              <p className='text-xl font-medium'>JavaScript</p>
            </div>
            <div className='bg-slate-700 text-white rounded-md flex items-center gap-1 '>
              <div className='w-[67%] bg-orange-500 h-full rounded-md '><span className='invisible'>.</span></div>
              <span>60%</span>
            </div>
          </li>
          <li className='w-full my-3 flex flex-col gap-2'>
            <div>
              <p className='text-xl font-medium'>C</p>
            </div>
            <div className='bg-slate-700 text-white rounded-md flex items-center gap-1 '>
              <div className='w-[80%] bg-blue-500 h-full rounded-md '><span className='invisible'>.</span></div>
              <span>80%</span>
            </div>
          </li>
          <li className='w-full my-3 flex flex-col gap-2'>
            <div>
              <p className='text-xl font-medium'>Java (Core)</p>
            </div>
            <div className='bg-slate-700 text-white rounded-md flex items-center gap-1 '>
              <div className='w-[67%] bg-purple-500 h-full rounded-md '><span className='invisible'>.</span></div>
              <span>77%</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="skills-image flex justify-center gap-7 items-center my-7 flex-wrap ">
        <div>
          <img src={htmlImg} alt="" className='w-20' />
        </div>
        <div>

          <img src={cssImg} alt="" className='w-20' />
        </div>
        <div>

          <img src={jsImg} alt="" className='w-20' />
        </div>
        <div>
          <img src={nodejsImg} alt="" className='w-20' />
        </div>
        <div>
          <img src={reactImg} alt="" className='w-20' />
        </div>
        <div>
          <img src={cImg} alt="" className='w-20' />
        </div>
        <div>

          <img src={javaImg} alt="" className='w-20' />
        </div>
        
        <div>

        </div>
      </div>

    </div>
  )
}

export default Skills