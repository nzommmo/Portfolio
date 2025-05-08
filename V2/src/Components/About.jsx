import React from 'react'
import { AboutParagraphs } from '../Constants'

const About = () => {
  return (
        <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
            </div>

            <div>
            
                <p className='mb-4'>I’m a developer passionate about crafting accessible, high-quality user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
                <p className='mb-4'>Currently, I serve as a Frontend Developer at <span className='text-slate-200 hover:text-teal-300'>Dotsavvy Africa</span> , where I contribute to creating and maintaining UI components for our clients' websites. We focus on delivering solutions that meet web accessibility standards and best practices, ensuring an inclusive and seamless user experience for every project.</p>
                <p className='mb-4'>In addition to my core work, I actively explore the tech space through open-source contributions, freelance projects, and hands-on side ventures that tackle real-world challenges in areas like transport and healthcare. These experiences keep me agile, creative, and continuously learning. I also serve as the Technical Lead at the <span className='text-slate-200 hover:text-teal-300'>Innovation Hub of The Catholic University of Eastern Africa</span> , where I support fellow developers and coordinate hands-on tech initiatives.</p>
                <p className='mb-4'>For my leisure time, I enjoy the rare once-in-a-lifetime occasion when I go for a walk or just relax with some music.</p>


            </div>


        </section>
  )
}

export default About