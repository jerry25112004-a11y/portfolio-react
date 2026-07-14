import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import MouseGlow from './components/MouseGlow'
import Toast from './components/Toast'

function App() {
  const [toast, setToast] = useState(null)

  const handleDownloadCV = () => {
    // Triggers the browser download using the file in /public/CV.
    // Replace M_Aitzaz_CV.pdf in public/CV with your actual resume.
    const link = document.createElement('a')
    link.href = '/CV/M_Aitzaz_CV.pdf'
    link.download = 'M_Aitzaz_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setToast({ type: 'success', message: 'M. Aitzaz CV is downloaded successfully!' })
  }

  return (
    <>
      <div className="page-bg" />
      <Navbar />
      <MouseGlow />

      <main className="overflow-hidden">
        <Hero onDownloadCV={handleDownloadCV} />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Contact onResult={setToast} />
      </main>

      <Footer />
      <BackToTop />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  )
}

export default App
