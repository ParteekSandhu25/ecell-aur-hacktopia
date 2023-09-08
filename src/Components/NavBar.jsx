import React from "react";

function NavBar() {
  return (
    <div className="flex justify-center items-center text-white ">
      <ul className="flex gap-12 py-3">
        <li className="cursor-pointer hover:underline">Prizes</li>
        <li className="cursor-pointer hover:underline">Details</li>
        <li className="cursor-pointer hover:underline">FAQ</li>
        <li className="cursor-pointer hover:underline">Apply Now</li>
      </ul>
    </div>
  );
}

export default NavBar;
