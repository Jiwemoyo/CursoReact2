import { useMemo, useState } from "react";

export const CalculosPesados = () => {
  const getCalculo =(listaNumeros)=> useMemo(() => {
    console.log(`Calculando`);
    return listaNumeros.reduce((a, b) => a * b);
  },[array]);
  const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [show, setShow] = useState(true);
  const [array, setArray] = useState(listaNumeros);

  return (
    <>
      <h1>Calculos pesados</h1>
      <p>{getCalculo(array)}</p>
      <button onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
      <button onClick={() => setArray([...array, array[array.length - 1] + 1])}>
        Agregar Numero
      </button>
    </>
  );
};
