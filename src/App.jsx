
import { useState } from 'react'

import Intro from './components/intro'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Eras from './components/eras'
import Theories from './components/theories'
import Timeline from './components/timeline/timeline'
import Reflection from './components/reflection'

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  return (
    <>
      {!isUnlocked ? (
        <Intro onUnlock={() => setIsUnlocked(true)} />
      ) : (
        <>
          <Navbar />

          <main>
            <Hero />
            <Eras />
            <Theories />
            <Timeline />
            <Reflection />
          </main>
        </>
      )}
    </>
  )
}

export default App
