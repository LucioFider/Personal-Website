import React from "react";
import { pricingPlans } from "../constants";
import styles from "../style";

const PriceCards = () => {
  return (
    <div className="grid grid-cols-3 gap-8 py-24">
      {pricingPlans.map((plan) => (
        <div
          className=" text-black border border-[#0b7285] shadow-lg p-8  rounded-2xl relative flex flex-col"
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

          <p className="mt-4 text-gray-500 leading-6">{plan.description}</p>

          <div className="mt-4 bg-discount-gradient rounded-lg p-6 -mx-6">
            <p className="flex text-normal font-semibold text-slate-300 items-center">
              <span>{plan.currency}</span>
              <span className="ml-3 text-4xl text-slate-200">{plan.price}</span>
              <span className="ml-1.5">{plan.frequency}</span>
            </p>
          </div>
          {/* Features */}
          <ul className="mt-6 space-y-4 flex-1">
            {plan.fetaures.map((feature) => (
              <li
                key={feature}
                className="text-normal leading-6 text-slate-700 flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-cyan-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="ml-3 text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>
          {/* Call to action */}
          <a
            href="#"
            className={` mt-8  block rounded-lg py-4 text-center text-sm font-semibold leading-4  ${
              plan.mostPopular
                ? "text-gray-600 bg-blue-gradient hover:bg-cyan-600 shadow-md"
                : "text-white bg-gray-gradient hover:bg-blue-gradient"
            }`}
          >
            {plan.cta}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PriceCards;
