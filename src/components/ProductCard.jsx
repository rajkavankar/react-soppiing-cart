import React from "react"
import { Card, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, removeProduct } from "../features/cart/cartSlice"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.products)

  return (
    <Card style={{ height: "100%" }} className='p-3'>
      <Card.Img variant='top' src={product.image} height={300} />
      <Card.Body className='d-flex flex-column justify-content-between gap-2'>
        <Card.Title>{product.title.trim().substring(0, 25)}</Card.Title>
        <Card.Title>${product.price}</Card.Title>
        <Card.Text>{product.description?.trim().substring(0, 50)}.</Card.Text>
        {cart?.some((p) => p.id === product.id) ? (
          <Button
            className='mb-auto'
            variant='danger'
            onClick={() => dispatch(removeProduct(product.id))}>
            Remove
          </Button>
        ) : (
          <Button
            className='mb-auto'
            variant='primary'
            onClick={() => dispatch(addProduct(product))}>
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProductCard
