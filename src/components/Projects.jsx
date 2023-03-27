import React from 'react'
import mscloneImg from '../assets/msclone-image.png'
import tpImg from '../assets/tp.png'
import eteceImg from '../assets/eteceImg.png'
import waclone from '../assets/waclone.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center  py-7 mb-20 ' >
      <h2 className='text-3xl font-semibold text-center mb-9 '>Projects</h2>
      <div>
        <div className='cards-row flex flex-col md:flex-row justify-center gap-10 p-3 my-9'>
          <div className="card py-5 px-5 flex flex-col w-full md:w-1/3  gap-7 border shadow-lg">
            <div className='card-img'>
              <img src={mscloneImg} alt="mscloneImg" />
            </div>
            <div className="card-description">
              <p className='text-center'>Microsoft's home page design cloned using HTML + CSS(Tailwind CSS) + JavaScript</p>
            </div>
            <div className="card-btn flex gap-2 justify-center">
              <button className='bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 hover:ring-2 hover:ring-slate-300' >
                <a target={'_blank'} rel="noreferrer" href="https://github.com/desaiHarsh08/ms-clone.github.io" className='flex gap-1 items-center'>
                  <GitHubIcon />
                  Source code
                </a>
              </button>
              <button className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 hover:ring-2 hover:ring-slate-300' >
                <a target={'_blank'} rel="noreferrer" href="https://desaiharsh08.github.io/ms-clone.github.io/" className='flex gap-1 items-center'>
                  <VisibilityIcon />
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className="card py-5 flex flex-col w-full md:w-1/3  gap-7 border shadow-lg">
            <div className='card-img'>
              <img src={tpImg} alt="mscloneImg" />
            </div>
            <div className="card-description">
              <p className='text-center'>An online web app for the college's T&P department to manage the students record regarding placement activities.</p>
            </div>
            <div className="card-btn flex gap-2 justify-center">
              <button className='bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 hover:ring-2 hover:ring-slate-300' >
                <a target={'_blank'} rel="noreferrer" href="https://github.com/desaiHarsh08" className='flex gap-1 items-center'>
                  <GitHubIcon />
                  Source code
                </a>
              </button>
              <button className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 hover:ring-2 hover:ring-slate-300' >
                <a target={'_blank'} rel="noreferrer" href="https://keen-pixie-90dc46.netlify.app/" className='flex gap-1 items-center'>
                  <VisibilityIcon />
                  Live Demo
                </a>
              </button>
            </div>
          </div>
          <div className="card py-5 flex flex-col w-full md:w-1/3  gap-7 border shadow-lg">
            <div className='card-img'>
              <img src={eteceImg} alt="mscloneImg" />
            </div>
            <div className="card-description">
              <p className='text-center px-1'>International conference website for my college (ETC Department).</p>
            </div>
            <div className="card-btn flex gap-2 justify-center">
              <button className='bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 hover:ring-2 hover:ring-slate-300' >
                <a target={'_blank'} rel="noreferrer" href="https://github.com/desaiHarsh08/college-project.github.io" className='flex gap-1 items-center'>
                  <GitHubIcon />
                  Source code
                </a>
              </button>
              <button className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 hover:ring-2 hover:ring-slate-300' >
                <a target={'_blank'} rel="noreferrer" href="https://etece.co.in/" className='flex gap-1 items-center'>
                  <VisibilityIcon />
                  Live Demo
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className='cards-row flex flex-col md:flex-row justify-center gap-10 p-3 my-9'>
          <div className="card py-5 px-5 flex flex-col w-full md:w-1/3  gap-7 border shadow-lg">
            <div className='card-img'>
              <img src={waclone} alt="mscloneImg"  />
            </div>
            <div className="card-description">
              <p className='text-center'>Whatsapp clone - Group chat using Node.js and socket programming.</p>
            </div>
            <div className="card-btn flex gap-2 justify-center">
              <button className='bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 hover:ring-2 hover:ring-slate-300' >
                <a target={'_blank'} rel="noreferrer" href="https://github.com/desaiHarsh08/ms-clone.github.io" className='flex gap-1 items-center'>
                  <GitHubIcon />
                  Source code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects