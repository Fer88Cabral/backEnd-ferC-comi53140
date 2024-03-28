//manejo de archivos
//const fs = require ('fs'); 
import fs from 'fs';

class PoductManager {
    #products;
    #path;
    static idProducto = 0;

    constructor (){
        this.#path = './src/data/productos.json';
        this.#products = this.#leerProductosInFile();

    }

    #asignarIdProducto() {
        let id = 1;
        if(this.#products.length != 0)
        id = this.#products[this.#products.length-1].id + 1;
        return id;
    }

    #leerProductosInFile() {
        try {
            if(fs.existsSync(this.#path)) 
                return JSON.parse(fs.readFileSync(this.#path,'utf-8'));
            
            return[];
        } catch (error) {
            console.log(`ocurrio un error al leer el archivo de productos, ${error}`);
        }
    }

    #guardaArchivo(){
        try {
            fs.writeFileSync(this.#path, JSON.stringify(this.#products))
        } catch (error) {
            console.log(`ocurrio un error al guardar el archivo de productos, ${error}`);
        }
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        if(!title || !description || !price || !thumbnail || !code || !stock)
            return 'All parameters are required [title, description, price, thumbnail, code, stock]';
            //validar que no se repita el codigo y id autoincrementar
            const repeatedCode = this.#products.some(p=> p.code == code);
                if(repeatedCode)
                    return 'The code ${code} is already registered in another product';
                
                PoductManager.idProducto = PoductManager.idProducto + 1;
                const id = this.#asignarIdProducto();

                const newProduct = {
                    id,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                };
                this.#products.push(newProduct);
                this.#guardaArchivo();

                    return '¡The product was added!';
    }

    
    getProduct(limit = 0) {
        limit = Number(limit);
        if (limit > 0)
            return this.#products.slice(0, limit); 
        return this.#products;
    }

    getProductById(id) {
        // NOT FOUND
        const producto = this.#products.find(p=> p.id == id);
            if(producto)
                return producto;
            else
                return "Not found is ${id}";
    }

    updateProduct(id, objetUpdate) {
        let msg = 'El producto con id ${id} no existe';

        const index = this.#products.findIndex(p=> p.id === id);

        if(index !== -1) {
            const {id, ...rest} = objetUpdate;
            this.#products[index] = {...this.#products[index], ...rest};
            this.#guardaArchivo();
            msg = 'Producto actualizado'
        }
        return msg;
    }

    deleteProduct(id) {
        let msg = 'El porducto con ese id ${id} no existe';

        const index = this.#products.findIndex(p=> p.id === id);
        if(index !== -1) {
            this.#products = this.#products.filter(p=> p.id !== id);
            this.#guardaArchivo();
            msg = 'Producto eliminado'
        }

        return msg;
    }
}

//module.exports = PoductManager;
export default PoductManager;
