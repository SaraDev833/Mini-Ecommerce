import React from "react";

const Banner = ({ title, des }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-md scroll-mt-10" id="banner">

      <img
        src="../../images/banner.jfif"
        className="w-full h-[180px] sm:h-[250px] object-cover"
        alt=""
      />

      <div className="absolute inset-0 bg-blue-600/30 flex flex-col justify-center px-4 sm:px-6 gap-2">

        <h2 className="text-xl sm:text-3xl text-white font-bold">
          {title}
        </h2>

        <p className="text-sm text-white">{des}</p>

        <button className="w-fit bg-blue-700 text-white px-3 py-2 rounded-md text-sm">
          Shop Now
        </button>

      </div>
    </div>
  );
};

export default Banner;