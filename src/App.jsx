import './App.css'
import './components/Navbar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

function App() {

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
