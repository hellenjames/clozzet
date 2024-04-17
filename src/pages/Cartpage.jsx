import Cartspage from "../components/Cartspage.jsx"

function Cartpage({cart,setCart}){
    return(
        <div>
            <Cartspage cart={cart} setCart={setCart}/>
        </div>
    )
}
export default Cartpage