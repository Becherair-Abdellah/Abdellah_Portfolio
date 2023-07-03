
import './App.css'
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HearoSection from './components/HearoSection';
import useHeaderShadow from './hooks/useClasses';
import { useEffect } from 'react';
import Expert from './components/Expert';
import Workexper from './components/Workexper';
import Portfolio from './components/Portfolio';
import People from './components/People';
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <HearoSection/>
      <Expert/>
      <Workexper/>
      <Portfolio/>
      <People/>
      <Footer/>
    </>
  )
}

export default App
