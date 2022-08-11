import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About} from '../pages/About'
export const MainRouter = () => {
  return (
   <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='/about' element={<About />} />
   </Routes>
  )
}
