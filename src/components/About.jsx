import React from 'react'
import profileImag2 from '../assets/p2.png'

const About = () => {
  return (
    <div id='about' className='flex flex-col items-center  py-7 mb-20 '>
      <h2 className='text-3xl font-semibold text-center mb-9 '>About me</h2>
      <div className='flex flex-col md:flex-row py-12 items-center gap-7 md:gap-20 px-3 sm:w-3/4'>
        <div className="left flex flex-col gap-7 w-full md:w-3/4">
          <p className='text-justify'>
          I am currently pursuing B. E from K.D.K College of Engineering in Information Technology stream. My hometown is Nagpur. I have completed my schooling from Central India Public School, Nagpur and I did my 12th from Bhavan's B.P Vidhya Mandir, Nagpur in Computer Science branch.
          </p>
          <p className='text-justify'>
          Coming to my hobbies, I like to playing cricket, watching T.V. and Internet surfing.
          </p>
          <p className='text-justify'>
          My strength is hard worker as well as smart worker and a quick learner. I am always given my 100%.
          </p>
          <p className='text-justify'>
          I am self-motivated, and disciplined soul. I am always been to up-skill myself by learning new things whenever I get a chance.
          </p>
        </div>
        <div className="right flex justify-center items-center w-2/4 md:w-1/4">
          <img src={profileImag2} alt='profileImag2' className='border-2 w-3/4 border-blue-500 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default About