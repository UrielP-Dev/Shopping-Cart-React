import React, { useState } from 'react';
import FotterComp from './Components/FotterComp';
import HeaderComp from './Components/Navbar';
import Container from './Components/Container';
import './App.css';
import data from './Data/cursos.json';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
        const itemExists = prevCart.find((curso) => curso.id === item.id);
        if (itemExists) {
            return prevCart.map((curso) =>
                curso.id === item.id ? { ...curso, amount: curso.amount + 1 } : curso
            );
        } else {
            return [...prevCart, { ...item, amount: 1 }];
        }
    });
};

const removeCart = (id) => {
  setCart((prevCart) => {
      return prevCart.reduce((newCart, curso) => {
          if (curso.id === id) {
              if (curso.amount > 1) {
                  newCart.push({ ...curso, amount: curso.amount - 1 });
              }
          } else {
              newCart.push(curso);
          }
          return newCart;
      }, []);
  });
};


  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <header className="header">
        <HeaderComp cart={cart} removeCart={removeCart} clearCart={clearCart} />
      </header>

      <Container cursos={data} addToCart={addToCart} />

      <footer className="footer">
        <FotterComp />
      </footer>
    </div>
  );
}

export default App;
