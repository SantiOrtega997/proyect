const sqlite = require ('sqlite3');
const producto = require ('../front/react-front/components/productos.jsx');
// Crear una conexión a una base de datos en memoria
const db = new sqlite.Database('./db/products.db');

// Operaciones con la base de datos
//const sql = 'CREATE TABLE products (id INTENGER PRIMARI KEY AUTO_INCREMENT, name, price, description)'
//db.run(sql);

//db.run('DROP TABLE products');

//const sql = 'INSERT INTO products(name, price, description) VALUES(?, ?, ?)'
//db.run(sql, ["Vainillas", 800, "vienen 8"]);


let sql = 'SELECT * FROM products';
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
        producto(row);
    })
}); 
//db.run('DROP TABLE products');