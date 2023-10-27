class ProductManager {

    constructor () {
        this.products = [];
    }

    getProducts () {
        return this.products;
    }

    addProduct (product) {
        if (!product || !product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            return "Faltan datos para agregar el producto.";
        }

        if (product.code === 0) {
            product.code = Math.trunc(Math.random()*100);
        }

        if (this.products.find((p) => p.code === product.code)) {
            product.code = Math.trunc(Math.random()*100);
            console.log("El código de producto ya existe. Se agregara el producto con un codigo generado automaticamente...");
        }

        this.products.push(product);
    }    
    
    getProductById (code) {
        const searchedProduct = this.products.find((product) => product.code === code);

        if (!searchedProduct) {
            return "El producto no existe";
        } else {
            return `El producto buscado es ${searchedProduct.title}`;
        }
    }
}

class Product {
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

//Tests

const manejadorDeProductos = new ProductManager();

console.log("Agregando producto de prueba...");

manejadorDeProductos.addProduct(
    new Product("Producto prueba", "Este es un producto de prueba", 200, "Sin imagen.", 1234, 25)
);

console.log("Recuperando productos...", manejadorDeProductos.getProducts());

manejadorDeProductos.addProduct(
    new Product("Producto prueba 2", "Este es un producto de prueba, otra vez.", 220, "Sin imagen.", 123, 27)
);

console.log("Recuperando productos...", manejadorDeProductos.getProducts());

console.log("Buscando producto con el codigo: 123 ......", manejadorDeProductos.getProductById(123))
console.log("Buscando producto con el codigo: 1247 ......", manejadorDeProductos.getProductById(1247))


manejadorDeProductos.addProduct(
    new Product("Producto prueba 3", "Este es un producto de prueba... mas.", 280, "Sin imagen.", 1234, 17)
);

console.log("Recuperando productos...", manejadorDeProductos.getProducts());
