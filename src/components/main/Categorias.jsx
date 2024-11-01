import React from 'react'
import { useState } from 'react'
import filterIcon from '/src/assets/svg/filter.svg'

const Categorias = ({ setActiveCategory }) => {
  const [activeCategory, setActive] = useState('todo') // 'todo' como categoría por defecto

  const handleClick = category => {
    setActive(category)
    setActiveCategory(category) // Actualizar categoría activa en Home
  }

  const getClass = category => (activeCategory === category ? 'listActive' : '')

  return (
    <div className="text-[1rem] lg:text-[1.3rem] bg-slate-600">
      <aside className="list flex justify-between items-center px-4 py-8 w-full h-10">
        <h2 className="text-[1.8em] font-bold">Categorías</h2>
        <img src={filterIcon} alt="" className="w-5" />
      </aside>
      <ul className="px-4 flex flex-col gap-4">
        {[
          'todo',
          'hamburguesas',
          'papas',
          'gaseosas',
          'mayorPrecio',
          'menorPrecio',
        ].map(category => (
          <li
            key={category}
            className={`cursor-pointer ${getClass(
              category
            )} px-2 py-1 rounded-md transition-colors duration-200`}
            onClick={() => handleClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Categorias
