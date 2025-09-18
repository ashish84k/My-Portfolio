
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import ProjectsPage from './components/pages/ProjectsPage'
import BlogPage from './components/pages/BlogPage'
import BlogDetailPage from './components/pages/BlogDetailPage'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
