const products = [
    { name: "Hoodie & Sweater", image: "/hoodie.png" },
    { name: "Coats & Parkas", image: "/coat.png" },
    { name: "Jeans", image: "/jeans.png" },
  ];
  
  export default function Product() {
    return (
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
                <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  