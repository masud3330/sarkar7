import React from 'react';
import '../AllCss/allCSS.css'
import img1 from "../assets/Banner-min.jpg"
const Banner = () => {
    return (
        <div>
           <div class="banner-section relative h-[500px] w-full">
      <img
        class="banner-img absolute  h-full w-full object-cover"
        src={img1}
        alt="banner bg"
      />
      <div
        class="banner-content absolute inset-0 flex flex-col justify-center px-10 text-white bg-black/40"
      >
        <h1 class="text-4xl md:text-5xl font-bold max-w-xl">
          Bid on Unique Items from Around the World
        </h1>
        <p class="mt-4 text-base md:text-lg max-w-xl text-gray-200">
          Discover rare collectibles, luxury goods, and vintage treasures in our
          curated auctions
        </p>
        <button
          class="mt-6 w-fit rounded-full bg-white px-6 py-2 text-black font-medium hover:bg-gray-200 transition"
        >
          Explore Auctions
        </button>
      </div>
    </div>
        </div>
    );
};

export default Banner;