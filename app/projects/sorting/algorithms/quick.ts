import { Animation } from "./utils";

// Quick Sort Implementation
export function quickSort(array: number[], animations: Animation[]) {
  quickSortHelper(array, 0, array.length - 1, animations);
  return array;
}

function quickSortHelper(
  array: number[],
  low: number,
  high: number,
  animations: Animation[]
) {
  if (low < high) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(array, low, high, animations);

    // Mark pivot as sorted
    animations.push({ type: "sorted", indices: [pivotIndex] });

    // Recursively sort elements before and after the pivot
    quickSortHelper(array, low, pivotIndex - 1, animations);
    quickSortHelper(array, pivotIndex + 1, high, animations);
  } else if (low === high) {
    // Single element is already sorted
    animations.push({ type: "sorted", indices: [low] });
  }
}

function partition(
  array: number[],
  low: number,
  high: number,
  animations: Animation[]
) {
  // Choose the rightmost element as the pivot
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    // Compare current element with pivot
    animations.push({ type: "compare", indices: [j, high] });

    if (array[j] <= pivot) {
      i++;

      // Swap elements
      animations.push({
        type: "swap",
        indices: [i, j],
        values: [array[j], array[i]],
      });

      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Swap the pivot element with the element at (i + 1)
  animations.push({
    type: "swap",
    indices: [i + 1, high],
    values: [array[high], array[i + 1]],
  });

  [array[i + 1], array[high]] = [array[high], array[i + 1]];

  return i + 1;
}
