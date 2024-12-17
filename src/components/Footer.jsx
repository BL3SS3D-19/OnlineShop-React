import { useCart } from "../hooks/useCart"




export function Footer(){

    const {cart} = useCart()
    return (
        <footer className="footer">
        {
            console.log("Código de la mira: 0;p;0;s;1;P;c;1;d;1;f;0;0l;2;0o;1;0a;0.128;0e;0.2;1b;0;A;c;1;o;1;d;1;0b;0;1b;0")
           
        }
        {  
            JSON.stringify(cart, null, 2)
        }
        </footer>
    )
}