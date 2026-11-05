import React from 'react'

const About = () => {
  return (
    <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
      </div>

      <div>
        <p className='mb-4'>I’m a software engineer who builds things that convert. I build responsive, accessible websites for brands like <span className='text-slate-200'>Gulf African Bank</span>, <span className='text-slate-200'>Crystal Rivers Mall</span> and <span className='text-slate-200'>Kaplan and Stratton</span>, and I back them with the data and automation that show whether they’re working.</p>
        <p className='mb-4'>As a Frontend Developer at <span className='text-slate-200'>Dotsavvy Africa</span>, I ship WordPress sites, campaign landing pages (such as Farmers Choice Pork Pawa) and lead-generation journeys, and support delivery of sites like the Fortified Whole Grain Alliance (FWGA) and Executive Residency by Best Western Nairobi, plus reusable templates so editors can manage content without a developer. Across projects, engagement and conversion rates have improved by 10–25%.</p>
        <p className='mb-4'>Previously, as Technical Growth Associate at <span className='text-slate-200'>VettedAI</span>, I owned Recruiters Ring, a recruiter community event series. I grew event-day attendance an average of 25% per edition, built a Zoho CRM integration that turns every registration into a lead, and converted the audience into booked demos and a paid subscription.</p>
        <p className='mb-4'>On the engineering side, I build full-stack apps with Django REST, React and PostgreSQL, including a mobile wallet with idempotent transactions. I hold a BSc in Computer Science and certifications in cybersecurity and data protection.</p>
      </div>
    </section>
  )
}

export default About