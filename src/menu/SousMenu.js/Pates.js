import React, { useState } from 'react'
import '../Menu.css'

const PAGE_PRODUCT = 'product'
const PAGE_CART = 'cart'

function Pates() {
  const styleCard = {
    marginBottom: '20px',
  }
  const [cart, setCart] = useState([])
  const [page, setPages] = useState(PAGE_PRODUCT)
  const [products] = useState([
    {
      name: 'Cannellonis',
      image:
        'https://t4.ftcdn.net/jpg/02/02/30/11/240_F_202301168_rxWt8iG83026cLzBCEH3lQE8E9OEyZKf.jpg',
      prix: '2.5£',
    },
    {
      name: 'Lasagnes',
      image:
        'https://t4.ftcdn.net/jpg/02/44/17/79/240_F_244177956_bsZPhMt5bUrmfteRj1pfiyzCT358rQzJ.jpg',
      prix: '3.00£',
    },
    {
      name: 'Macaronis',
      image:
        'https://t4.ftcdn.net/jpg/01/77/00/49/240_F_177004930_8cIyICPHTWvUfm96sPgydCcVSi2Uhdsf.jpg',
      prix: '2.5£',
    },
  ])

  const addToCart = (product) => {
    console.log('we are in add to cart')
    setCart([...cart, { ...product }])
  }
  const navigateTo = (nextPage) => {
    setPages(nextPage)
  }

  const RemoveFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove))
  }
  const renderToProducts = () => (
    <>
      <h1>Products</h1>
      <div class="card-deck" style={styleCard}>
        <div class="card">
          <div className="products">
            {products.map((product, idx) => (
              <div class="card-body">
                <div className="product" key={idx}>
                  <h3 class="card-title">{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.prix}</h3>
                  <button onClick={() => addToCart(product)}>
                    Ajouter au panier{' '}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <h3>{product.prix}</h3>
            <button onClick={() => RemoveFromCart(product)}>Remove </button>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div>
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to cart({cart.length})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCT)}>View products</button>
      </header>
      {page === PAGE_PRODUCT && renderToProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  )
}

export default Pates
