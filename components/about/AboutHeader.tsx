"use client";

import Image from "next/image";
import Me from "@/public/me.png";
import { firacode, roboto_condensed } from "@/lib/fonts";
import { TITLES, TITLE_DURATION } from "@/lib/titles";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const AboutMe = () => {
  const [currentTitle, setCurrentTitle] = useState(TITLES[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(
        TITLES[(TITLES.indexOf(currentTitle) + 1) % TITLES.length]
      );
    }, TITLE_DURATION);

    return () => clearInterval(interval);
  }, [currentTitle]);

  return (
    <>
      <div className="col-span-6 row-span-3 lg:col-span-2 p-1 border-r border-zinc-200 dark:border-zinc-800">
        <Image
          src={Me}
          alt="Me"
          className="rounded-full p-1 filter brightness-110 bg-zinc-900 dark:bg-zinc-50 ml-auto"
        />
      </div>
      <div className="col-span-6 lg:col-span-4 p-24 border-b border-zinc-200 dark:border-zinc-800"></div>
      <div className="col-span-6 lg:col-span-4 px-2 flex items-end border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-3xl mb-1 font-bold tracking-tight">
          <span className={`${roboto_condensed.className}`}>@RemcoGoy</span>
        </h2>
      </div>
      <div className="col-span-6 lg:col-span-4 px-2 border-zinc-200 dark:border-zinc-800">
        <h4
          className={`text-xl mt-1 text-zinc-900 dark:text-zinc-200 font-medium tracking-tight ${firacode.className}`}
        >
          <motion.div
            key={currentTitle}
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 0.5,
            }}
            className="inline-block"
          >
            {currentTitle}
          </motion.div>{" "}
          Engineer
        </h4>
      </div>
    </>
  );
};

export default AboutMe;
