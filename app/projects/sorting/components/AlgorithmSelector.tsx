"use client";

import React from "react";
import { Button } from "../../../../components/ui/button";

type SortingAlgorithm = "bubble" | "insertion" | "merge" | "quick";

interface AlgorithmSelectorProps {
  algorithm: SortingAlgorithm;
  setAlgorithm: (algorithm: SortingAlgorithm) => void;
  disabled: boolean;
}

export default function AlgorithmSelector({
  algorithm,
  setAlgorithm,
  disabled,
}: AlgorithmSelectorProps) {
  const algorithms = [
    { id: "bubble", label: "Bubble Sort", complexity: "O(n²)" },
    { id: "insertion", label: "Insertion Sort", complexity: "O(n²)" },
    { id: "merge", label: "Merge Sort", complexity: "O(n log n)" },
    { id: "quick", label: "Quick Sort", complexity: "O(n log n)" },
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Select Algorithm</h3>
      <div className="flex flex-wrap gap-2">
        {algorithms.map((algo) => (
          <Button
            key={algo.id}
            onClick={() => setAlgorithm(algo.id as SortingAlgorithm)}
            variant={algorithm === algo.id ? "default" : "outline"}
            size="sm"
            disabled={disabled}
            className="flex-grow sm:flex-grow-0"
          >
            <span>{algo.label}</span>
            <span className="ml-2 text-xs opacity-70">{algo.complexity}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
