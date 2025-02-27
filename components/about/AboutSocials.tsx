"use client";

import { firacode } from "@/lib/fonts";
import { socials } from "@/lib/socials";
import { Card, CardContent } from "@/components/ui/card";

const AboutSocials = () => {
  return (
    <div className={`${firacode.className} col-span-6 p-4`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="hover:shadow-md transition-shadow bg-zinc-100 dark:bg-zinc-800">
                <CardContent className="flex items-center gap-4 p-4">
                  <Icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {social.name}
                    </h3>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                      @{social.username}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSocials;
