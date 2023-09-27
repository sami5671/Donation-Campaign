import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="background-img">
        {/* --------------------------- Here is the search  option  */}
        <div className="">
          <h2 className="text-3xl p-6 lg:text-5xl text-center font-bold">
            I Grow By Helping People In Need
          </h2>
        </div>

        <div className="text-center mt-6">
          <input
            type="text"
            placeholder="Search here"
            className="input h-[40px] lg:h-[50px] input-bordered lg:w-full max-w-xs"
          />
          <button className="bg-[#FF444A] h-[40px] py-2 px-4 lg:py-3 lg:px-8 lg:h-[50px] rounded-lg text-white font-medium">
            Search
          </button>
        </div>
        {/* --------------------------- Here End the search  option  */}
      </div>
    </>
  );
};

export default Banner;
