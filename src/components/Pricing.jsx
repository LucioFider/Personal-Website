import React from "react";
import styles from "../style";
import PriceCards from "./PriceCards";

const Pricing = () => (
  <section className={`${styles.section} bg-primary relative`}>
    <div className="flex items-center justify-center">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <h2 className={`${styles.heading2}`}>
        Pricing plans for websites and applications
      </h2>
      <p className={`${styles.paragraph} w-1/2`}>
        Choose an affordable plan that's packed with the best features for
        engaging your audience, creating customer loyalty and driving sales.
      </p>
    </div>
    <PriceCards />
  </section>
);

export default Pricing;
