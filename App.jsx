import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Profile from './Components/Profile';
import { Outlet } from 'react-router-dom';


function App() {
 
  return (
    <>
       <Navbar></Navbar>
       <Outlet></Outlet>
       
       
    </>
  )
}

export default App
