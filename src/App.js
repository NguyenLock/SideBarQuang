import { useState } from 'react'
import './App.css'


import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'

function App() {
  

  return (
   <div className='grid-container'>
    <Header/>
    <Sidebar/>
    <Home/>
   </div>
  )
}

export default App
