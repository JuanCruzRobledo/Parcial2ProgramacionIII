import React from 'react'
import addIcon from '/src/assets/svg/add.svg'

const Header = ({ changePopUp, addDefaultProducts }) => {
  return (
    <div className="w-screen h-24 bg-transparent flex justify-around items-center absolute top-0 text-[0.7rem] md:text-[1rem] lg:text-[1.3rem] bg-slate-400">
      <div className="flex gap-2">
        <div className="w-[2em] bg-black text-white flex justify-center items-center text-[1em]">
          JR
        </div>
        <h1 className="text-[1em]">Juan Cruz Robledo</h1>
      </div>

      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Buscar"
          className="border-2 px-[0.4em] py-[0.4em] h-[2.3em] w-[10em]"
        />
        <button
          type="submit"
          className="bg-slate-300 text-black px-[0.4em] py-[0.4em] hover:bg-slate-400 rounded-md border-2 border-black text-[0.8em]"
        >
          Buscar
        </button>
      </div>

      <ul className="flex gap-5">
        <li>
          <button
            onClick={changePopUp} // Ejecutamos directamente el evento
            className="text-[0.8em] hover:bg-slate-400 py-[0.8em] px-[0.8em] rounded-md border-2 flex gap-2"
          >
            Agregar Producto
            <img src={addIcon} className="w-5" alt="Agregar" />
          </button>
        </li>
        <li>
          <button
            onClick={addDefaultProducts} // Función para agregar productos por defecto
            className="text-[0.8em] hover:bg-slate-400 py-[0.8em] px-[0.8em] rounded-md border-2 flex gap-2"
          >
            Añadir Ejemplo
            <img src={addIcon} className="w-5" alt="Agregar" />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Header
