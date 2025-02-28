import { Animation } from "./utils";

// Merge Sort Implementation
export function mergeSort(array: number[], animations: Animation[]) {
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return array;
}

function mergeSortHelper(
  mainArray: number[],
  startIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: Animation[]
) {
  if (startIdx === endIdx) return;

  const middleIdx = Math.floor((startIdx + endIdx) / 2);

  // Sort first and second halves
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);

  merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function merge(
  mainArray: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: Animation[]
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  // Merge the two sub-arrays
  while (i <= middleIdx && j <= endIdx) {
    // Compare values
    animations.push({ type: "compare", indices: [i, j] });

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // Update value
      animations.push({
        type: "update",
        indices: [k],
        values: [auxiliaryArray[i]],
      });

      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // Update value
      animations.push({
        type: "update",
        indices: [k],
        values: [auxiliaryArray[j]],
      });

      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  // Copy remaining elements
  while (i <= middleIdx) {
    animations.push({ type: "compare", indices: [i, i] });
    animations.push({
      type: "update",
      indices: [k],
      values: [auxiliaryArray[i]],
    });

    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIdx) {
    animations.push({ type: "compare", indices: [j, j] });
    animations.push({
      type: "update",
      indices: [k],
      values: [auxiliaryArray[j]],
    });

    mainArray[k++] = auxiliaryArray[j++];
  }

  // Mark the sorted range
  for (let idx = startIdx; idx <= endIdx; idx++) {
    animations.push({ type: "sorted", indices: [idx] });
  }
}
