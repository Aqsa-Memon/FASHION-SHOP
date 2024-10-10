import React from 'react'

function Hero() {
  return (
    <div><main className="container mx-auto flex-grow px-4 py-8">
    <h2 className="text-4xl font-extrabold text-gray-800 text-center">Welcome to Fashion Shop</h2>
    <p className="text-gray-600 text-center mt-4">Discover the latest trends in fashion</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {/* Add products here */}
      <div className="border p-4 rounded-lg bg-white">
        <h3 className="text-xl font-semibold">Product 1</h3>
        <p className="text-gray-500">Description of product 1</p>
      </div>
    </div>
  </main>
  </div>
  )
}

export default Hero