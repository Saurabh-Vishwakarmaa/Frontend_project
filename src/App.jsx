import { useState } from 'react'

import './App.css'

import AstrattoLanding from './Heropage'
import MidHero from './Midhero'
import Bottom from './Bottom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AstrattoLanding/>
    <MidHero/>
    <Bottom/>

    </>
  )
}

export default App
