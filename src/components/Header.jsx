
import {Categories} from '../mocks/categories.json'

import { useProduct } from "../hooks/useProduct.js";


export function Header(){
   const {selectedCategory, setSelectedCategory} = useProduct();
   
    const handleCategoryClicked = (category) => {
    setSelectedCategory(category.slug);
   }
return (

    <>
    <script src="../node_modules/flyonui/flyonui.js"></script>
    <nav className="navbar  fixed z-50 gap-4 w-[1920px] h-[80px] pb-7 bg-black  p-7">
     
    <div className="navbar-start items-center">
        <a className="text-white text-xl font-bold no-underline ml-15" href="#">
            Online Shop
        </a>
    </div>
    <div className="navbar-end flex items-center gap-4 ">
        <button className="btn btn-sm btn-text btn-circle size-[2.125rem] sm:hidden">
            <span className="icon-[tabler--search] size-[1.375rem]"></span>
        </button>
        <label 
            className="input-group max-w-56  flex items-center h-8 " // Cambia h-5 a h-8 para mayor altura
            style={{ backgroundColor: '#242424' }}
        >
            <span className="input-group-text flex items-center justify-center"> {/* Usar flex para centrar el icono */}
                <span className="icon-[tabler--search] text-white/80 size-5 mb-2"></span>
            </span>
            <input 
                type="search" 
                className="input grow rounded-e-full h-8 text-sm bg-[#242424] text-white placeholder-white mb-1" // Igualar altura del input al label
                placeholder="Buscar Producto.." 
            />
        </label>

        <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end] mr-20">
            <button id="dropdown-scrollable" type="button" className="dropdown-toggle flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <div className="avatar">
                    <div className="size-9.5 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
                    </div>
                </div>
            </button>
            <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-52" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-avatar">
                <li className="dropdown-header gap-3 border-0 pt-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
                        </div>
                    </div>
                    <div>
                        <h6 className="text-base-content/90 text-base font-semibold">John Doe</h6>
                        <small className="text-base-content/50">Admin</small>
                    </div>
                </li>
                <li><hr className="border-base-content/25 -mx-2 mb-3" /></li>
                <li>
                    <a className="dropdown-item" href="#">
                        <span className="icon-[tabler--user]"></span>
                        My Profile
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <span className="icon-[tabler--settings]"></span>
                        Settings
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <span className="icon-[tabler--receipt-rupee]"></span>
                        Billing
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <span className="icon-[tabler--help-triangle]"></span>
                        FAQs
                    </a>
                </li>
                <li><hr className="border-base-content/25 -mx-2 my-3" /></li>
                <li>
                    <a className="dropdown-item btn btn-text btn-error" href="#">
                        <span className="icon-[tabler--logout]"></span>
                        Sign out
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="fixed ml-80   z-50 ">
    <ul className="menu menu-horizontal flex justify-center w-full gap-1 text-base rounded-none"
     style={{ backgroundColor: '#000', color: "white" }}>
        <li className={` text-center text-xl ${selectedCategory === "all" ? "text-[#646cff] border-[#646cff]" : ''}`}>
            <a onClick={() => handleCategoryClicked({ slug: 'all' })}>
            All Products</a>
        </li>
        {Categories.map((category) => (
        <li key={category.slug}
        className={` text-center text-xl   ${selectedCategory === category.slug ? 'text-[#646cff] border-[#646cff]' : ''}`}
        >
            <a onClick={() => handleCategoryClicked(category)}>
                {category.name}
            </a>
        </li>
        ))}
    </ul>
</div>
</nav>


    </>
   

    )
}

