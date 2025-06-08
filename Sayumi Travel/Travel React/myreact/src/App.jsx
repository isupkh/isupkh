import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Contact from './Contact';
import Videos from './Videos';
import Ticket from './Ticket';
import Packages from './Packages';
import DataPackage from './DataPackage';
import Home from './Home';
import Details from './Details';
import About from './About';



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/videos' element={<Videos/>} />
        <Route path='/ticket' element={<Ticket/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/datapackage/:id' element={<DataPackage/>}/>
      </Routes>       
      <Footer/>
    </>
  )
}

export default App
