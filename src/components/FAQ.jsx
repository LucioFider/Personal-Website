import React from "react";
import { faqData } from "../constants";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <section>
      {faqData.map((data, index) => (
        <Accordion />
      ))}
    </section>
  );
};

export default FAQ;
