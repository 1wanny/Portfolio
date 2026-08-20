import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollManager } from './components/ScrollManager'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProjectDetail } from './pages/ProjectDetail'

export default function App() {
  return (
    <>
      {/* First tab stop: lets keyboard users skip the navigation */}
      <a
        href="#main"
        className="sr-only rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-fg focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
      >
        Skip to main content
      </a>

      <ScrollManager />
      <Navbar />

      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
