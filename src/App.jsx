import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-primary">
          <Navbar />
          <div className='relative z-0'>
            <StarsCanvas />
            <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
