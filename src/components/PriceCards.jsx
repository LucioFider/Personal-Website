import React from "react";
import { pricingPlans } from "../constants";
import styles from "../style";

const PriceCards = () => {
  return (
    <div className="grid grid-cols-3 gap-8 py-24">
      {pricingPlans.map((plan) => (
        <div
          className="border text-black border-slate-200 shadow-lg p-8 bg-white rounded-2xl relative"
          key={plan.title}
        >
          <h3 className="font-poppins text-lg font-semibold leading-5 text-gradient">
            {plan.title}
          </h3>

          {plan.mostPopular && (
            <p className="absolute top-0 -translate-y-1/2 rounded-full bg-cyan-500 px-3 py-0.5 text-sm font-semibold  tracking-wide text-white shadow-md">
              Most Popular
            </p>
          )}

          <p className="mt-4 text-slate-700 leading-6">{plan.description}</p>

          <div className="mt-4 bg-slate-100 rounded-lg p-6 -mx-6">
            <p className="flex text-sm font-semibold to-slate-500 items-center">
              <span>{plan.currency}</span>
              <span className="ml-3 text-4xl text-slate-900">{plan.price}</span>
              <span className="ml-1.5">{plan.frequency}</span>
            </p>
          </div>
          {/* Features */}
          <ul className="mt-6 space-y-4">
            {plan.fetaures.map((feature) => (
              <li key={feature} className="text-sm leading-6 text-slate-700">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PriceCards;
