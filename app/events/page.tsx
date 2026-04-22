"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function App() {
  const list = [
    {
      title: "CAD Expert",
      img: "/images/cad.png",
      ruleBook: "/rulebook/cad.pdf",
      value: "cad",
    },
    {
      title: "Render Rampage",
      img: "/images/render.png",
      ruleBook: "/rulebook/render.pdf",
      value: "render",
    },
    {
      title: "Mechamind",
      img: "/images/mechamind.png",
      ruleBook: "/rulebook/mechamind.pdf",
      value: "mechamind",
    },
    {
      title: "Idea Contest",
      img: "/images/idea.png",
      ruleBook: "/rulebook/idea.pdf",
      value: "idea",
    },
    {
      title: "Poster Presentation",
      img: "/images/poster.png",
      ruleBook: "/rulebook/poster.pdf",
      value: "poster",
    },
    {
      title: "Archi Capture",
      img: "/images/archi.png",
      ruleBook: "/rulebook/ArchiCapture-Rulebook-updated.pdf",
      value: "archi",
    },
    {
      title: "Smart Management maestro",
      img: "/images/management.png",
      ruleBook: "/rulebook/management.pdf",
      value: "management",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl mb-5 font-bold text-center">Events</h1>

      <div className="max-w-5xl gap-6 sm:gap-12 md:gap-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 grid-cols-subgrid">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            className={index == 6 ? "col-start-1 sm:col-start-2" : " "}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full bg-slate-100 object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col justify-between">
              <b>{item.title}</b>
              <div className="flex flex-row w-full mt-4 gap-2 max-sm:flex-wrap justify-between">
                <Link
                  className="w-full"
                  href={item.ruleBook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button fullWidth size="sm">
                    Rulebook
                  </Button>
                </Link>
                <Link
                  className="w-full"
                  href={{
                    pathname: "/registration",
                    query: { selected: item.value },
                  }}
                >
                  <Button fullWidth size="sm">
                    Register
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
