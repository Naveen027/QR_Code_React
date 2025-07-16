import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Formik } from 'formik'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Formik/> */}
  </StrictMode>,
)
