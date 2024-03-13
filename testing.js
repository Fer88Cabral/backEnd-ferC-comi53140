const PoductManager = require("./productManager");

const producto = new PoductManager ();

console.log(producto.addProduct('CellPhone','Iphone 15PRO MAX',2000,'img','69rpm88',100));
console.log(producto.addProduct('CellPhone','Iphone 15PRO ',15000,'img','69rpm89',99));
console.log(producto.getProduct());

//console.log(producto.getProductById(1));