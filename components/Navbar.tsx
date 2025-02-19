import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, BoxIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import Link from "next/link";

import { firacode_bold } from "@/app/fonts";

const Navbar = () => {
  return (
    <Card className="grid grid-cols-3 bg-card py-4 px-4 border-0">
      <div className={`flex items-center font-bold ${firacode_bold.className}`}>
        @RemcoGoy
      </div>

      <div className="flex items-center justify-center">
        <ul className="hidden md:flex items-center gap-12 text-card-foreground">
          <li className="text-primary font-medium">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Projects</a>
          </li>
          <li>
            <a href="#pricing">About</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-end">
        <Button className="hidden md:block ml-2 mr-2">Contact me</Button>

        <div className="flex md:hidden mr-2 items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 rotate-0 scale-100" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a href="#home">Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#features">Projects</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#pricing">About</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="w-full text-sm">Contact me</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeToggle />
      </div>
    </Card>
  );
};

const landings = [
  {
    id: nanoid(),
    title: "Landing 01",
    route: "/project-management",
  },
  {
    id: nanoid(),
    title: "Landing 02",
    route: "/crm-landing",
  },
  {
    id: nanoid(),
    title: "Landing 03",
    route: "/ai-content-landing",
  },
  {
    id: nanoid(),
    title: "Landing 04",
    route: "/new-intro-landing",
  },
  {
    id: nanoid(),
    title: "Landing 05",
    route: "/about-us-landing",
  },
  {
    id: nanoid(),
    title: "Landing 06",
    route: "/contact-us-landing",
  },
  {
    id: nanoid(),
    title: "Landing 07",
    route: "/faqs-landing",
  },
  {
    id: nanoid(),
    title: "Landing 08",
    route: "/pricing-landing",
  },
  {
    id: nanoid(),
    title: "Landing 09",
    route: "/career-landing",
  },
];

export default Navbar;
