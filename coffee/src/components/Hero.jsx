import HeroImage from "../assets/hero-img.png";
const Hero = () => {
  return (
    <section className="bg-neutral-100 px-8 py-5 flex items-center justify-center space-x-5 max-md:flex-col max-md:space-y-6 h-screen  max-md:pt-12">
      {/* Hero Text */}
      <div className="max-md:mt-20 max-md:text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium  uppercase text-[#371409] tracking-wider font-[Pacifico] ">
          Ray’s Coffee 
        </h1>
        <h2 className="text-2xl max-md:text-xl ">
          Welcome to Our Coffee Shop
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg ">
          Discover the perfect blend of rich coffee and delightful muffins at
          Ray’s Coffee. Start your day with us!
        </p>
        <button className="mt-6 bg-[#371409] text-white px-6 py-3 rounded-lg hover:opacity-[0.9] transition duration-300 cursor-pointer max-md:text-sm ">
          Explore Our Products
        </button>

        {/* statistics */}
        <div className="flex space-x-8 mt-8 ">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#371409]">10+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#371409]">50+</h3>
            <p className="text-gray-600">Coffee Varieties</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#371409]">25+</h3>
            <p className="text-gray-600">Muffin Flavors</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div>
        <img src={HeroImage} alt="Hero Image" className="w-120 max-md:w-90  " />
      </div>
    </section>
  );
};

export default Hero;
