"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Me from "@/public/me.png";
import { TITLES, TITLE_DURATION } from "@/lib/titles";
import { firacode } from "@/lib/fonts";
import Link from "next/link";

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState<string>();

  useEffect(() => {
    setCurrentTitle(TITLES[0]);

    const interval = setInterval(() => {
      setCurrentTitle(
        (current) => TITLES[(TITLES.indexOf(current!) + 1) % TITLES.length]
      );
    }, TITLE_DURATION);

    return () => clearInterval(interval);
  }, []);

  const titleContent = currentTitle ? (
    <motion.div
      key={currentTitle}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 1,
      }}
      className="inline-block drop-shadow-xl border border-gray-900 bg-gray-900 text-white px-2 py-1 rounded-md dark:border-gray-100 dark:bg-gray-100 dark:text-black"
    >
      {currentTitle}
    </motion.div>
  ) : null;

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-14 py-24 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Remco Goyvaerts
            </h1>
            <div
              className={`${firacode.className} my-8 text-3xl text-gray-600 dark:text-gray-400`}
            >
              {titleContent} Engineer
            </div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Pioneering AI-driven solutions and innovative 3D engineering.
              Transforming concepts into cutting-edge digital experiences with
              advanced technology and creative design.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
              >
                Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black dark:text-white border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="mt-8 flex gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          <div className="p-4 min-h-[400px] hidden lg:block">
            <div className="flex items-center justify-center h-full">
              <Image
                src={Me}
                alt="Me"
                className="rounded-full p-2 filter brightness-110 bg-zinc-900 dark:bg-zinc-50"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
