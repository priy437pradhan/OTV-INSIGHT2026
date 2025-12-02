import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CatagoriesPage from './pages/CatagoriesPage'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catagories" element={<CatagoriesPage />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App