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

        <div className="text-center">
          <h1 className="text-3xl text-yellow-500 font-extrabold space-x-2">
            Contact Us
          </h1>
          <p className="text-xl font-bold text-white">
            Animesh Sharma :{" "}
            <a href="tel:+918209011873" className="hover:text-blue-600">
              +91 8209011873
            </a>
          </p>
          <p className="text-xl font-bold text-white">
            Animesh Sharma :{" "}
            <a href="tel:+918209011873" className="hover:text-blue-600">
              +91 8209011873
            </a>
          </p>
          <p></p>

          <h1 className="text-3xl text-yellow-500 font-extrabold space-x-2">
            Email Us
          </h1>
          <a
            className="text-xl font-bold text-white hover:text-blue-500"
            href="mailto:m.parteek.sandhu@s.amity.edu"
          >
            parteek.sandhu@s.amity.edu
          </a>
          {/* Icons */}
          <div>
            <FaInstagramSquare />
            <AiFillLinkedin />
          </div>
        </div>
      </div>

      <div>© 2022 The Actually Open AI Hackathon</div>
    </div>
  );
}

export default Footer;
