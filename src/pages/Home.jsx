import React, { useState, useEffect } from 'react'
import Categorias from '../components/main/Categorias'
import PopUp from '../components/popUp/PopUp'

const Home = ({ updateTrigger }) => {
  const [products, setProducts] = useState([]) // Todos los productos
  const [filteredProducts, setFilteredProducts] = useState([]) // Productos filtrados
  const [activeCategory, setActiveCategory] = useState('todo') // Categoría seleccionada
  const [selectedProduct, setSelectedProduct] = useState(null) // Producto seleccionado para editar
  const [popUp, setPopUp] = useState(false) // Estado del PopUp

  // Cargar productos desde localStorage al montar el componente
  useEffect(() => {
    const loadProducts = () => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || []
      setProducts(storedProducts)
      setFilteredProducts(storedProducts) // Mostrar todos los productos al inicio
    }

    loadProducts() // Cargar productos al iniciar
  }, [])

  // Volver a cargar productos cuando el updateTrigger cambie
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || []
    setProducts(storedProducts)
    setFilteredProducts(storedProducts) // Mostrar todos los productos al iniciar
  }, [updateTrigger]) // Dependencia del trigger

  // Filtrar productos cada vez que cambie la categoría activa
  useEffect(() => {
    if (activeCategory === 'todo') {
      setFilteredProducts(products) // Mostrar todos si la categoría es "todo"
    } else if (activeCategory === 'mayorPrecio') {
      setFilteredProducts([...products].sort((a, b) => b.price - a.price))
    } else if (activeCategory === 'menorPrecio') {
      setFilteredProducts([...products].sort((a, b) => a.price - b.price))
    } else {
      const filtered = products.filter(
        product => product.category.toLowerCase() === activeCategory
      )
      setFilteredProducts(filtered)
    }
  }, [activeCategory, products])

  const handlePopUpOpen = product => {
    setSelectedProduct(product) // Establece el producto seleccionado
    setPopUp(true) // Abre el PopUp
  }

  return (
    <>
      <div className="mt-24 h-[90vh] grid grid-cols-[30%_70%]">
        <Categorias setActiveCategory={setActiveCategory} />
        <div className="store bg-gray-500 p-16 flex flex-col gap-10 overflow-y-auto">
          {filteredProducts.length ? (
            filteredProducts.map(product => (
              <div
                key={product.id}
                onClick={() => handlePopUpOpen(product)} // Abre el PopUp al hacer clic
                className="p-6 bg-white hover:bg-slate-200 cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex gap-4 items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Precio:{' '}
                    <span className="font-bold text-green-500">
                      ${product.price}
                    </span>
                  </p>
                  <p className="text-gray-500">Categoría: {product.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No hay productos en esta categoría.</p>
          )}
        </div>
      </div>

      {/* Agrega el PopUp aquí */}
      {popUp && (
        <PopUp
          closePopUp={() => setPopUp(false)}
          product={selectedProduct}
          setProducts={setProducts}
        />
      )}
    </>
  )
}

export default Home
