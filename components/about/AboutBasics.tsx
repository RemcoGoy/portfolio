"use client";

import { firacode } from "@/lib/fonts";
import {
  User2,
  MapPin,
  Target,
  Mail,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";

const AboutBasics = () => {
  return (
    <>
      <div className={`${firacode.className} col-span-6`}>
        <div className="flex items-start gap-4 px-4 py-2">
          <User2 className="w-6 h-6 mt-1 text-zinc-700 dark:text-zinc-300" />
          <div>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Innovation Engineer @{" "}
              <a
                href="https://fireflysolutions.be"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Firefly Solutions
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-4 py-2">
          <MapPin className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
          <div>
            <p className="text-zinc-700 dark:text-zinc-300">Antwerp, Belgium</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-4 py-2">
          <Phone className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
          <div>
            <p className="text-zinc-700 dark:text-zinc-300">+32 476 69 74 37</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-4 py-2">
          <Mail className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
          <div>
            <p className="text-zinc-700 dark:text-zinc-300">
              <a
                href="mailto:remco.goy@hotmail.com"
                className="underline hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                remco.goy@hotmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-4 py-2">
          <Target className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
          <div>
            <p className="text-zinc-700 dark:text-zinc-300">
              AI-Driven Solutions & 3D Engineering
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBasics;
