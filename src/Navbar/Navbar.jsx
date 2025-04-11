import React from 'react';
import '../AllCss/allCSS.css'
const Navbar = () => {
    return (
       <div>
         <div class="navbar bg-white shadow-sm px-6">
        
        <div class="flex-1">
          <a class="text-2xl font-bold">
            <span class="text-blue-600">Auction</span>
            <span class="text-yellow-400">Gallery</span>
          </a>
        </div>
      
       
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <ul class="menu menu-horizontal px-1 text-sm font-medium text-gray-700">
            <li><a>Home</a></li>
            <li><a>Auctions</a></li>
            <li><a>Categories</a></li>
            <li><a>How to works</a></li>
          </ul>
        </div>
      
        <div class="flex-none gap-4">
        
          <div>
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span class="badge badge-sm indicator-item">3</span>
              </div>
            </div>
          </div>
      
          
          <div>
            <div class="w-9 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2">
              <img src="https://img.icons8.com/color/48/user-male-circle--v1.png" />
            </div>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Navbar;