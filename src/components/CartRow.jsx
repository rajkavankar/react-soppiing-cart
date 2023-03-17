import React from "react"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { FaTrash } from "react-icons/fa"
import {
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice"

const CartRow = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <tr>
      <td>
        <img src={item.image} alt={item.title} height={100} width={100} />
      </td>
      <td>{item.title}</td>
      <td className='d-flex juxtify-content-between align-items-center gap-2'>
        <Button
          disabled={item.quantity === 5 ? true : false}
          size='sm'
          onClick={() => dispatch(increaseQuantity(item.id))}>
          +
        </Button>
        {item.quantity}
        <Button
          size='sm'
          onClick={() => dispatch(decreaseQuantity(item.id))}
          disabled={item.quantity === 1 ? true : false}>
          -
        </Button>
      </td>
      <td>${item.price * item.quantity}</td>
      <td>
        <Button
          variant='danger'
          onClick={() => dispatch(removeProduct(item.id))}>
          <FaTrash />
        </Button>
      </td>
    </tr>
  )
}

export default CartRow
