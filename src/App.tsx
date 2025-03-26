import Nav from "./components/Nav.tsx"
import Home from "./components/Home.tsx"
import Carrer from "./components/Career.tsx"
import Projects from "./components/Projects.tsx"
import { useEffect, useState } from "react"




function App() {
  const [isLoaded, setIsLoad] = useState(false);

  useEffect( () => {
      setIsLoad(true)
    }, [])
  
    
  const fadeIn = `transition-opacity duration-${1000} ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`

  return(
  <div className={`bg-[#131219] h-[100%] w-screen space-y-12`}>
    <Nav/>
    <Home FadeIn={fadeIn} />
    <Carrer FadeIn={fadeIn} />
    <Projects FadeIn={fadeIn} />
  </div>
  ) 
}

export default App
