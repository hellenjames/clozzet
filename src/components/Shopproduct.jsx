function Shopproduct({ img, name, price, cart, setCart }) {
  const handleAddToCart = (e, product) => {
    console.log(product)
    if (e.target.textContent.toLowerCase().trim() === "add to cart") {
      setCart((prev) => [...prev, product]);
      e.target.textContent = "Remove From Cart";
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex-col group relative bg-gray-200 w-[300px] h-[500px] flex items-center justify-center my-6 ]">
        <img src={img} />
        <button
          onClick={(e) => handleAddToCart(e, { name, img, price })}
          className="rounded-xl py-3 px-[5em] bg-emerald-300 group-hover:block hidden absolute bottom-4 w-[90%] ={"
        >
          ADD TO CART
        </button>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <p className="mt-4 text-2xl">{name}</p>
          <p className="mt-4 text-2xl">
            <span className="text-emerald-300 font-bold"> {price}</span>
          </p>
        </div>
        <div>
          <img src="src/assets/images/heart.png" width={30} />
        </div>
      </div>
    </div>
  );
}
export default Shopproduct;
