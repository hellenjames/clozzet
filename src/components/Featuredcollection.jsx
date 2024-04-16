function Featuredcollection({img, name, price,cart,setCart}) {
  return (
    <div className="container mx-auto">
      <div className="flex-col group relative bg-gray-200 w-[300px] h-[500px] flex items-center justify-center my-6 ]">
        <img src={img} />
        <button className="rounded-xl py-3 px-[5em] bg-emerald-300 group-hover:block hidden absolute bottom-4 w-[90%]">ADD TO CART </button>
      </div>
      <div className="flex gap-3 items-center">
      <div>
        <p className="mt-4 text-2xl">{name}</p>
        <p className="mt-4 text-2xl">{price}</p>
      </div>

      <div>
        <img src="src/assets/images/heart.png"width={30}  />
      </div>
    </div>

    </div>
  );
}
export default Featuredcollection;
