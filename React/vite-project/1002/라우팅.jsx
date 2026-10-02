import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NaviBar from './components/NaviBar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <NaviBar />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </div>
      
      
      
      
      </BrowserRouter>
    </div>
  )
}

export default App
