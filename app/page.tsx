import ImageSlideShow from "@/components/slideshow";
import { Timer } from "@/components/timer";
import Timeline from "@/components/timeline";
import Marquee from "react-fast-marquee";

export default function Home() {

  const images = [
    "/gallery/slide_2.jpg",
    "/gallery/slide_3.jpg",
    "/images/cover.jpg",
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <ImageSlideShow images={images} />

      <Marquee className="py-10" gradient={false} gradientColor="white" speed={100} pauseOnHover>
        <p
          className="text-2xl font-bold text-center text-rose-600"
        >
          Registration Process is open now!
        </p>
      </Marquee>
      {/* <Timer /> */}
      <Timeline />
    </section>
  );
}
