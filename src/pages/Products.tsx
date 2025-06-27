import { useEffect, useState } from "react"

function Products({ onAddToCart }) {

  const [cupcakes, setCupcakes] = useState([])
  const [cakes, setCakes] = useState([])

  useEffect(() => {
    fetch("/JSON/cupcakes.json")
      .then((res) => res.json())
      .then((data) => setCupcakes(data))
      .catch((err) => console.error("Fel vid hämtning:", err))
  }, [])

  useEffect(() => {
    fetch("/JSON/cakes.json")
      .then((res) => res.json())
      .then((data) => setCakes(data))
      .catch((err) => console.error("Fel vid hämtning:", err))
  }, [])

  const ProductList = ({ title, items }) => {
    return (
      <div className="grid mb-10">
        <h2 className="justify-self-center text-2xl mb-3">{title}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <li key={item.id} className="relative bg-gray-200 text-white rounded overflow-hidden">
              <img src={item.image} alt={item.name} className="h-full w-auto" />

              {/* Text-overlay ovanpå bilden */}
              <div className="absolute top-0 left-0 p-2 bg-gradient-to-b from-black/70 to-transparent w-full">
                <h3 className="text-lg">{item.name}</h3>
                <p className="text-sm">Pris: {item.price} kr</p>
              </div>

              <button
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded cursor-pointer"
                onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price, image: item.image, amount: 1 })}
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>)
  };

  return (
    <div className="bg-gray-100 mx-2">
      <ProductList title="Cupcakes" items={cupcakes} />
      <ProductList title="Cakes" items={cakes} />
    </div>
  )
}

export default Products