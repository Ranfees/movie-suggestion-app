import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from '../components/navbar.jsx'
import About from '../components/about.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <About/>
  </StrictMode>,
)
 