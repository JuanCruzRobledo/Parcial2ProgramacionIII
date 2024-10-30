import React, { useState, useEffect } from 'react'
import Categorias from '../components/main/Categorias'

const Home = ({ updateTrigger }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState('todo')

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || []
    setProducts(storedProducts)
    setFilteredProducts(storedProducts)
  }, [updateTrigger]) // Escuchar cambios en updateTrigger

  useEffect(() => {
    if (activeCategory === 'todo') {
      setFilteredProducts(products)
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

  return (
    <div className="">
      <div className="mt-24 grid grid-cols-[30%_70%]">
        <Categorias setActiveCategory={setActiveCategory} />
        <div className="store bg-gray-500 p-16 flex flex-col gap-10">
          {filteredProducts.length ? (
            // Agrupar productos por categoría
            [...new Set(filteredProducts.map(product => product.category))].map(
              category => (
                <div key={category}>
                  <h2 className="text-2xl text-center font-bold text-gray-900 mb-4">
                    {category.toUpperCase()}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {filteredProducts
                      .filter(product => product.category === category)
                      .map(product => (
                        <div
                          key={product.id}
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
                            <p className="text-gray-500">
                              Categoría: {product.category}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )
          ) : (
            <p>No hay productos en esta categoría.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
