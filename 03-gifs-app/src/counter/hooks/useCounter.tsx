import { useState } from "react";

// Use Counter Custom Hook
export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(5);
  };

  return {
    // Properties
    counter,
    // Methos / Actions
    handleAdd,
    handleSubstract,
    handleReset,
  };
};
