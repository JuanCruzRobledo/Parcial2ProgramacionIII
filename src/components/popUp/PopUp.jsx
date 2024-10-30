import React, { useState, useEffect } from 'react'

const PopUp = ({ closePopUp, product, setProducts }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    image: product?.image || '',
    price: product?.price || '',
    category: product?.category || '',
  })

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        image: product.image,
        price: product.price,
        category: product.category,
      })
    }
  }, [product])

  const handleInputChange = e => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleAccept = () => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || []
    const newProducts = storedProducts.map(p =>
      p.id === product.id ? { ...p, ...formData } : p
    )

    // Solo se actualizará si el producto no está siendo eliminado
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts)
    closePopUp()
  }

  const handleDelete = () => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || []
    // Filtrar el producto que se va a eliminar
    const newProducts = storedProducts.filter(p => p.id !== product.id)
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts)
    closePopUp()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div className="bg-white w-2/5 h-1/2 rounded-lg shadow-lg p-8 flex flex-col gap-3 items-center">
        <h2 className="text-xl font-bold mb-4">
          {product ? 'Modificar producto' : 'Agregar producto'}
        </h2>
        <div className="flex flex-col gap-3 w-full items-center">
          <input
            type="text"
            id="name"
            placeholder="Nombre del producto"
            value={formData.name}
            onChange={handleInputChange}
            className="w-5/6 bg-gray-900 text-gray-400 border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2 rounded-md transition"
          />
          <input
            type="text"
            id="image"
            placeholder="Ingrese una imagen"
            value={formData.image}
            onChange={handleInputChange}
            className="w-5/6 bg-gray-900 text-gray-400 border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2 rounded-md transition"
          />
          <input
            type="number"
            id="price"
            placeholder="0"
            value={formData.price}
            onChange={handleInputChange}
            className="w-5/6 bg-gray-900 text-gray-400 border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2 rounded-md transition"
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
            className="bg-green-200 text-black px-[0.4em] py-[0.4em] hover:bg-slate-400 rounded-md border-2 border-black text-[0.8em]"
            onClick={handleAccept}
          >
            Aceptar
          </button>
          <button
            className="bg-slate-300 text-black px-[0.4em] py-[0.4em] hover:bg-slate-400 rounded-md border-2 border-black text-[0.8em]"
            onClick={closePopUp}
          >
            Cancelar
          </button>

          <button
            className="bg-red-500 text-white px-[0.4em] py-[0.4em] hover:bg-red-600 rounded-md border-2 border-black text-[0.8em]"
            onClick={handleDelete} // Llama a la función de eliminar
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
export default PopUp
