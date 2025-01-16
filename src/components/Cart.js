import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

    const CartItem= useSelector((store=>store.cart.items))
    console.log(CartItem)
    const dispatch=useDispatch()
     const handleClearCard=()=>{
        dispatch(clearCart())
     }
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'> Cart</h1>
        
      <div  className=' w-6/12 m-auto'>
      <button  
      className=''
      onClick={handleClearCard}>
        clear cart
      </button>
      {CartItem.length===0?<h1>hello</h1>:"" }
<ItemList items={CartItem}/>
      </div>
    </div>
  )
}
export  default Cart 
