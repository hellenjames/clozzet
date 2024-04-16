import { IoIosTrash } from "react-icons/io";

function Cartspage() {
  return (
    <div className=" container mx-auto flex justify-between gap-4">
      <div className="flex-1 border  ">
        <div className="flex justify-between gap-8 font-bold border border-b-[#b0b0b0] py-4">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
        <div className="  border-b border-b-[#b0b0b0]  flex gap-5 mt-5 group">
          <div className="  flex ">
            <img src="src/assets/shop-images/knitted-sweater.png" width={100} />
            <div className="flex flex-col">
              <p className="font-bold">Strip Knitted Sweater</p>
              <p className="text-gray-300">Size: XL</p>
            </div>
          </div>
          <div className="flex h-10">
            <p className="border py-1 px-4">-</p>
            <p className="border py-1 px-4">1</p>
            <p className="border py-1 px-4">+</p>
          </div>
          <div className="flex">
            <p>KSh 2250</p>
            < IoIosTrash  className="text-red-500 group-hover:block hidden " />

          </div>
        </div>

        <div className="border-b border-b-[#b0b0b0] flex gap-5 mt-5 group">
          <div className="flex ">
            <img src="src/assets/shop-images/unisex.png" width={100} />
            <div className="flex flex-col">
              <p className="font-bold">Unisex Airforce
Sneakers</p>
              <p className="text-gray-300">Size: 40</p>
            </div>
          </div>
          <div className="flex h-10">
            <p className="border py-1 px-4">-</p>
            <p className="border py-1 px-4">1</p>
            <p className="border py-1 px-4">+</p>
          </div>
          <div className="flex">
            <p>KSh 2000</p>
            <IoIosTrash  className="text-red-500 group-hover:block hidden " />

          </div>
        </div>
        <div className="border-b border-b-[#b0b0b0] flex gap-5 mt-5 group">
          <div className="flex ">
            <img src="src/assets/shop-images/slim-banquet-dress.png" width={150} />
            <div className="flex flex-col">
              <p className="font-bold">Slim Banquet
Dress</p>
              <p className="text-gray-300">Size: M</p>
            </div>
          </div>
          <div className="flex h-10">
            <p className="border py-1 px-4">-</p>
            <p className="border py-1 px-4">1</p>
            <p className="border py-1 px-4">+</p>
          </div>
          <div className="flex">
            <p>KSh 10,250</p>
            <IoIosTrash className="text-red-500 group-hover:block hidden " />

          </div>
        </div>
        <div className=" border-b border-b-[#020101] flex gap-5 mt-5 group"  >
          <div className="flex ">
            <img src="src/assets/shop-images/denim-jeans.png" width={100} />
            <div className="flex flex-col">
              <p className="font-bold">Women Denim
Jeans</p>
              <p className="text-gray-300">Size: L</p>
            </div>
          </div>
          <div className="flex h-10">
            <p className="border py-1 px-4">-</p>
            <p className="border py-1 px-4">1</p>
            <p className="border py-1 px-4">+</p>
          </div>
          <div className="flex">
            <p>KSh 10,250</p>
            <IoIosTrash className="text-red-500 group-hover:block hidden "  />

          </div>
        </div>
      </div>

      <div className="pl-3 border bg-gray-100 w-[25%] h-[40vh] leading-10">
        <h1 className="font-bold">Cart Summary</h1>
        <p>Have a promo code? Apply here</p>
        <div className=" flex gap-6">
            <input className="border-gray-300 text-gray-300" type="text" placeholder="Promo Code(optional)"/>
        <button className="text-white bg-emerald-300 font-bold  px-4">Apply</button>
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
        <button className= " rounded-xl font-bold text-white bg-emerald-300 py-2 px-[4em]">
          Checkout
        </button>
      </div>
    </div>
  );
}
export default Cartspage;
