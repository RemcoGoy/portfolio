import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { firacode_bold } from "@/lib/fonts";

const Navbar = () => {
  return (
    <Card className="drop-shadow-lg grid grid-cols-3 py-4 px-4 border-0 bg-zinc-50 dark:bg-zinc-900">
      <div className={`flex items-center font-bold ${firacode_bold.className}`}>
        <Link href="/">@RemcoGoy</Link>
      </div>

      <div className="flex items-center justify-center">
        <ul className="hidden md:flex items-center gap-12 text-card-foreground">
          <li className="text-primary font-medium">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/aboutme">About</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-end">
        <Button className="hidden md:block ml-2 mr-2" asChild>
          <Link href="/#contact">Contact me</Link>
        </Button>

        <div className="flex md:hidden mr-2 items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 rotate-0 scale-100" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/projects">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/aboutme">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/#contact">Contact me</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeToggle />
      </div>
    </Card>
  );
};

export default Navbar;
