import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import StringEntropyAnalyzer from './mainComponents/StringEntropyAnalyzer'
import GamifiedPlayGround from './mainComponents/GamifiedPlayGround'
import CodeExplanation from './mainComponents/CodeExplanation'
import TimelineExplorer from './mainComponents/TimelineExplorer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stringanalzer" element={<StringEntropyAnalyzer />} />
        <Route path="/gamified-playground" element={<GamifiedPlayGround />} />
        <Route path="/code-explanation" element={<CodeExplanation/>}/>
        <Route path='/timeline' element={<TimelineExplorer />} />
      </Routes>
    </Router>
  )
}

export default App
