import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full flex justify-center items-center flex-col  text-white">
      <div className="w-10/12 flex justify-center items-center gap-40 mx-auto">
        <div>
          skljafdddddddddddddddddkkkkksdflkasdfasj \<br></br>
          flkasdjfkasdlfjasdljflkdsakds
        </div>

        <div className="text-center ">
          <h1 className="text-3xl text-yellow-500 font-extrabold space-x-2 mb-6">
            Contact Us
          </h1>
          <p className="text-xl font-semibold text-white">
            Animesh Sharma :{" "}
            <a
              href="tel:+918209011873"
              className="hover:text-blue-600  transition-all duration-300"
            >
              +91 8209011873
            </a>
          </p>
          <p className="text-xl font-semibold text-white">
            Animesh Sharma :{" "}
            <a
              href="tel:+918209011873"
              className="hover:text-blue-600  transition-all duration-300"
            >
              +91 8209011873
            </a>
          </p>
          <p></p>

          <h1 className="text-3xl text-yellow-500 font-extrabold space-x-2 mb-6 mt-10">
            Email Us
          </h1>
          <p className="hover:scale-[0.95] transition-all duration-300">
            <a
              className="text-xl font-bold text-white hover:text-blue-500 transition-all duration-300 "
              href="mailto:m.parteek.sandhu@s.amity.edu"
            >
              parteek.sandhu@s.amity.edu
            </a>
          </p>
          {/* Icons */}
          <div className="flex justify-center gap-x-10 mt-8">
            <FaInstagramSquare
              fontSize={38}
              className="cursor-pointer hover:text-blue-500 hover:scale-[0.95] transition-all duration-300 rounded-md"
            />
            <AiFillLinkedin
              fontSize={40}
              className=" cursor-pointer hover:text-blue-500 transition-all duration-300 hover:scale-[0.95]"
            />
          </div>
        </div>
      </div>

      <div className="text-gray-500 tracking-tighter">
        © Copyright 2023 IEEE SB DAIICT
      </div>
    </div>
  );
}

export default Footer;
