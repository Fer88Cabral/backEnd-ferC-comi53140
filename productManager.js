class PoductManager {
    #products;
    static idProducto = 0;

    constructor (){
        this.#products = [];
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        if(!title || !description || !price || !thumbnail || !code || !stock)
            return 'All parameters are required [title, description, price, thumbnail, code, stock]';
            //validar que no se repita el codigo y id autoincrementar
            const repeatedCode = this.#products.some(p=> p.code == code);
                if(repeatedCode)
                    return 'The code ${code} is already registered in another product';
                
                PoductManager.idProducto = PoductManager.idProducto + 1;
                const id = PoductManager.idProducto;
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
                    return '¡The product was added!';
    }

    getProduct () {
        //devolver todos los productos 
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
}

module.exports = PoductManager;

