import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
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

  const addDefaultProducts = () => {
    const defaultProducts = [
      {
        id: 1,
        name: 'Hamburguesa Clásica',
        category: 'hamburguesas',
        price: 5.99,
        image: 'url_a_imagen',
      },
      {
        id: 2,
        name: 'Hamburguesa Doble',
        category: 'hamburguesas',
        price: 8.99,
        image: 'url_a_imagen',
      },
      {
        id: 3,
        name: 'Hamburguesa Vegana',
        category: 'hamburguesas',
        price: 6.99,
        image: 'url_a_imagen',
      },
      {
        id: 4,
        name: 'Papas Fritas',
        category: 'papas',
        price: 2.99,
        image: 'url_a_imagen',
      },
      {
        id: 5,
        name: 'Papas al Horno',
        category: 'papas',
        price: 3.49,
        image: 'url_a_imagen',
      },
      {
        id: 6,
        name: 'Papas Rústicas',
        category: 'papas',
        price: 3.99,
        image: 'url_a_imagen',
      },
      {
        id: 7,
        name: 'Gaseosa Regular',
        category: 'gaseosas',
        price: 1.5,
        image: 'url_a_imagen',
      },
      {
        id: 8,
        name: 'Gaseosa Diet',
        category: 'gaseosas',
        price: 1.75,
        image: 'url_a_imagen',
      },
      {
        id: 9,
        name: 'Agua Mineral',
        category: 'gaseosas',
        price: 1.2,
        image: 'url_a_imagen',
      },
    ]

    // Obtener los productos actuales del localStorage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || []

    // Combina los productos existentes con los predeterminados
    const newProducts = [...existingProducts, ...defaultProducts]

    // Guardar los nuevos productos en el localStorage
    localStorage.setItem('products', JSON.stringify(newProducts))

    // Dispara el trigger para forzar el re-render de Home
    triggerUpdate()
  }

  return (
    <>
      {popUp && (
        <PopUp closePopUp={handlePopUp} triggerUpdate={triggerUpdate} />
      )}
      <Header
        changePopUp={handlePopUp}
        addDefaultProducts={addDefaultProducts}
      />
      <Routes>
        <Route path="/" element={<Home updateTrigger={updateTrigger} />} />
      </Routes>
    </>
  )
}

export default AppRoutes
