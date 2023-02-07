import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section
    className={`${layout.sectionReverse}bg-primary bg-hero-pattern bg-blend-color-dodge`}
  >
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      {/* Animation */}
      <div className="absolute top-20 -left-14 w-96 h-96 bg-purple-300 rounded-full mix-blend-hue filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -top-5 left-15 w-96 h-96 bg-yellow-300 rounded-full mix-blend-saturation filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-15 left-10 w-96 h-96 bg-violet-300 rounded-full mix-blend-luminosity filter blur-xl opacity-70 animate-blob"></div>

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, totam
        quibusdam dolorem, dicta, minus debitis praesentium sunt ut et a
        perferendis voluptatem error hic? Pariatur modi consequuntur quae.
        Necessitatibus, perspiciatis?
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="play_store"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
