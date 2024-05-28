//import { useState } from 'react'
import Productos from './components/productos.jsx'
import './App.css'

function App() {
  return (
    <>
      <h1>Stock del mercadito chino</h1>
      
      <button>Agregar Producto</button>
      <button>Modificar Producto</button>
      <button>Modificar Producto</button>

      <table>
        <tr>
          <th>Nombre del Producto</th>
          <th>Precio del Producto</th>
          <th> Descripcion del Producto</th>
        </tr>
        <tr>
          <td>Macucas</td>
          <td>909</td>
          <td>rico chocolate</td>
        </tr>
        <Productos/>
      </table>
    </>
  )
}

export default App
