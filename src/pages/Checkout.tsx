
function Checkout({ customerCart }) {

  const customerCartGathered = []
  let totalPrice = 0

  for (let i = 0; i < customerCart.length; i++) {
    //add totalprice
    totalPrice += customerCart[i].price

    // Hitta om objektet redan finns i customerCartGathered (baserat på id)
    const existingItem = customerCartGathered.find(
      item => item.id === customerCart[i].id
    );

    if (existingItem) {
      existingItem.amount++;
    } else {
      // Klona objektet och sätt amount till 1
      const newItem = { ...customerCart[i], amount: 1 };
      customerCartGathered.push(newItem);
    }
  }


  return (
    <div>
      {customerCartGathered.map(item => (
        <p>item: {item.name} price: {item.price} amount: {item.amount}</p>
      ))}
      <p>total price: {totalPrice} kr</p>
    </div>
  )
}

export default Checkout