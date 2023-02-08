import React from "react";
import styles from "../style";
import PriceCards from "./PriceCards";

const Pricing = () => (
  <section className={`${styles.section}`}>
    <div>
      <h2 className={`${styles.heading2}`}>
        Pricing plans for websites and applications
      </h2>
      <p className={`${styles.paragraph}`}>
        Choose an affordable plan that's packed with the best features for
        engaging your audience, creating customer loyalty and driving sales.
      </p>
      <PriceCards />
    </div>
  </section>
);

export default Pricing;
