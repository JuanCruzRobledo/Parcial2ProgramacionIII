import React, { useState, useEffect } from 'react'
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
        image:
          'https://resizer.glanacion.com/resizer/v2/hamburguesa-blt-de-john-john-burger-bacon-lettuce-RHVGX3MHVRB7VGEXBEVCCZHW5I.jpg?auth=53776ee5a203ae1fbe457df3473f7c2d9470016ad51a458c73c5b950966a4f57&width=768&quality=70&smart=false',
      },
      {
        id: 2,
        name: 'Hamburguesa Doble',
        category: 'hamburguesas',
        price: 8.99,
        image: 'https://www.clarin.com/2022/05/27/0HXb0UR0v_2000x1500__1.jpg',
      },
      {
        id: 3,
        name: 'Hamburguesa Vegana',
        category: 'hamburguesas',
        price: 6.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUWoqMp8O5SwtyGrPOC9c6ouuwQYF0wP_LA&s',
      },
      {
        id: 4,
        name: 'Papas Fritas',
        category: 'papas',
        price: 2.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHN4zxDc1z_6cpXua1dCtO0mRCmGHzl61MwQ&s',
      },
      {
        id: 5,
        name: 'Papas al Horno',
        category: 'papas',
        price: 3.49,
        image: 'https://i.blogs.es/b88670/patatas_fritas/1366_2000.jpg',
      },
      {
        id: 6,
        name: 'Papas Rústicas',
        category: 'papas',
        price: 3.99,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyn_GNkkvDQth-jkB5BlEDDyAM7TNOpSRa5A&s',
      },
      {
        id: 7,
        name: 'Gaseosa Regular',
        category: 'gaseosas',
        price: 1.5,
        image:
          'https://dcdn.mitiendanube.com/stores/001/151/835/products/77908950009971-d6396175b7ca20416b15890784336194-640-0.jpg',
      },
      {
        id: 8,
        name: 'Gaseosa Diet',
        category: 'gaseosas',
        price: 1.75,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJ_j1fEyoSYx1r94BgFOImYD2qKhjTnn8rA&s',
      },
      {
        id: 9,
        name: 'Agua Mineral',
        category: 'gaseosas',
        price: 1.2,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmGrEXNzqRJ3qcOFjcCuKHYpcmzfl9SNdGw&s',
      },
    ]

    // Limpiar el localStorage antes de añadir productos predeterminados
    localStorage.clear()

    // Guardar los productos predeterminados en el localStorage
    localStorage.setItem('products', JSON.stringify(defaultProducts))

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
