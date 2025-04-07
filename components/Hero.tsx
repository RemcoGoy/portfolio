"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Me from "@/public/me.png";
import { TITLES } from "@/lib/titles";
import Link from "next/link";
import TextRotate from "@/fancy/components/text/text-rotate";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 pb-6 lg:px-14 lg:py-24 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-4">
            <Image
              src={Me}
              alt="Me"
              className="rounded-full mb-4 p-1 filter brightness-110 bg-zinc-900 dark:bg-zinc-50 block sm:hidden"
              width={150}
              height={150}
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Remco Goyvaerts
            </h1>
            <div className="my-8 text-3xl text-gray-600 dark:text-gray-400">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <motion.p className="flex whitespace-pre" layout>
                  <motion.span
                    className="pt-0.5 sm:pt-1 md:pt-2"
                    layout
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  ></motion.span>
                  <TextRotate
                    texts={TITLES}
                    mainClassName="text-white px-2 sm:px-2 md:px-3 bg-gray-900 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg dark:bg-gray-100 dark:text-gray-900"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={5000}
                  />
                  <span className="sm:ml-2 flex items-center">Engineer</span>
                </motion.p>
              </div>
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
                className="text-black dark:text-white border-black dark:border-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="mt-8 flex gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
                onClick={() => {
                  window.open("https://github.com/RemcoGoy", "_blank");
                }}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/remco-goyvaerts/",
                    "_blank"
                  );
                }}
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
