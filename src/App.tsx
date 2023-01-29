import './style/global.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { WhyQubly } from './components/why_qubly'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <WhyQubly />
    </div>
  )
}

export default App
