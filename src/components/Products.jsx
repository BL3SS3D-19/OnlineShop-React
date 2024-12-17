import './Products.css';
import { AddToCartIcon} from './Icons.jsx'
import { useCart } from '../hooks/useCart.js';
import { useProduct} from '../hooks/useProduct.js'

export const Products =  () =>  {
    const {addToCart} = useCart();
    const {filteredProducts} = useProduct();

    // Lista de IDs de productos que deseas mostrar
    const productIdsToShow = [1, 12, 6, 10, 4, 27];

    // Filtrar los productos para mostrar solo los que tienen los IDs especificados
    const productsToDisplay = filteredProducts.filter(product => 
        productIdsToShow.includes(product.id)
    );

    return (
    
    
    <main className='products'>
        <div className='productTitle'>
            <h2> Top Sellers</h2>
        </div>
        
        <ul>
            {productsToDisplay.map(product => (
                <li key={product.id}>
                    <img 
                        src ={product.thumbnail}
                        alt={product.title}
                    />
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                        <button onClick={() => 
                            addToCart(product)}
                        >
                            <AddToCartIcon/>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
        <button className="allProductsButton"> All Products </button>
        </main>
        
    )
}