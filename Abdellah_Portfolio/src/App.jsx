
import './App.css'
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HearoSection from './components/HearoSection';
import useHeaderShadow from './hooks/useClasses';
import { useEffect } from 'react';
import Expert from './components/Expert';
function App() {
  return (
    <>
      <Navbar/>
      <HearoSection/>
      <Expert/>
    </>
  )
}

export default App
