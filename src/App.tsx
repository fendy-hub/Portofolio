import About from "./components/About"
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App () {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Projects />
    </div>
  )
}

export default App