import { useEffect, useState } from 'react'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
const uri = `${import.meta.env.VITE_API_URI}/auth/login/success`
import axios from 'axios'
import Navbar from './components/Navbar'
import FooterComponent from './components/Footer'
import Products from './pages/Products'
function App() {
  const [userDetails, setUserDetails] = useState(null)
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          {/* <Route exact path="/" element={userDetails ? <Home userDetails={userDetails} /> : <Navigate to="/register" />} /> */}
          {/* <Route path="/register" element={userDetails ? <Navigate to="/" /> : <RegisterPage />} /> */}
        </Routes>
        <FooterComponent />
      </Router>
    </>
  )
}

export default App
