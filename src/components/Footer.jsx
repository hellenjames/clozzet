function Footer() {
  return (
    <footer className=" bg-neutral-100">
        <div className="container mx-auto">
      <div className="text-center">
        <p className="p text-5xl my-5">Subscribe & get up to 30% OFF</p>
        <input
          className="border border-green-400 rounded-full py-3 px-5  mr-8"
          type="Email"
          placeholder="Enter your email "
        />
        <button className="border rounded-full py-3 px-[4em]  bg-emerald-300 flex-column wrap text-white">
          Subscribe
        </button>
      </div>
      <div className=" flex flex-col sm:flex-row justify-between gap-32 list-none my-9 leading-8">
        <div>
          <img className=" text-center" src="src/assets/images/logo.svg" />
          <p className="w-48">
            Offering a unique and stylish perspective on fashion is our number
            one priority. Confuse your mirror by our trendy outfits.
          </p>
        </div>
        <div>
          <h2 className="font-bold">Store</h2>
          <ul>
            <li>Women’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Store Sale</li>
            <li>Collections</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Help</h2>
          <li>Customer Support</li>
          <li>Terms& Conditions</li>
          <li>Privacy Policy</li>
          <li>Track Your Order</li>
        </div>
        <div>
          <h2 className="font-bold">Contact Us</h2>
          <div className="flex">
          <img className="size-7" src="src/assets/images/email.png " />
          <li>contact@clozzet.com</li>
          </div>
          <div className="flex">
          <img className="size-7" src="src/assets/images/phone.png" />
          <li>254-700-333-333</li>
          </div>
          <li>Follow Us</li>
          <div className="flex gap-6">
            <img className="size-7" src="src/assets/images/facebook.png" />
            <img className="size-7" src="src/assets/images/instagram.png" />
            <img className="size-7" src="src/assets/images/twitter.png" />
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
export default Footer;
