import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Destinations from '../Components/Destinations'
import Tours from '../Components/Tours'

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/Destination' element={<Destinations />} />
                    <Route path='/tours' element={<Tours />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}
