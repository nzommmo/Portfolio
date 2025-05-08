import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './Components/Home'
import Archive from './Components/Archive';

const App = () => {
  return (
    <div className='bg-slate-900 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0'>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project-archive' element={<Archive/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App