//import { useState } from 'react'

import './App.css'
import Home from './pages/home/home.jsx'
import Header from "./component/header/Header.jsx"
import Footer from "./component/footer/footer.jsx"
import Error from "./pages/error/error.jsx"
import About from './pages/about/about.jsx'

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
      <Route path="/about" element={<About />}/> 
      <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
     </BrowserRouter>
    
  )
}

export default App
