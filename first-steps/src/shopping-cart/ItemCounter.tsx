import React, { useState, type CSSProperties } from "react";

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
  const myStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: 10,
  };

  const handleClick = () => {
    console.log(`Click en ${name}`);
  };

  

  return (
    <section style={myStyle}>
      <span style={{ width: 150 }}>{name}</span>
      <button onClick={handleClick}>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
};
