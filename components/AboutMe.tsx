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
    <div className="grid grid-cols-6 w-8/12 mx-auto">
      <div className="col-span-6 row-span-3 lg:col-span-2 p-4">
        <Image
          src={Me}
          alt="Me"
          className="rounded-full p-2 filter brightness-110 bg-zinc-900 dark:bg-zinc-50 ml-auto"
          width={300}
          height={200}
        />
      </div>
      <div className="col-span-6 lg:col-span-4 p-24"></div>
      <div className="col-span-6 lg:col-span-4 flex items-end">
        <h2 className="text-3xl font-bold tracking-tight">
          <span className={`${roboto_condensed.className}`}>@RemcoGoy</span>
        </h2>
      </div>
      <div className="col-span-6 lg:col-span-4">
        <h4
          className={`text-xl text-zinc-900 dark:text-zinc-200 font-medium tracking-tight ${firacode.className}`}
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
    </div>
  );
};

export default AboutMe;
