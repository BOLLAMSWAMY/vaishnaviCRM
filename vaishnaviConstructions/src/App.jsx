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
