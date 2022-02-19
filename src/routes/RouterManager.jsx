import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Countries from '../pages/Countries'
import Country from '../pages/Country'
import Home from '../pages/Home'

function RouterManager() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='countries' element={<Countries/>}/>
            <Route path='countries/:country' element={<Country/>}/>
        </Routes>
    </div>
  )
}

export default RouterManager