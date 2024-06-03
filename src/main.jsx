import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About.jsx'
import Error from './Pages/Error.jsx'
import Dashboard from "./Pages/Host/Dashboard.jsx"
import Review from "./Pages/Host/Reviews.jsx"
import Income from "./Pages/Host/Income.jsx"
import "./server.js"
import Vans from './Pages/vans/Vans.jsx'
import VanDetails from './Pages/vans/VanDetails.jsx'
import Layout from './components/Layout.jsx'
import HostLayout from './components/HostLayout.jsx'
import HostVans from "./Pages/Host/HostVans.jsx"
import HostVanDetails from './Pages/Host/HostVanDetails.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>

    <Routes >
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />



        <Route path='vans'>
          <Route index element={<Vans />} />
          <Route path=':id' element={<VanDetails />} />
        </Route>


        <Route path='about' element={<About />} />

        <Route path='host' element={<HostLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Review />} />
          <Route path='vans' element={<HostVans />} />
          <Route path='vans/:id' element={<HostVanDetails />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Route>
    </Routes>



  </BrowserRouter >

)
