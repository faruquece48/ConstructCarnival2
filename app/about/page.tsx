import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <h1 className={title({ class: "mb-5" })}>About Construct Carnival</h1>
      <div className="text-lg text-justify">
        <p>
          Construct Carnival 1.0 is a nationwide festival for students studying
          Civil Engineering, Building Engineering and Construction Management,
          Urban and Regional Planning, and Architecture. It is being organized
          by the Department of Building Engineering and Construction Management
          at Rajshahi University of Engineering & Technology.
        </p>{" "}
        <p>
          The festival will feature a variety of competitions including CAD
          Expert, Render Rampage, Mechamind, Idea Contest, Poster Presentation,
          Archi Capture, Smart Management Maestro. Students from universities
          across Bangladesh can take part in these events, which will help to
          improve their skills for the future. Moreover, this festival will
          bring together students, teachers, and researchers to exchange
          knowledge in their respective fields.
        </p>
      </div>
    </div>
  );
}
