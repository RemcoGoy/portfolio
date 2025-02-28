"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import ArrayBars from "./ArrayBars";
import Controls from "./Controls";
import AlgorithmSelector from "./AlgorithmSelector";
import { bubbleSort } from "../algorithms/bubble";
import { insertionSort } from "../algorithms/insertion";
import { mergeSort } from "../algorithms/merge";
import { quickSort } from "../algorithms/quick";

type SortingAlgorithm = "bubble" | "insertion" | "merge" | "quick";

export default function SortingVisualizer() {
  // State for the array to be sorted
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [algorithm, setAlgorithm] = useState<SortingAlgorithm>("bubble");
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);

  // Animation state
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [compareIdx, setCompareIdx] = useState<number | null>(null);
  const [sortedIndices, setSortedIndices] = useState<Set<number>>(new Set());

  // Refs for animation control
  const sortingTimeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Generate a new random array
  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 10); // Values between 10 and 510
    }
    setArray(newArray);
    setCompleted(false);
    setSortedIndices(new Set());
    setCurrentIdx(null);
    setCompareIdx(null);
  };

  // Reset all timeouts when component unmounts or when we stop sorting
  const resetTimeouts = () => {
    sortingTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    sortingTimeoutsRef.current = [];
  };

  // Initialize the array on component mount and when array size changes
  useEffect(() => {
    generateArray();
    return () => resetTimeouts();
  }, [generateArray, arraySize]);

  // Stop sorting
  const stopSorting = () => {
    resetTimeouts();
    setSorting(false);
    setCurrentIdx(null);
    setCompareIdx(null);
  };

  // Start the sorting process
  const startSorting = async () => {
    if (sorting) return;

    setSorting(true);
    setCompleted(false);
    setSortedIndices(new Set());

    resetTimeouts();

    const animations: { type: string; indices: number[]; values?: number[] }[] =
      [];
    const arrayCopy = [...array];

    // Run the selected sorting algorithm
    switch (algorithm) {
      case "bubble":
        bubbleSort(arrayCopy, animations);
        break;
      case "insertion":
        insertionSort(arrayCopy, animations);
        break;
      case "merge":
        mergeSort(arrayCopy, animations);
        break;
      case "quick":
        quickSort(arrayCopy, animations);
        break;
    }

    // Animate the sorting process
    const speedFactor = speed * 2;

    animations.forEach((animation, i) => {
      const timeout = setTimeout(() => {
        if (animation.type === "compare") {
          setCurrentIdx(animation.indices[0]);
          setCompareIdx(animation.indices[1]);
        } else if (animation.type === "swap" || animation.type === "update") {
          setArray((prevArray) => {
            const newArray = [...prevArray];
            animation.indices.forEach((idx, j) => {
              if (animation.values) {
                newArray[idx] = animation.values[j];
              }
            });
            return newArray;
          });
        } else if (animation.type === "sorted") {
          setSortedIndices((prev) => {
            const newSet = new Set(prev);
            animation.indices.forEach((idx) => newSet.add(idx));
            return newSet;
          });
        }

        // If this is the last animation, mark as completed
        if (i === animations.length - 1) {
          setCompleted(true);
          setSorting(false);
          setCurrentIdx(null);
          setCompareIdx(null);
          // Mark all indices as sorted
          setSortedIndices(
            new Set(Array.from({ length: array.length }, (_, i) => i))
          );
        }
      }, i * Math.max(5, Math.floor(2000 / speedFactor)));

      sortingTimeoutsRef.current.push(timeout);
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <AlgorithmSelector
          algorithm={algorithm}
          setAlgorithm={setAlgorithm}
          disabled={sorting}
        />
        <Controls
          arraySize={arraySize}
          setArraySize={setArraySize}
          speed={speed}
          setSpeed={setSpeed}
          disabled={sorting}
        />
      </div>

      <div className="h-[500px] mt-4 relative border border-border rounded-lg p-4 bg-card">
        <ArrayBars
          array={array}
          currentIdx={currentIdx}
          compareIdx={compareIdx}
          sortedIndices={sortedIndices}
        />
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button
          onClick={startSorting}
          disabled={sorting || completed}
          size="lg"
        >
          Start Sorting
        </Button>
        <Button
          onClick={stopSorting}
          disabled={!sorting}
          variant="outline"
          size="lg"
        >
          Stop
        </Button>
        <Button
          onClick={generateArray}
          disabled={sorting}
          variant="secondary"
          size="lg"
        >
          Generate New Array
        </Button>
      </div>
    </div>
  );
}
