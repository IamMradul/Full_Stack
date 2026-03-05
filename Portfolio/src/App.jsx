import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Body from './body'
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}

export default App
