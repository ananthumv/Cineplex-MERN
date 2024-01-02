import React from 'react'
import Home from '../Pages/Home'
import AboutMovie from '../Pages/AboutMovie'
import Screening from '../Pages/Screening'
import Seats from '../Pages/Seats'
import Booking from '../Pages/Booking'
import SignUp from '../Pages/Register'
import Login from '../Pages/Login'
import NotFound from './NotFound'
import PrivateRoutes from './PrivateRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tickets from '../Pages/Tickets'


function Router() {


    const BrowserRoutes = () => {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='Register'element={<SignUp />}/>
                    <Route path='/Login'element={<Login />}/>
                        <Route element={<PrivateRoutes/>}>
                            <Route path='AboutMovie/:id' element= {<AboutMovie />}/>
                            <Route path='Screening/:id' element={<Screening />}/>
                            <Route path='Seats/:id' element={<Seats />}/>
                            <Route path='Booking' element={<Booking />}/>
                            <Route path='Tickets/:id' element={<Tickets />}/>
                        </Route>
                        <Route path='/*' element={<NotFound />}/>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
        
    
  return (
   <BrowserRoutes />
  )
}

export default Router