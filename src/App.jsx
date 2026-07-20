
import './App.css'
import Navbar from './components/navbar'
import HeroSection from './features/HeroSection'
import Skills from './features/Skills'
import AboutMe from './features/AboutMe'
import Recommendation from './features/Recommendation'
import { IoIosArrowUp } from "react-icons/io";
import { ThemeProvider } from './contexts/Themecontext'
import Projects from './features/Projects'
import Certifications from './features/Certifications'

function App() {
 

  return (
    <>
    <ThemeProvider>
    <Navbar/>
    <HeroSection/>
    <Projects/>
    <Skills/>
    <Certifications/>
    <AboutMe/>
    <Recommendation/>
 
    </ThemeProvider>
    
     
    </>
  )
}

export default App
