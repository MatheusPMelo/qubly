import './style/global.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { WhyQubly } from './components/why_qubly'
import { Teams } from './components/teams'

function App() {

  return (
    <div className="App min-w-full">
      <Navbar />
      <Header />
      <WhyQubly />
      <Teams />
    </div>
  )
}

export default App
