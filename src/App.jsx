import { useState } from 'react'
import './App.css'
import { Outlet,Link } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar></Navbar>
      <Outlet></Outlet>
      <footer>Footer</footer>
    </>
  )
}

export default App
