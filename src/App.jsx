
import React from 'react'
import { useState } from "react";

function App() {

  
  const [InputState, setInputState] = useState({
    num1:"",
    num2:"",
  })
  const [operacion,setoperacion]=useState("")
  const[result,setresult]=useState("")
  const initialState= JSON.parse(localStorage.getItem("Operaciones"))||[];
  const [lista,setlista]=useState(initialState)
  

  const handleInputChange = (event) => {
    setInputState({
      ...InputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleLimpiar=()=>{
    const listaOpe={num1:InputState.num1,ope:operacion,num2:InputState.num2,res:result}
    const nuevoArreglo = [...lista, listaOpe]
    setlista([...nuevoArreglo]);
    localStorage.setItem("Operaciones", JSON.stringify(nuevoArreglo));
    setInputState({
      num1:"",
      num2:"",
    })
    setoperacion("")
    setresult("")
  }

  const handleSumar=()=>{
    setresult(Number(InputState.num1)+Number(InputState.num2))
    setoperacion('+')
  }

  const handleRestar=()=>{
    setresult(Number(InputState.num1)-Number(InputState.num2))
    setoperacion('-')
  }
  const handleMultiplicar=()=>{
    setresult(Number(InputState.num1)*Number(InputState.num2))
    setoperacion('*')
  }
  const handleDividir=()=>{
    setresult(Number(InputState.num1)/Number(InputState.num2))
    setoperacion('/')
  }

  const handleBorrarTodo=()=>{
    setlista([])
    localStorage.setItem("Operaciones", JSON.stringify([]));
  }


  return (
    <>
        <input id='conte' type="text" defaultValue={result}/>

      <div className='App Container'>
        <div className='row'>
        <div className='col'>
            <h3>Historial</h3>
            <div id='global'>
              <div >
              {
            lista.length===0 &&
            "Al momento no tienes notas guardadas. Puedes crear una en el formulario"
          }
          {
            lista.length !== 0 && (
              <ol>
                {lista.map((item, index)=>{
                  return(
                    <li key={index}>
                      {item.num1}{item.ope}{item.num2}={item.res}&nbsp;&nbsp;&nbsp;
                      <br />
                    </li>
                  )
                })}
              </ol>
            )
          }
              </div>
            </div>
            <br />
            <button className="btn btn-primary" type="button" onClick={handleBorrarTodo}>Borrar Historial</button>
          </div>


          <div className='col'>
            <h3>Ingresa los numeros y la operación</h3>
            <input
            name="num1"
            type="text"
            id="num1" 
            onChange={handleInputChange}
            value={InputState.num1}
            />
            <input
            name="num2"
            type="text"
            id="num2"
            onChange={handleInputChange}
            value={InputState.num2}
            />
                <div className='App Container'>
                  <div className='row'>
                  <div className='col'>
                  <button className="btn btn-primary" type="button" onClick={handleSumar}>Sumar</button>
                  <button className="btn btn-primary" type="button" onClick={handleRestar}>Restar</button>
                  </div>
                  <div className='col'>
                    <button className="btn btn-primary" type="button" onClick={handleDividir}>Dividir</button>
                  <button className="btn btn-primary" type="button" onClick={handleMultiplicar}>Multiplicar</button>
                  </div>
                  
                </div>
                
            </div>
            
          </div>
          <div className='col'>
            <br />
            <br />
            <br />
            <br />
              <button className="btn btn-primary" type="button" onClick={handleLimpiar}>Limpiar</button>
          </div>

        </div>
        

      </div>

    
    </>
  )
}

export default App