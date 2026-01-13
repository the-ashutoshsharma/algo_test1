
import React from 'react'
import './App.css'
import Sidebar from './features/sidebar/sidebar'
import Hero from './features/landing/components/Hero'
import Omnibox from './features/landing/components/Omnibox'
function App() {
 

  return (
    <div className="flex h-screen bg-[#0e0e0e] text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center">
        <div className="flex-1 flex flex-col justify-center w-full max-w-225 px-5">    {/* 3. Centered Content Area (Hero) */}
          <Hero />
        </div>
        <div className="w-full  max-w-225 px-5 pb-8">  {/* 4. Bottom Input Area (Omnibox) */}
          <Omnibox />
        </div>

      </main>
    </div>
  )
}

export default App

