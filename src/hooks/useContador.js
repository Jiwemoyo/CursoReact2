import { useState } from "react"
export const useContador = (valorinicial = 0) => {

    const [contador, setcontador] = useState(valorinicial)

    const aumentar = (valor=1)=>{
        setcontador(contador+valor)
    }

    const resetear = ()=>{
        setcontador(0)
    }

    const disminuir = (valor=1,negativo)=>{
        if (!negativo && contador-valor < 0) {
            setcontador(0)
            return
        }
        setcontador(contador - valor)
    }

  return {
    contador,
    aumentar,
    resetear,
    disminuir
  }
}
