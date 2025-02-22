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

import { firacode_bold } from "@/lib/fonts";

const Navbar = () => {
  return (
    <Card className="drop-shadow-lg grid grid-cols-3 py-4 px-4 border-0 bg-zinc-50 dark:bg-zinc-900">
      <div className={`flex items-center font-bold ${firacode_bold.className}`}>
        @RemcoGoy
      </div>

      <div className="flex items-center justify-center">
        <ul className="hidden md:flex items-center gap-12 text-card-foreground">
          <li className="text-primary font-medium">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/aboutme">About</a>
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
                <a href="/">Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/projects">Projects</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/aboutme">About</a>
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

export default Navbar;
