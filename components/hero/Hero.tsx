import React from "react";
import { BsYoutube, BsGithub, BsInstagram } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="bg-[url('../public/assets/bg.png')] bg-cover mt-[3.5rem]">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center p-[5rem_2rem]">
          <div className="text-[28px] font-bold lg:text-[32px] text-[#050505]">
            OHMOJI
          </div>
          <div className="text-[#050505]">
            A Fun And Interactive Emoji Collection Website For Sharing And
            Copying Your Favorite Emojis.
          </div>
          <div className="flex gap-[1.2rem] mt-[1rem]">
            <a
              target="_blank"
              href="https://youtube.com/@codingwithenjoy"
              className="footer_link"
              rel="noreferrer"
            >
              <BsYoutube className="text-[#4267B2]" size={24} />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/codingwithenjoy"
              className="footer_link"
              rel="noreferrer"
            >
              <BsInstagram size={24} className="text-[#E1306C] " />
            </a>
            <a
              target="_blank"
              href="https://github.com/CodingWithEnjoy"
              className="footer_link"
              rel="noreferrer"
            >
              <BsGithub size={24} className="text-[#6E5494] " />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
