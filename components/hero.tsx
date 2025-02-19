import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Highlighter from "react-highlight-words";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-24 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Remco Goyvaerts
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
              <Highlighter
                highlightClassName="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded"
                searchWords={["Full-Stack Developer", "UI/UX Enthusiast"]}
                autoEscape={true}
                textToHighlight="Full-Stack Developer & UI/UX Enthusiast"
              />
            </p>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Crafting elegant, responsive, and user-centric web applications.
              Transforming ideas into seamless digital experiences with clean
              code and innovative design.
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
                Get in Touch
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
        </div>
      </div>
    </div>
  );
}
