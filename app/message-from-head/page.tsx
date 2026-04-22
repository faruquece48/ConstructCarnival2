import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <h1 className={title({ class: "mb-5" })}>Message From Head</h1>
      <div>
        <iframe
          src="https://www.youtube.com/embed/hBKRd4PfOwc"
          title="Message from Head"
          className="w-full mb-20 h-[300px] sm:h-[370px] md:h-[420px] lg:h-[500px] xl:h-[600px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <p className="text-justify">
          <span className="text-xl">“</span>Welcome to the Department of Building Engineering & Construction Management (BECM). As a developing and over-populated country, Bangladesh often lacks importance in construction safety, proper construction management, eco-friendly infrastructures, time management of construction and professional structural guidance. In such cases, Building Engineering and Construction Management can impose as a viable option for sustainable infrastructural development by collaborating Civil Engineering aspects, Architectural design and Construction management issues. Department of Building Engineering & Construction Management has an insight of spreading vast and reliable knowledge, methods and expertise to reinforce the nation respecting green and high rises buildings with a versatile skill set in this field. This dynamic mind-set inspires the journey of this department which has started in the year of 2016 under the Faculty of Civil Engineering. This department offers the B.Sc. Engineering degree and enrolling 30 meritorious students in each year. The faculty members are hard working and trying their best to develop this department day by day. Their energetic and efficient works, lectures, and opinions help me greatly up surging this department. Here, the teachers and the students are well devoted to enhance their skills in the field of research. I hope, the graduates of this department will be prove themselves as a specialist and best project leaders in this new era of Sustainable Development.degree and enrolling 30 meritorious students in each year. The faculty members are hard working and trying their best to develop this department day by day. Their energetic and efficient works, lectures, and opinions help me greatly up surging this department. Here, the teachers and the students are well devoted to enhance their skills in the field of research. I hope, the graduates of this department will be prove themselves as a specialist and best project leaders in this new era of Sustainable Development.degree and enrolling 30 meritorious students in each year. The faculty members are hard working and trying their best to develop this department day by day. Their energetic and efficient works, lectures, and opinions help me greatly up surging this department. Here, the teachers and the students are well devoted to enhance their skills in the field of research. I hope, the graduates of this department will be prove themselves as a specialist and best project leaders in this new era of Sustainable Development.degree and enrolling 30 meritorious students in each year. The faculty members are hard working and trying their best to develop this department day by day. Their energetic and efficient works, lectures, and opinions help me greatly up surging this department. Here, the teachers and the students are well devoted to enhance their skills in the field of research. I hope, the graduates of this department will be prove themselves as a specialist and best project leaders in this new era of Sustainable Development.<span className="text-xl">”</span>
        </p>
        <br />
        <p className="text-justify">
          In closing, I wish the very best of luck to our students in their fascinating journey of learning something new every day. As always, do feel free to send us your feedback, suggestions to enrich our department. You can always find our updates on the website.
        </p>
        <br />
        <div className="text-left">
          Thank you for visiting us and have a hadivpy visiting!
          <br />
          <br />
          <span className="font-bold text-lg">
            Prof. Dr. Md. Robiul Awall
          </span>
          <br />
          <span className="font-medium">
            Head of BECM, RUET
          </span>
        </div>
      </div>
    </div>
  );
}
