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

  return (
    <div id="productWrapper">

      <h2>Cupcakes</h2>
      <div id="cupcakeContainer">
        <ul>
          {cupcakes.map((cupcake) => (
            <li key={cupcake.id}>
              <h3>{cupcake.name}</h3>
              <p>Pris: {cupcake.price} kr</p>
              <img src={cupcake.image} alt={cupcake.name} width="150" />
              <button onClick={() => onAddToCart({ id: cupcake.id, name: cupcake.name, price: cupcake.price })}>Add to cart</button>

            </li>
          ))}
        </ul>
      </div>

      <h2>Cakes</h2>
      <div id="cakeContainer">
        <ul>
          {cakes.map(cake => (<li key={cake.id}>
            <h3>{cake.name}</h3>
            <p>Pris {cake.price} kr</p>
            <img src={cake.image} alt={cake.name} width="150" />
          </li>))}
        </ul>
      </div>

    </div>
  )
}

export default Products