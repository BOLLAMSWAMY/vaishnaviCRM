
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Media from './Components/Media'
import ContactUs from './Components/ContactUs'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}>
    </Route>
    <Route path='/aboutus' element={<AboutUs/>}>
    </Route>
    <Route path='/services' element={<Services/>}>
    </Route>
    <Route path='/media' element={<Media/>}>
    </Route>
    <Route path='/contactus' element={<ContactUs/>}>
    </Route>
    </Routes>
    </BrowserRouter>
     

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutePage from './pages/aboutPage/AboutPage'
import HomePage from './pages/homePage/HomePage'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
