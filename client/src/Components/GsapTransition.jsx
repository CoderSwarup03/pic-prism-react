import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import SellerDashboard from "../Pages/SellerDashboard"
import BuyerDashboard from "../Pages/BuyerDashboard"
import gsap from 'gsap'
import { useEffect, useRef } from "react"
import { Toaster } from 'react-hot-toast';

const GsapTransition = () => {
    const nodeRef = useRef(null);
    const location = useLocation();
    // useEffect hook depend on location
    // when a page renders,useEffect runs frist
    useEffect(() => {
        if (nodeRef.current) {
            gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
        }
    }, [location])

    //when we keep dependency array empty its means that: yeh page call hoga jab bhi main refreh karuga

    return (
        <div ref={nodeRef}>
            <Toaster />
            <Routes location={location}>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/seller/profile' element={<SellerDashboard />} />
                <Route path='/buyer/profile' element={<BuyerDashboard />} />
            </Routes>
        </div>
    )
}

export default GsapTransition