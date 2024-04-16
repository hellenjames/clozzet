import Shopfilter from "../components/Shopfilter";
import Shopproducts from "../components/Shopproducts";
import Selects from "../components/Selects";
function Shop({cart,setCart}) {
  return (
    <div>
      <Shopfilter />
      <Shopproducts cart={cart} setCart={setCart}/>
      <Selects/>
    </div>
  );
}
export default Shop;
