import Cartproduct from "./Cartproduct";

function Cartspage({cart,setCart}) {
  return (
    <div className=" container mx-auto flex justify-between gap-4">
      <div className="flex-1 border  ">
        <div className="flex justify-between gap-8 font-bold border border-b-[#b0b0b0] py-4">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
        <div>
          {cart.map((item) => {
            return <Cartproduct price={item.price}
            name={item.name}
            size={item.size}
            img={item.img}/>;
          })}
        </div>
      </div>

      <div className="pl-3 border bg-gray-100 w-[25%] h-[40vh] leading-10">
        <h1 className="font-bold">Cart Summary</h1>
        <p>Have a promo code? Apply here</p>
        <div className=" flex gap-6">
          <input
            className="border-gray-300 text-gray-300"
            type="text"
            placeholder="Promo Code(optional)"
          />
          <button className="text-white bg-emerald-300 font-bold  px-4">
            Apply
          </button>
        </div>
        <div className="flex gap-5">
          <p>Subtotal</p>
          <p>KSh 16,000</p>
        </div>
        <div className="flex gap-6 border-b border-b-[#b0b0b0]">
          <p>Delivery Fee</p>
          <p>KSh 450</p>
        </div>
        <div className="font-bold flex gap-6">
          <p>Total</p>
          <p>KSh 16,450</p>
        </div>
        <button className=" rounded-xl font-bold text-white bg-emerald-300 py-2 px-[4em]">
          Checkout
        </button>
      </div>
    </div>
  );
}
export default Cartspage;
