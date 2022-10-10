import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Details from './pages/Details'
import './global.css'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/details/:id' element={<Details />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
