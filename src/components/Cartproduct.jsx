import { IoIosTrash } from "react-icons/io";

function Cartproduct({img,price,name,cart,setCart}) {
  return (
    <div>
      <div className="  border-b border-b-[#b0b0b0]  flex gap-5 mt-5 group">
        <div className="  flex ">
          <img src={img} width={100} />
          <div className="flex flex-col">
            <p className="font-bold">{name}</p>
            <p className="text-gray-300">XL</p>
          </div>
        </div>
        <div className="flex h-10">
          <p className="border py-1 px-4">-</p>
          <p className="border py-1 px-4">1</p>
          <p className="border py-1 px-4">+</p>
        </div>
        <div className="flex">
          <p>{price}</p>
          <IoIosTrash className="text-red-500 group-hover:block hidden " />
        </div>
      </div>
    </div>
  );
}
export default Cartproduct;
