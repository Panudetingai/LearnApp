import IconCloud from "@/components/magicui/Pokemon";
import Image from "next/image";
import { icon, Video } from "@/lib/model/data";
import { reviews } from "@/lib/model/data";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Link from "next/link";
import { link } from "fs";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
import SparklesText from "@/components/magicui/sparkles-text";
import GradualSpacing from "@/components/magicui/gradual-spacing";

type VideoType = {
  title: string;
  url: string;
  description: string;
}

export default function Home() {
  const firstRow = reviews.slice(0, reviews.length);

  const ReviewCard = ({
    img,
    name,
    username,
    body,
    link
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
    link: string;
  }) => {
    return (
      <Link href={link} target="_blank">
        <figure
          className={cn(
            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
            // light styles
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <img className="rounded-full" width="32" height="32" alt="" src={img} />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {name}
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
          </div>
          <blockquote className="mt-2 text-sm line-clamp-2">{body}</blockquote>
        </figure>
      </Link>
    );
  };

  return (
    <div className="container">
      {/* Banner */}
      <section className="grid grid-cols-2 max-sm:grid-cols-1 justify-items-center items-center h-[550px] max-sm:h-auto my-12">
        <div className="image max-sm:hidden relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={icon} />
        </div>
        <div className="Label-Title flex flex-col gap-2">
          <GradualSpacing className="text-4xl max-sm:text-3xl font-bold" text="Learn language programs" />
          <p className="text-base w-3/4 max-sm:w-auto">This is a Pokemon app where you can explore and learn about different Pokemon creatures. Catch them all and become a Pokemon master!</p>
        </div>
      </section>

      {/* Reviews */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-5">Learn language programs</h2>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </section>

      {/* Boxtop items development */}
      <div className="w-full my-5 items-center justify-center overflow-hidden pt-8">
        <div className="flex justify-between items-center gap-12">
          <div className="max-w-[48rem]">
            <BoxReveal boxColor={"#3bfa4b"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">
                Library Top10 Developer<span className="text-[#3bfa4b]">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#3bfa4b"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                UI library for{" "}
                <span className="text-[#3bfa4b]">Design Engineers</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#3bfa4b"} duration={0.5}>
              <div className="mt-[1.5rem]">
                <p>
                  -&gt; 20+ free and open-source animated components built with
                  <span className="font-semibold text-[#3bfa4b]"> React</span>,
                  <span className="font-semibold text-[#3bfa4b]"> Typescript</span>,
                  <span className="font-semibold text-[#3bfa4b]"> Tailwind CSS</span>,
                  and
                  <span className="font-semibold text-[#3bfa4b]"> Framer Motion</span>
                  . <br />
                  -&gt; 100% open-source, and customizable. <br />
                </p>
              </div>
            </BoxReveal>

            <BoxReveal boxColor={"#3bfa4b"} duration={0.5}>
              <Link href={'https://emerline.com/blog/top-10-best-web-development-frameworks-and-libraries'} target="_blank">
                <Button className="mt-[1.6rem] bg-[#3bfa4b]">
                  Explore
                </Button>
              </Link>
            </BoxReveal>
          </div>
          <div className="rounded-full drop-shadow-md overflow-hidden w-[32rem] h-[18rem] max-sm:hidden">
            <img src="https://miro.medium.com/v2/resize:fit:720/1*FcoyKlQEGif5Xto9ZvCUgg.png"
              alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* video how to */}
      <section className="my-5">
        <SparklesText text="Programer Free Course" />
        <div className="grid grid-cols-4 items-center justify-items-center gap-3 max-sm:grid-cols-1 mt-5">
          {Video.map((video: VideoType, index: number) => (
            <figure key={index} className={cn(
              "cursor-pointer w-72 h-[315px] overflow-hidden rounded-xl border",
              // light styles
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              // dark styles
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}>
              <div className="flex flex-row items-center gap-2">
                <iframe width="560" height="315px" src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
