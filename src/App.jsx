import { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Project from  './Component/Project'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Skills from './Component/Skills'
import Contact from './Component/Contact'
import Education from './Component/Education'




function App() {
 

  return (
  
<BrowserRouter>
  <Navbar />
 
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/education' element={<Education />} />
    <Route path='/project' element={<Project />} />
    <Route path='/skills' element={<Skills />} />
    <Route path='/contact' element={<Contact />} />
    {/* Set the default route to '/home' */}
    <Route index element={<Home />} />
  </Routes>

</BrowserRouter>

   
  )
}

export default App
