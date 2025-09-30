import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NechieForm from './components/NechieForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NechieForm/>
    </>
  )
}

export default App
