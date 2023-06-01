import React from "react";
import Item from "./Item";
import projects from "./data";

export default function Portfolio() {
  return (
    <>
      <section class="section sec3 portfolio" id="portfolio">
        <div class="main-title">
          <h2>
            My <span>portfolio</span>
            <span class="bg-text">my work</span>
          </h2>
        </div>
        <p class="port-text">
          Here is some of my work that showcases my skills in front-end
          technologies
        </p>
        <div class="portfolios">
          {projects.map((project) => {
            const { src, name, file } = project;
            return <Item src={src} name={name} file={file} />;
          })}
        </div>
      </section>
    </>
  );
}
