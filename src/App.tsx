import Nav from "./components/Nav.tsx"
import Home from "./components/Home.tsx"
import Carrer from "./components/Career.tsx"
import Projects from "./components/Projects.tsx"
import { useEffect, useState } from "react"


export interface AppearanceTheme {
  backgroundColor: string
  alternativeBackgroundColor?: string
  textColor: string
  buttonBackgroundColor: string
  paragraphColor: string
} 



function App() {

  const darkTheme : AppearanceTheme = {
    backgroundColor: "bg-[#131219]",
    alternativeBackgroundColor: "bg-[#15141b]",
    buttonBackgroundColor: "bg-gray-900",
    textColor: "text-white",
    paragraphColor: "text-gray-400"
  }

  const whiteTheme: AppearanceTheme = {
    backgroundColor: "bg-white",
    alternativeBackgroundColor: "bg-gray-100",
    buttonBackgroundColor: "bg-gray-200",
    textColor: "text-black",
    paragraphColor: "text-gray-700"
}


  const [isLoaded, setIsLoad] = useState(false)
  const [theme] = useState(whiteTheme)


  useEffect( () => {
      setIsLoad(true)
    }, [])
  
    
  const fadeIn = `transition-opacity duration-1000 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`

  return(
  <div className={`${theme.backgroundColor} h-[100%] w-screen space-y-12`}>
    <Nav Theme={theme} />
    <Home Theme={theme} FadeIn={fadeIn} />
    <Carrer Theme={theme} FadeIn={fadeIn} />
    <Projects Theme={theme} FadeIn={fadeIn} />
  </div>
  ) 
}

export default App
