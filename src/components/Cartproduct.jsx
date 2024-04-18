import { IoIosTrash } from "react-icons/io";
import { useEffect,useState } from "react";
function Cartproduct({img,price,name,cart,}) {
  const [cartCopy,setCartCopy]=useState([])
  useEffect (()=>{
     cart && setCartCopy([...cart])
  },[])
  function handleCartActions(action,product){
    if (action==="increment"){
    setCartCopy(prev=>[...prev,product])
  }
  else if(action==="decrement"){
    
  }
}
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
          <p onClick={()=>handleCartActions()}className="border py-1 px-4">-</p>
          <p className="border py-1 px-4">{cartCopy.filter((item)=>item.name === name).length}</p>
          <p onClick={()=>handleCartActions("increment",{img,price,name})}className="border py-1 px-4" >+</p>
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
