import AboutMe from "@/components/about/AboutHeader";
import AboutBasics from "@/components/about/AboutBasics";
import AboutDivider from "@/components/about/AboutDivider";

export default function AboutMePage() {
  return (
    <div className="grid grid-cols-6 w-8/12 mx-auto border border-zinc-200 dark:border-zinc-800">
      <AboutMe />
      <AboutDivider />
      <AboutBasics />
      <AboutDivider />
    </div>
  );
}
