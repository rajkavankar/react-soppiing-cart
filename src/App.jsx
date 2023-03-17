import React from "react"
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import Header from "./components/Header"

const App = () => {
  return (
    <div className='bg-light' style={{ minHeight: "100vh" }}>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
