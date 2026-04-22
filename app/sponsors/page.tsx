"use client";

import { title } from "@/components/primitives";
import { Timer } from "@/components/timer";

import { Image } from "@nextui-org/react";

import commiteeList from "@/public/images/sp-1.png";
import platinumsponsor from "@/public/sponsors/platinum_sponsors.png";
import bsrm from "@/public/sponsors/bsrm1.png";
import rainbow from "@/public/sponsors/rainbow.png";
import sevenring from "@/public/sponsors/sevenring.png";
import modern from "@/public/sponsors/modern.png";
import rupali from "@/public/sponsors/rupali.png";
import brack from "@/public/sponsors/brack1.png";
import somoy from "@/public/sponsors/somoy.png";
import innovate from "@/public/sponsors/innovate.png";
import newvision from "@/public/sponsors/newvison.png";
import { useRouter } from "next/navigation";

import { Link } from "@nextui-org/react";

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      {/* <br /> */}
      {/* <h1 className={title({ class: "mb-1 mt-5" })}>Program Schedule</h1> */}
      <Image src={commiteeList.src} alt="Organizing Committee List" />

      <div className="flex flex-col items-center">
        <h1
          className={title({
            class: "mb-1 mt-5 py-2 border-b-3 border-rose-500",
          })}
        >
          Platinum Sponsors
        </h1>
        <div className="flex flex-row">
          <Link href="https://www.tamzidgroup.com/" isExternal>
            <Image src={platinumsponsor.src} alt=" Platinum Sponsors" />
          </Link>
        </div>

        <h1
          className={title({
            class: "mb-1 mt-5 border-b-3 border-rose-500 py-2",
          })}
        >
          Gold Sponsor
        </h1>
        <div className="flex flex-row ">
          <Link href="https://www.bsrm.com/" isExternal>
            <Image src={bsrm.src} alt=" gold Sponsors" />
          </Link>
          <Link href="http://rainbow-automation.net/" isExternal>
            <Image src={rainbow.src} alt=" gold Sponsors" />
          </Link>
        </div>

        <h1
          className={title({
            class: "mb-1 mt-5 border-b-3 border-rose-500 py-2",
          })}
        >
          Associating Sponsor
        </h1>

        <div className="flex flex-row ">
          <Link href="https://sevenringscement.com/" isExternal>
            <Image src={sevenring.src} alt=" associating Sponsors" />
          </Link>
          <Link href="http://modernstructuresltd.com/" isExternal>
            <Image src={modern.src} alt=" associating Sponsors" />
          </Link>
        </div>
        <div className="flex flex-row ">
          <Link href="https://www.iecbd.org/" isExternal>
            <Image src={innovate.src} alt=" associating Sponsors" />
          </Link>
          <Link href="https://newvision-bd.com/" isExternal>
            <Image src={newvision.src} alt=" associating Sponsors" />
          </Link>
        </div>
        <h1
          className={title({
            class: "mb-1 mt-5 border-b-3 border-rose-500 py-2",
          })}
        >
          Banking Partner
        </h1>

        <div className="flex flex-row">
          <Link href="https://rupalibank.com.bd/" isExternal>
            <Image src={rupali.src} alt=" Banking Partner" className="mx-5" />
          </Link>
          <Link href="https://www.bracbank.com/en/" isExternal>
            <Image src={brack.src} alt=" Banking Sponsors" className="mx-5" />
          </Link>
        </div>

        <h1
          className={title({
            class: "mb-1 mt-5 border-b-3 border-rose-500 py-2",
          })}
        >
          Print & Media Partners
        </h1>
        <div className="flex flex-row mx-3">
          <Link href="https://www.somoynews.tv/" isExternal>
            <Image src={somoy.src} alt=" Media Partner" className="mt-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
