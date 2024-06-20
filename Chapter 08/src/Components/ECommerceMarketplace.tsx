import React, { useState } from "react";
import styled from "styled-components";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  count?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sleek Modern Chair",
    description: "Ergonomic design for maximum comfort.",
    price: 129.99
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    description: "Immersive audio experience on the go.",
    price: 89.99
  },
  {
    id: 3,
    name: "Smartphone Tripod Mount",
    description: "Capture stunning shots with ease.",
    price: 24.99
  }
  // Add more products
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: calc(33.33% - 20px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const AddToCartButton = styled.button`
  background-color: #3498db;
  border: none;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
`;

const ShoppingCart = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  width: 30%;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CartItemName = styled.p`
  font-weight: bold;
`;

const CartTotal = styled.div`
  margin-top: 10px;
  text-align: right;
`;

const ECommerceMarketplace: React.FC = () => {
  // Define state using the useState hook
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Function to add products to the cart
  const addToCart = (product: Product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === existingItem.id ? { ...item, count: item?.count + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  return (
    <>
      <h1>Marketplace - useState</h1>
      <Container>
        <ProductListContainer>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <AddToCartButton onClick={() => addToCart(product)}>
                Add to Cart
              </AddToCartButton>
            </ProductCard>
          ))}
        </ProductListContainer>

        <ShoppingCart>
          <h2>Your Shopping Cart</h2>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <CartItem key={item.id}>
                  <CartItemName>{item.name}</CartItemName>
                  <p>
                    ${item.price} x {item.count}
                  </p>
                </CartItem>
              ))}
              <CartTotal>
                <p>Total: ${calculateTotal().toFixed(2)}</p>
              </CartTotal>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </ShoppingCart>
      </Container>
    </>
  );
};

export default ECommerceMarketplace;
