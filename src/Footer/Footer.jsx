import React from 'react';
import '../AllCss/allCSS.css'
const Footer = () => {
    return (
        <div>
           <footer class="bg-white text-center py-10 mt-10">
   
    <div class="text-2xl font-bold">
      <span class="text-blue-600">Auction</span>
      <span class="text-yellow-400">Gallery</span>
    </div>
  
 
    <div class="mt-2 mb-4 text-gray-700 font-medium space-x-4 text-sm">
      <span>Bid.</span>
      <span>Win.</span>
      <span>Own.</span>
    </div>
  

    <ul class="flex justify-center gap-6 text-sm font-medium text-gray-700 mb-4">
      <li><a href="#">Home</a></li>
      <li><a href="#">Auctions</a></li>
      <li><a href="#">Categories</a></li>
      <li><a href="#">How to works</a></li>
    </ul>
  
    
    <p class="text-xs text-gray-500 mt-4">
      © 2025 AuctionHub. All rights reserved.
    </p>
  </footer>
        </div>
    );
};

export default Footer;