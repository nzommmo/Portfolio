import React from 'react'
import { ProjectArchive } from '../Constants'

const Archive = () => {
  return (
    <div className='lg:py-24'>
      <a 
        href="/"
        className='group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300'
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
        </svg>
        Eric Nzomo
      </a>

      <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>All Projects</h1>

      <table className='mt-12 w-full border-collapse text-left'>
        <thead className='sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur'>
          <tr>
            <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>Year</th>
            <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>Project</th>
            <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>Made at</th>
            <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>Built With</th>
            <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>Link</th>
          </tr>
        </thead>

        <tbody>
          {ProjectArchive.map((archive, index) => (
            <tr key={index} className='border-b border-slate-300/10 last:border-none'>
              <td className='py-4 pr-4 align-top text-sm'>
                <div className='translate-y-px'>{archive.Year}</div>
              </td>
              <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-200'>
                <div>
                  <div className='block sm:hidden'>
                    <a
                      href={archive.Link}
                      className='inline-flex items-baseline font-medium leading-tight text-slate-200  focus-visible:text-teal-300 hover:text-teal-300  sm:hidden group/link text-base'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <span>{archive.Project}
                        <span className='inline-block'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className='hidden sm:block'>
                    {archive.Project}
                  </div>
                </div>
              </td>
              <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell'>
                <div className='translate-y-px whitespace-nowrap'>{archive.MadeAt}</div>
              </td>
              <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                <ul className='flex -translate-y-1.5 flex-wrap'>
                  {archive.MadeWith.map((tech, idx) => (
                    <li key={idx} className='my-1 mr-1.5'>
                      <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                        {tech.Tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
              <td className='hidden py-4 align-top sm:table-cell'>
                <ul className='translate-y-1'>
                  <li className='mb-1 flex items-center'>
                    <a
                      href={archive.Link}
                      className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 group/link'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <span>
                        <span className='inline-block'>
                          {archive.Project}.com
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Archive
