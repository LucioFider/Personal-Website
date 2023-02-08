import React from "react";
import styles, { layout } from "../style";
import { pro1, pro2, pro3, pro4, pro5, pro6 } from "../assets";

const Projects = () => (
  <section className={`${layout.section} grid place-items-center min-h-screen`}>
    <div className="grid gap-4 p-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4">
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
        results that exceed expectations. Browse through my portfolio to
        experience sleek user interfaces, robust functionality, and clean,
        efficient code. Get ready to be inspired and amazed by what's possible
        with the right blend of talent and technology.
      </p>
      <div className="h-16 xs:h-auto xs:square rounded-xl bg-blue-500"></div>
      <div className="h-16 xs:h-auto xs:square rounded-xl bg-pink-500"></div>
      <div className="h-16 xs:h-auto xs:square rounded-xl bg-yellow-500"></div>
      <div className="h-16 xs:h-auto xs:square rounded-xl md:col-start-2 bg-violet-500"></div>
      <div className="h-16 xs:h-auto xs:square rounded-xl bg-gray-500"></div>
      <div className="h-16 xs:h-auto xs:square rounded-xl bg-teal-500"></div>
      <div className="h-16 xs:h-auto xs:square rounded-xl bg-green-500"></div>
      <div className="h-16 xs:h-auto xs:square rounded-xl bg-sky-500"></div>
      <p
        className={`${styles.paragraph} self-center md:col-span-2 md:text-center`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt excepturi
        in sequi cumque, exercitationem doloremque eaque dolorem dignissimos
        dolorum praesentium modi facilis inventore eligendi! Quisquam molestiae
        hic itaque ipsum neque.
      </p>
    </div>
  </section>
);

export default Projects;
