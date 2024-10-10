import Image from "next/image";


const favorites = [
    { name: "Trending in Sunglasses", image: "/sunglases.png" },
    { name: "All-time Fave", image: "/hoodie.png" },
  ];
  
  export default function Favorites() {
    return (
      <section className="py-10 bg-yellow-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Young's Favourites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {favorites.map((favorite, index) => (
              <div key={index} className="bg-gray-100 p-10 rounded-lg shadow-md">
                <Image src={favorite.image} height={200} width={200}alt={favorite.name} className="w-full h-64 object-cover rounded-md" />
        
                <h3 className="mt-4 text-xl font-semibold">{favorite.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  