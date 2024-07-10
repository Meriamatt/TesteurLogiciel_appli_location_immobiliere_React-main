//import { useState } from 'react'

import './App.css'
import Home from './pages/home/home.jsx'
import Header from "./component/Header"
import Footer from "./component/footer"
import Error from "./pages/error/error.jsx"

import {
 BrowserRouter,
  Route, Routes
} from "react-router-dom"

function App() {
  

  return (
   
     <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
     </BrowserRouter>
    
  )
}

export default App
