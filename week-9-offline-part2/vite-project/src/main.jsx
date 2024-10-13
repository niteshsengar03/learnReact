import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WrapperComp from './WrapperComp.jsx'
import Keys from './Keys.jsx'

createRoot(document.getElementById('root')).render(
    // <WrapperComp/>
    <Keys/>
)
