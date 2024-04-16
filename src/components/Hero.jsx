import { IoSearchSharp } from "react-icons/io5";

function Hero() {
  return (
    <section>
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex-1">
          <h1 className="h text-5xl my-8">
            Choose the look that<span className="text-emerald-300"> suits</span>
            you best
          </h1>
          <p className="">
            Every day is a fashion show & the world is your runway. Clozzet will
            elevate your wardrobe with the best collections. Be exclusive, Be
            Devine, Be yourself. Explore outfits that will make you comfortably
            beautiful.True style never dies.
          </p>
          <div className="flex gap-8 mt-6">
            <button className="border rounded-full py-3 px-[4em]  bg-emerald-300 flex-column wrap text-white  gap-4">
              Shop Now
            </button>
            <button className="border rounded-full py-3 px-[4em] text-emerald-300">
              About Us
            </button>
          </div>
          <div className="flex items-center border rounded-full px-5 gap-3 mt-6">
            <IoSearchSharp size={30} />

            <input
              className="text-[1.2rem] py-3 px-5 flex-1"
              type="text"
              placeholder="Search"
            />
          </div>
          <div />
        </div>
        <div className="flex-1 flex justify-end">
          <img className="" src="src/assets/images/hero-image.png" />
          <img
            className=" z-[-1] absolute top-0 right-0 w-[30%]"
            src="src/assets/images/hero-background.png"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
