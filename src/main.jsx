import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About.jsx'
import Error from './Pages/Error.jsx'
import Navbar from './components/Navbar.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  <Navbar/>
    <Routes >
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Error />} />

    </Routes>



  </BrowserRouter>

)
