import { Suspense, useState } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res=> res.json())


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback={<p>Waiting for API....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
