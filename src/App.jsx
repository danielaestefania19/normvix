import Header from './components/Header'
import Hero from './components/Hero'
import Audience from './components/Audience'
import Problems from './components/Problems'
import Features from './components/Features'
import Modules from './components/Modules'
import HowItWorks from './components/HowItWorks'
import Results from './components/Results'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-marfil">
      <Header />
      <Hero />
      <Problems />
      <Modules />
      <HowItWorks />
      <Features />
      <Audience />
      <Results />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
