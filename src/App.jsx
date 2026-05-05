import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ background: 'linear-gradient(135deg,#0d1117 0%,#1a2340 60%,#1e3a5f 100%)' }}>
          <Hero />
        </div>
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
