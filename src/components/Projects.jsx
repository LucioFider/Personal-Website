import React from "react";
import styles, { layout } from "../style";
import { pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8 } from "../assets";

const Projects = () => (
  <section className={`${layout.section} grid place-items-center min-h-screen`}>
    <div className="grid gap-4 p-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 bg-project-pattern bg-blend-luminosity">
      <h2
        className={`${styles.heading2} xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:grid-cols-3`}
      >
        <span className="md:col-span-2">
          Bringing Ideas to Life: A Journey Through My Web Development Portfolio
        </span>
      </h2>
      <p
        className={`${styles.paragraph} xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12`}
      >
        Discover the power of innovation and creativity with my hand-crafted
        portfolio projects. As a seasoned web developer, I bring to the table a
        unique blend of technical expertise and an eye for design. Each project
        is a testament to my passion for coding and a commitment to delivering
        results that exceed expectations.
      </p>

      <img
        src={pro1}
        alt="project-1"
        className="h-16 xs:h-auto xs:square rounded-xl object-cover"
      />

      <img
        src={pro2}
        alt="project-2"
        className="h-16 xs:h-auto xs:square rounded-xl object-cover"
      />

      <img
        src={pro3}
        alt="project-3"
        className="h-16 xs:h-auto xs:square rounded-xl object-cover"
      />

      <img
        src={pro4}
        alt="project-4"
        className="h-16 xs:h-auto xs:square rounded-xl md:col-start-2 object-cover"
      />

      <img
        src={pro5}
        alt="project-5"
        className="h-16 xs:h-auto xs:square rounded-xl object-cover"
      />

      <img
        src={pro6}
        alt="project-6"
        className="h-16 xs:h-auto xs:square rounded-xl object-cover"
      />

      <img
        src={pro7}
        alt="project-7"
        className="h-16 xs:h-auto xs:square rounded-xl object-cover"
      />

      <img
        src={pro8}
        alt="project-8"
        className="h-16 xs:h-auto xs:square rounded-xl object-cover"
      />
      <p
        className={`${styles.paragraph} self-center md:col-span-2 md:text-center`}
      >
        Browse through my portfolio to experience sleek user interfaces, robust
        functionality, and clean, efficient code. Get ready to be inspired and
        amazed by what's possible with the right blend of talent and technology.
      </p>
    </div>
  </section>
);

export default Projects;
