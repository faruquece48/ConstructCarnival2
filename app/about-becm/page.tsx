import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <h1 className={title({ class: "mb-5" })}>About BECM</h1>
      <div className="text-lg text-justify">
        <b>Building Engineering & Construction Management (BECM)</b>,
        under the <b>Faculty of Civil Engineering</b>, started journey as a new department with 30 students in 2016 at Rajshahi University of Engineering & Technology (RUET). This department functions as a center of teaching, learning and research in the field of study concerned with the technical performance of buildings, building materials, building systems and construction management.
        <br />
        <br />
        As a developing and over-populated country, Bangladesh often lacks in construction safety, proper construction management, eco-friendly infrastructures, time management of construction and professional structural guidance. A BECM graduate will be able to learn about all the things that are needed to be known by an expert building engineer, thus, he can act like a project leader in any kind of challenging project. The area is broad enough to include construction technology, material science, architecture, heat and mass transport physics and structural design. Our graduates will be able to learn: <br />
        <ul className="list-disc mx-10 my-3">
          <li >
            Project management of distinctive and specialized project;
          </li>
          <li >
            Structural Engineering for building structures;
          </li>
          <li >
            Foundation Engineering;
          </li>
          <li >
            Construction safety management;
          </li>
          <li >
            Earthquake Engineering for seismic risk;
          </li>
          <li >
            Architecture for building planning, designing and construction structures;
          </li>
          <li >
            Aesthetic and Moral development of a structure;
          </li>
          <li >
            Maintaining the building&rsquo;s Digital Management;
          </li>
          <li >
            Maximizing resource efficiency through economics;
          </li>
          <li >
            Maintaining HVAC control of a building;
          </li>
        </ul>
      </div>
    </div>
  );
}
