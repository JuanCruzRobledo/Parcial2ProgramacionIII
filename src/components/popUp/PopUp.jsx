import React, { useState } from 'react'

const PopUp = ({ closePopUp, triggerUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    category: '',
  })

  const handleInputChange = e => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleAccept = () => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || []

    const productExists = storedProducts.some(
      product => product.name.toLowerCase() === formData.name.toLowerCase()
    )

    if (productExists) {
      alert('Este producto ya existe. Intente con otro nombre.')
      return
    }

    const newProduct = { ...formData, id: Date.now() }
    const updatedProducts = [...storedProducts, newProduct]

    localStorage.setItem('products', JSON.stringify(updatedProducts))

    alert('Producto guardado exitosamente.')
    triggerUpdate() // Notificar que hay una actualización
    closePopUp() // Cerrar el PopUp
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div className="bg-white w-2/5 h-1/2 rounded-lg shadow-lg p-8 flex flex-col gap-3 items-center">
        <h2 className="text-xl font-bold mb-4">Agregar o modificar producto</h2>
        <div className="flex flex-col gap-3 w-full items-center">
          <input
            type="text"
            id="name"
            placeholder="Nombre del producto"
            value={formData.name}
            onChange={handleInputChange}
            className="w-5/6 bg-gray-900 text-gray-400 border-2 border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            type="text"
            id="image"
            placeholder="Ingrese una imagen"
            value={formData.image}
            onChange={handleInputChange}
            className="w-5/6 bg-gray-900 text-gray-400 border-2 border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            type="number"
            id="price"
            placeholder="Precio"
            value={formData.price}
            onChange={handleInputChange}
            className="w-5/6 bg-gray-900 text-gray-400 border-2 border-gray-300 px-4 py-2 rounded-md"
          />
          <select
            id="category"
            value={formData.category}
            onChange={handleInputChange}
            className="border-2 border-black px-4 py-2 w-5/6"
          >
            <option value="">Seleccione una categoría</option>
            <option value="Gaseosas">Gaseosas</option>
            <option value="Hamburguesas">Hamburguesas</option>
            <option value="Papas">Papas</option>
          </select>
        </div>
        <div className="w-full flex justify-center items-center gap-4 mt-4">
          <button
            onClick={closePopUp}
            className="bg-slate-300 px-4 py-2 rounded-md"
          >
            Cancelar
          </button>
          <button
            onClick={handleAccept}
            className="bg-slate-300 px-4 py-2 rounded-md"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopUp
