import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"
import "./server"
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Reviews from './pages/Reviews'
import HostLayout from "./components/HostLayout"

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/vans/:id" element={<VanDetails/>}/>

        <Route path="host" element={<HostLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        </Route>

        
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
