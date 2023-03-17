import React from "react"
import { Card, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, removeProduct } from "../features/cart/cartSlice"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.products)

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src={product.image} height={300} />
      <Card.Body>
        <Card.Title>{product.title.trim().substring(0, 25)}</Card.Title>
        <Card.Title>${product.price}</Card.Title>
        <Card.Text>{product.description?.trim().substring(0, 50)}.</Card.Text>
        {cart?.some((p) => p.id === product.id) ? (
          <Button
            variant='danger'
            onClick={() => dispatch(removeProduct(product.id))}>
            Remove
          </Button>
        ) : (
          <Button
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