import React from "react";
import styles, { layout } from "../style";

const Contact = () => (
  <section
    className={`${layout.sectionReverse}bg-primary bg-hero-pattern bg-blend-color-dodge`}
  >
    <div className={layout.sectionInfo}>
      <h3 className="text-3xl text-dimWhite">Take the shot to</h3>
      <h2 className={styles.heading2}>
        Digitizing Your <br className="sm:block hidden" /> Business Growth
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, totam
        quibusdam dolorem, dicta, minus debitis praesentium sunt ut et a
        perferendis voluptatem error hic? Pariatur modi consequuntur quae.
        Necessitatibus, perspiciatis?
      </p>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Start A Conversation <br className="sm:block hidden" /> with us
      </h2>
      <div className="lg:w-full md:w-2/3 ">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-gray-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent rounded-lg border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-300 font-poppins py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label for="email" className="leading-7 text-sm text-gray-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent rounded-lg border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-300 font-poppins py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label for="message" className="leading-7 text-sm text-gray-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-transparent rounded-lg border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-300 font-poppins py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex text-primary bg-blue-gradient border-0 py-2 px-8 focus:outline-none  rounded text-lg ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
