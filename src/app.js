import express from "express";
import PoductManager from "./productManager.js";

const app = express();
const PORT = 8080;

app.get('/products', (req,res) => {
    const {limit} = req.query;
    const p = new PoductManager();
    return res.json({productos: p.getProduct(limit)});
});

app.get('/products/:pid', (req,res) => {
    const { pid } = req.params;
    const p = new PoductManager();
    const producto = p.getProductById(Number(pid));
    return res.json({producto});
});

app.listen(PORT, () => {
    console.log(`Corriendo aplicacion en el puerto${PORT}`);
});
