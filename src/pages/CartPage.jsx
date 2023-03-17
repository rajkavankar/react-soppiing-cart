import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Table, Row, Col, Card, Button } from "react-bootstrap"
import { FaAngleRight } from "react-icons/fa"
import CartRow from "../components/CartRow"
import { calculateTotal, calculateTotalQty } from "../features/cart/cartSlice"

const CartPage = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.products)
  const cartTotal = useSelector((state) => state.cart.total)
  const cartQty = useSelector((state) => state.cart.totalqty)

  useEffect(() => {
    document.title = "Cart page"
  }, [])

  useEffect(() => {
    dispatch(calculateTotal())
    dispatch(calculateTotalQty())
  }, [dispatch, cart])

  return cart.length > 0 ? (
    <Row className='my-4'>
      <Col lg={8}>
        <Table className='my-4'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <CartRow key={item.id} item={item} />
            ))}
          </tbody>
        </Table>
      </Col>
      <Col lg={4}>
        <Card className='rounded'>
          <Card.Body className='cart-summary px-4'>
            <h3>Generated bill</h3>
            <h4>
              <div>Items</div> <div>{cart.length}</div>
            </h4>
            <h4>
              <div>Quantity</div> <div>{cartQty}</div>
            </h4>
            <h2>
              <div>Total</div> <div>${cartTotal.toFixed(2)}</div>
            </h2>
            <div>
              <Button size='lg' className='ms-auto mt-2'>
                Pay now <FaAngleRight />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ) : (
    <div
      className='mt-5 d-flex justify-content-center align-items-center rounded'
      style={{ height: "12rem", width: "100%", backgroundColor: "#ccc" }}>
      <h4>Cart is empty</h4>
    </div>
  )
}

export default CartPage
