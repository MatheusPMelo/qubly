import './style/global.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { WhyQubly } from './components/WhyQubly'
import { Teams } from './components/Teams'
import { Engineering } from './components/Engineering'
import { Feedback } from './components/Feedback'
import { SignUp } from './components/SignUp'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="App min-w-full">
      <Navbar />
      <Header />
      <WhyQubly />
      <Teams />
      <Engineering />
      <Feedback />
      <SignUp />
      <Footer />
    </div>
  )
}

export default App
