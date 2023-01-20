import React from 'react'
import './App.css'
import { AlapacaGenerator } from './components/AlapacaGenerator'

function App() {

  return (
    <div className="h-screen">
      <div className="container mx-auto p-8 space-y-8">
        <h1 className="text-left text-6xl text-blue-900 uppercase font-semibold">Alpaca Generator</h1>
        <AlapacaGenerator/>
      </div>
    </div>
  )
}

export default App
