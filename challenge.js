
class ProductManager {
    constructor() {
      this.products = []
    }
  
    addProduct({title, description, price, thumbnail, code, stock}) {
      
      // Validate that the "code" field is not repeated
      if (this.products.some(existingProduct => existingProduct.code === code)) {
          console.log("A product with the same code already exists")
          return
        }
      
        // Validate that all fields are required
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("All fields are required")
        return
      }
  
        // Add product
      const newProduct = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      }

      this.products.push(newProduct)
    }
  
    getProducts() {
        return this.products.length === 0 ? "No products were loaded" : this.products
    }
  
    getProductById(id) {
      const foundProduct = this.products.find(product => product.id === id)
      return foundProduct ? foundProduct : 'Product not found'
    }
  }
  
  //TESTING PROCESS
  const productManager = new ProductManager()
  
  //TEST N° 1 (Empty array)
  /* console.log(productManager.getProducts()) */
  
  //TEST N° 2 (Add product)
  // productManager.addProduct({title:'Product 1',description: 'Description 1',price: 26,thumbnail: 'thumbnail1.jpg',code: 'P001',stock: 10})
  
  //TEST N° 3 (See product)
  // console.log(productManager.getProducts())
  
  //TEST N° 4 (Same code error)
  // productManager.addProduct({title:'Product 1',description: 'Description 1',price: 26,thumbnail: 'thumbnail1.jpg',code: 'P001',stock: 10})
  // console.log(productManager.getProducts())
  
  //TEST N° 5 (error if you can't find the product or the product if you find it)
  // productManager.addProduct({title:'Product 2',description: 'Description 2',price: 56,thumbnail: 'thumbnail2.jpg',code: 'P002',stock: 8})
  // console.log(productManager.getProductById(2)) // Search and display the product by x Id
  // console.log(productManager.getProductById(10)) // If it does not exist, it returns not found
  