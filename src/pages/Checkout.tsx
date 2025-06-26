import { useState } from 'react';




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

  const removeItem = (itemID) => {

  }


  return (
    <div className='flex flex-col p-2 justify-center'>
      <div className='h-full flex flex-col space-y-2'>
        {customerCartGathered.map(item => (
          <div className='flex w-full space-x-5 justify-center '>
            <img src={item.image} alt="" className='w-1/3 rounded-sm' />
            <div className='w-1/2 space-y-1.5 pt-3'>
              <p>{item.name}</p>
              <p>{item.price} kr/st</p>
              <div className='flex space-x-2'>
                <button>-</button>
                <p>antal: {item.amount}</p>
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className='pl-5 mt-5'>total price: {totalPrice} kr</p>
      <button className='flex self-center m-8 px-4 py-3 rounded-sm bg-green-500 text-amber-50'>Till kassan</button>
    </div>
  )
}

export default Checkout