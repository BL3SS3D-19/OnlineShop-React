export function Banner(){

return(
    
    <>
    <script src="../node_modules/flyonui/flyonui.js"></script>

    <div className="banner relative w-full h-full aspect-[16/9] mt-10 z-10">
        <img 
        src="src\assets\BANER_barberweb.jpg"  
        className="absolute inset-0 w-full h-full object-cover"
        >  
        </img>
        <h2> Productos de Barberia</h2>
    </div>
    </>
)
}

