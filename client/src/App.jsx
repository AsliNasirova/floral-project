import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './Layout/MainLayout/mainlayout'
import Home from './Pages/Home/home'
import Aboutus from './Pages/AboutUs/aboutus'
import Portfolio from './Pages/Portfolio/portfolio'
import Pricing from './Pages/Pricing/pricing'
import Contacts from './Pages/Contacts/contacts'
import Add from './Pages/AddPage/add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Mainlayout/>}>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Route>
    </Routes>
      
    </>
  )
}

export default App
