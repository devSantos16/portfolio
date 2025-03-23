import Nav from "./components/Nav.tsx"
import Home from "./components/Home.tsx"
import Carrer from "./components/Career.tsx"
import Projects from "./components/Projects.tsx"

function App() {
  return(
  <div className='bg-[#131219] h-[100%] w-screen space-y-12'>
    <Nav/>
    <Home/>
    <Carrer/>
    <Projects/>
  </div>
  ) 
}

export default App
