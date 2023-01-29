import './style/global.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { WhyQubly } from './components/why_qubly'
import { Teams } from './components/teams'
import { Engineering } from './components/Engineering'

function App() {

  return (
    <div className="App min-w-full">
      <Navbar />
      <Header />
      <WhyQubly />
      <Teams />
      <Engineering />
    </div>
  )
}

export default App
