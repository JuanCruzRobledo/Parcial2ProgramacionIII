import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../pages/Home'
import PopUp from '../components/popUp/PopUp'

const AppRoutes = () => {
  const [popUp, setPopUp] = useState(false)
  const [updateTrigger, setUpdateTrigger] = useState(false) // Trigger para re-render

  const handlePopUp = () => {
    setPopUp(prev => !prev) // Alterna el estado del PopUp
  }

  const triggerUpdate = () => {
    setUpdateTrigger(prev => !prev) // Forzar re-render de Home
  }

  return (
    <>
      {popUp && (
        <PopUp closePopUp={handlePopUp} triggerUpdate={triggerUpdate} />
      )}
      <Header changePopUp={handlePopUp} />
      <Routes>
        <Route path="/" element={<Home updateTrigger={updateTrigger} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default AppRoutes
