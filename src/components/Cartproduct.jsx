import { IoIosTrash } from "react-icons/io";
import { useEffect, useState } from "react";
function Cartproduct({ img, price, name, cart }) {
  const [cartCopy, setCartCopy] = useState([]);
  useEffect(() => {
    cart && setCartCopy([...cart]);
  }, []);
  function handleCartActions(action, product) {
    if (action === "increment") {
      setCartCopy((prev) => [...prev, product]);
    } else if (action === "decrement") {
      const cartCopyItems = [...cartCopy];
      const cartItemindex = cartCopyItems.indexOf(product);
      cartCopyItems.splice(cartItemindex, 1);
      setCartCopy(cartCopyItems);
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
          <button
            onClick={() => handleCartActions("decrement", { img, price, name })}
            disabled={
              cartCopy.filter((item) => item.name === name).length === 1
            }
            className="border disabled:bg-gray-300 disabled:text-whitepy-1 px-4"
          >
            -
          </button>
          <button className="border py-1 px-4">
            {cartCopy.filter((item) => item.name === name).length}
          </button>
          <button
            onClick={() => handleCartActions("increment", { img, price, name })}
            className="border py-1 px-4"
          >
            +
          </button>
        </div>
        <div className="flex">
          <p>
            {`Ksh.${cartCopy
              .filter((item) => item.name === name)
              .reduce(
                (acc, curr) =>
                  acc + parseInt(curr.price.replace("Ksh", "").replace(",", "")),
                0
              )
              .toLocaleString()}`}
          </p>
          <IoIosTrash className="text-red-500 group-hover:block hidden " />
        </div>
      </div>
    </div>
  );
}
export default Cartproduct;
