import { useState } from 'react'
import './App.css'
import { Outlet,Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <ul className='flex space-x-8 mb-8 bottom-0'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
      <footer>Footer</footer>
    </>
  )
}

export default App
