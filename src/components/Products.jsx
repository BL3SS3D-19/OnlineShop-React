import './Products.css';
import { useProduct} from '../hooks/useProduct.js'

export const Products = () =>  {
    
    const {filteredProducts} = useProduct();
    console.log(filteredProducts)



    return (
    
    
    <main className='products'>
        <div className='productTitle'>
            <h2> Top Sellers</h2>
        </div>
        
        <ul>
            {filteredProducts.map(product => (
                <li key={product.id}>
                    <img 
                        src ={product.thumbnail}
                        alt={product.title}
                    />
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                       
                    </div>
                </li>
            ))}
        </ul>
        <button className="allProductsButton"> All Products </button>
        </main>
        
    )
}