import React, { useState, type CSSProperties } from 'react';
import './ItemCounter.css';

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  // Función para manejar el clic en el botón "+1"
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Función para manejar el clic en el botón "-1"
  const handleDecrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section className="item-row">
      <span
        className="item-text"
        style={{ color: count === 1 ? 'red' : 'black' }}
      >
        {name}
      </span>
      <button onClick={handleIncrement}>+1</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>-1</button>
    </section>
  );
};
