import { Animation } from "./utils";

// Bubble Sort Implementation
export function bubbleSort(array: number[], animations: Animation[]) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare elements
      animations.push({ type: "compare", indices: [j, j + 1] });

      if (array[j] > array[j + 1]) {
        // Swap elements
        animations.push({
          type: "swap",
          indices: [j, j + 1],
          values: [array[j + 1], array[j]],
        });

        // Perform the actual swap
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }

    // Mark the last element in this pass as sorted
    animations.push({ type: "sorted", indices: [n - i - 1] });
  }

  // Mark the first element as sorted (it's always the smallest after all passes)
  animations.push({ type: "sorted", indices: [0] });

  return array;
}
