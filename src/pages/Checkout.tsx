import { useEffect, useState } from 'react';
import Button from 'react'


function Checkout({ customerCart, setCustomerCart }) {

  const [totalPrice, setTotalPrice] = useState(0);

  //amount in shopping cart
  useEffect(() => {
    let sum = 0;
    customerCart.forEach(item => {
      sum += (item.price * item.amount)
    });
    setTotalPrice(sum)
    sum = 0
  }, [customerCart]);


  //remove single item from shopping cart
  const removeItem = (itemId) => {
    console.log('remove item')
    const customerCartNew = customerCart.map(item => {
      if (itemId === item.id) {
        return { ...item, amount: item.amount - 1 };
      }
      else {
        return item
      }
    })
    const customerCartNew2 = customerCartNew.filter(item => {
      return item.amount > 0
    })
    setCustomerCart(customerCartNew2)
  }

  //add single item from shopping cart
  const addItem = (itemId) => {
    console.log('add item')
    const customerCartNew = customerCart.map(item => {
      if (itemId === item.id) {
        return { ...item, amount: item.amount + 1 }
      }
      else {
        return item
      }
    })
    setCustomerCart(customerCartNew)
  }

  //remove all from cart
  const removeAll = (itemId) => {
    const customerCartNew = customerCart.filter(item => item.id !== itemId)
    setCustomerCart(customerCartNew)
  }


  return (
    <div className='flex flex-col p-2 justify-center'>
      <div className='h-full flex flex-col space-y-2'>
        {customerCart.map(item => (
          <div key={item.id} className='flex w-full space-x-5 justify-center '>
            <img src={item.image} alt="" className='w-1/3 rounded-sm' />
            <div className='w-1/2 space-y-1.5 pt-3'>
              <p>{item.name}</p>
              <p>{item.price} kr/st</p>
              <div className='flex space-x-2'>
                <button onClick={() => removeItem(item.id)}>-</button>
                <p>antal: {item.amount}</p>
                <button onClick={() => addItem(item.id)}>+</button>
                <button onClick={() => removeAll(item.id)}>REMOVE ALL</button>
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