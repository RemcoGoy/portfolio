import { Metadata } from "next";
import SortingVisualizer from "./components/SortingVisualizer";

export const metadata: Metadata = {
  title: "Sorting Visualizer | Portfolio",
  description: "Interactive visualization of various sorting algorithms",
};

export default function Sorting() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Sorting Algorithm Visualizer</h1>
      <p className="mb-8 text-muted-foreground">
        Visualize how different sorting algorithms work in real-time. Adjust the
        speed, array size, and select from different algorithms to see how they
        compare.
      </p>
      <SortingVisualizer />
    </div>
  );
}
