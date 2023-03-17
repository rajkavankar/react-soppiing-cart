import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import ProductCard from "../components/ProductCard"
import { fetchProducts } from "../features/products/productSlice"
import { Row, Col } from "react-bootstrap"

const HomePage = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.data)

  useEffect(() => {
    dispatch(fetchProducts())
    document.title = "Home page"
  }, [dispatch])

  return (
    <div>
      <h1 className='text-center'>Store Page</h1>
      <Row>
        {products.map((product) => (
          <Col className='mb-4' key={product.id} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomePage
