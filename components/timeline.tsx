"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "@/lib/data";
import { Link } from "@nextui-org/link";

export default function Timeline() {

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Welcome</SectionHeading>
      <VerticalTimeline animate={false} lineColor="#e5e7eb">
        {timelineData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              {/* {item.videoLink && (
                <div className="mt-2">
                  <iframe
                    src={item.videoLink}
                    title={item.title}
                    className="w-full h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )} */}
              <p className="mt-1 text-justify font-normal text-gray-700 dark:text-white/75">
                {item.description}
                {<Link showAnchorIcon href={item.details}>see more</Link>}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
