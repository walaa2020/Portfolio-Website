
import { createRoot } from 'react-dom/client'
import './index.css'
import Protfolio from './pages/Protfolio.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Protfolio />
  </BrowserRouter>
)
