import { createContext, useState, useContext, useEffect } from "react";

//creamos contexto
export const ProductContext = createContext();

//Provvemos el contexto
export const ProductProvider = ({children, initialProducts}) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState([]);

// useEffect para mostrar productos filtrados al cargar

useEffect(() => {
    handleSelectedCategory(selectedCategory, initialProducts);
}, [initialProducts, selectedCategory]);

const handleSelectedCategory = (categorySlug, productsData)=>{
    if(categorySlug === "all"){
        setFilteredProducts(productsData);
    }else {
        setFilteredProducts(
            productsData.filter((product) => product.category === categorySlug)
        );
    }
}

return (
    <ProductContext.Provider
        value={{
            selectedCategory,
            filteredProducts,
            handleSelectedCategory,
            setSelectedCategory  // Prooveemos el setter para actualizar la categoria

        }}
    >
        {children}
    </ProductContext.Provider>
)
}
export const useProduct = () => {
    return useContext(ProductContext);
  };


