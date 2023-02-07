import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} relative bg-hero-pattern`}
  >
    <div className="absolute top-20 -left-14 w-96 h-96 bg-purple-300 rounded-full mix-blend-hue filter blur-xl opacity-70 animate-blob "></div>
    <div className="absolute -top-5 left-15 w-96 h-96 bg-yellow-300 rounded-full mix-blend-saturation filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div className="absolute -bottom-15 left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-luminosity filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Crafting</span> Digital{" "}
          <span className="text-white">Masterpieces</span> by
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Unleashing
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">the Power</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        of Code
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A skilled web developer who creates dynamic websites and user
        experiences with innovative design and flawless functionality.
        Harnessing the power of code to bring creative visions to life, I craft
        digital masterpieces that captivate and drive success for clients.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="hero-image"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

      {/* gradient end */}
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
