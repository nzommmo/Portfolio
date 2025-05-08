import React from 'react'
import Nav from './Nav'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Design from './Design'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='relative'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <div className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
          <Nav/>
        </div>
        <main id='content' className='pt-24 lg:w-[52%] lg:py-24'>
        <div >
          <About/>
          <Experience/>
          <Projects/>
          <Design/>

        </div>
        </main>
        <div>
        </div>

      </div>
      <div className='relative'>
        <Contact/>

      </div>
      <div>
        <Footer/>
      </div>
    

    </div>
  )
}

export default Home