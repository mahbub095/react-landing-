import { useState } from 'react'
import './App.css'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  //Layout
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <footer>Footer</footer>

    </>
  )
}

export default App
