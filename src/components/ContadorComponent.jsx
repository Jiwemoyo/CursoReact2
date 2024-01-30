import { useContador } from "../hooks/useContador"

export const ContadorComponent = () => {

    const {contador,resetear,aumentar,disminuir}=useContador(0)
  return (
    <>
    <h1>Contador: {contador}</h1>
    <button className="btn btn-primary" onClick={()=>aumentar(1)}>+1</button>
    <button className="btn btn-danger" onClick={()=>resetear()}>Reset</button>
    <button className="btn btn-primary" onClick={()=>disminuir(1,false)}>-1</button>
    </>
  )
}
