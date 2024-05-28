import './App.css'

function crearProducto() {
  return (
    <>
      <h1>Crear producto</h1>
      
      <form>
        <label>Nombre del producto: <input type="text" /></label><br />
        <label>Precio: <input type="number" /></label><br />
        <label>Descripcion: <input type="text" /></label><br />
      </form>
    </>
  )
}

export default crearProducto;
