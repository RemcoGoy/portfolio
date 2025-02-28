import { Animation } from "./utils";

// Insertion Sort Implementation
export function insertionSort(array: number[], animations: Animation[]) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    const key = array[i];
    let j = i - 1;

    // Compare with previous elements
    animations.push({ type: "compare", indices: [i, j] });

    while (j >= 0 && array[j] > key) {
      // Move element one position ahead
      animations.push({
        type: "update",
        indices: [j + 1],
        values: [array[j]],
      });

      array[j + 1] = array[j];
      j--;

      if (j >= 0) {
        animations.push({ type: "compare", indices: [i, j] });
      }
    }

    // Place the key in its correct position
    animations.push({
      type: "update",
      indices: [j + 1],
      values: [key],
    });

    array[j + 1] = key;

    // Mark element as sorted
    animations.push({ type: "sorted", indices: [j + 1] });
  }

  // Mark first element as sorted
  animations.push({ type: "sorted", indices: [0] });

  return array;
}
