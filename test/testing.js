//const PoductManager = require("./productManager");

import PoductManager from "../productManager.js";

const producto = new PoductManager ();

//console.log(producto.addProduct('CellPhone','Iphone 15PRO MAX',2000,'img','69rpm88',100));
//console.log(producto.addProduct('CellPhone','Iphone 15PRO ',1500,'img','69rpm89',99));
//console.log(producto.addProduct('Notebook','AIRPRO',10500,'img','69NPM69',88));
console.log(producto.getProduct());

//console.log(producto.getProductById(1));
//console.log(producto.deleteProduct(3)); 