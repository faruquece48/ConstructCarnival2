"use client";
import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

import workshopImg from '@/public/images/Presentation1.png'
import { title } from "process";


export default function App() {
  const list = [
    {
      description: "Prof. Dr. Engr. Md. Jahangir Alam",
      subtitle: "Vice-Chancellor, RUET",
      title: "SMART City Planning-Intelligent Building Technology-AI & Robotics Applications in Building Engineering.",
      img: "/images/vcruet.png",
      ruleBook: "/rulebook/cad.pdf",
      value: "cad",
    },
    {
      description: "Md. Amirul Haque Bhuiya",
      subtitle: "DG, BWDB",
      title: "Adaptive Water Resource Management in Bangladesh.",
      img: "/images/amirul.png",
      ruleBook: "/rulebook/cad.pdf",
      value: "cad",
    },
    {
      description: "Md Ashraful Alam ",
      subtitle: "DG, HBRI",
      title:
        "Introduction to Bangladesh National Building Code (BNBC-2020) and its role towards Smart Bangladesh.",
      img: "/images/ashraful.png",
      ruleBook: "/rulebook/render.pdf",
      value: "render",
    },
    {
      description: "Dr. Md. Shafiul Islam ",
      subtitle: "Senior Research Engineer, HBRI ",
      title:
        "Presentation on Japan- Bangladesh joint research “SATREPS-TSUIB” project:  Project outcomes and its implementation.",
      img: "/images/shafiul.png",
      ruleBook: "/rulebook/mechamind.pdf",
      value: "mechamind",
    },
    {
      description: "Pintu Kanungoe",
      subtitle: "Director, River Research Institute, Faridpur",
      title:
        "Challenges and Opportunities for Sustainable River Management in Bangladesh.",
      img: "/images/pintu.png",
      ruleBook: "/rulebook/idea.pdf",
      value: "idea",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* <Image
        src={workshopImg.src}
        alt="Hero Image"
        className="w-full h-[190px] sm:h-[300px] md:h-[500px] object-cover mb-10"
      /> */}
      <div className="max-w-lg">
        <Link
          className="py-2 px-4 mb-10"
          href={{
            pathname: "/registration",
          }}
        >
          <Button color="primary">Join Workshop</Button>
        </Link>

        <h1 className="text-4xl my-5 font-bold text-center text-orange-600 ">
          Keynote Lecture
        </h1>

        <div className="max-w-5xl gap-6 sm:gap-12 md:gap-8 flex flex-col gap-5">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} className="flex flex-row">
              <CardBody className="overflow-visible p-0 w-fit">
                <Image
                  shadow="sm"
                  radius="lg"
                  alt={item.title}
                  className="bg-slate-100 object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small  text-left flex flex-col w-full items-start text-justify">
                <b className="text-orange-600">{item.title}</b>
                <b className="mt-3">{item.description}</b>

                <p>{item.subtitle}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
