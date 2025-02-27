"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Github } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  const shuffledProjects = useMemo(() => {
    // Create a copy of PROJECTS array and shuffle it
    return [...PROJECTS].sort(() => Math.random() - 0.5);
  }, []); // Empty dependency array means this only runs once on mount

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {shuffledProjects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader className="pb-2 sm:pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {project.name}
                  </h3>
                  {project.type === "github" && (
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
