"use client";

interface ArrayBarsProps {
  array: number[];
  currentIdx: number | null;
  compareIdx: number | null;
  sortedIndices: Set<number>;
}

export default function ArrayBars({
  array,
  currentIdx,
  compareIdx,
  sortedIndices,
}: ArrayBarsProps) {
  const maxValue = Math.max(...array, 1);

  return (
    <div className="flex items-end justify-center h-full w-full gap-[2px]">
      {array.map((value, idx) => {
        // Determine the color of the bar based on its state
        const isCurrentIdx = idx === currentIdx;
        const isCompareIdx = idx === compareIdx;
        const isSorted = sortedIndices.has(idx);

        let bgColor = "bg-primary/80";

        if (isSorted) {
          bgColor = "bg-green-500/80";
        } else if (isCurrentIdx) {
          bgColor = "bg-purple-500";
        } else if (isCompareIdx) {
          bgColor = "bg-yellow-500";
        }

        // Calculate height based on value relative to max
        const heightPercentage = (value / maxValue) * 100;

        return (
          <div
            key={idx}
            className={`${bgColor} rounded-t-sm transition-all duration-100 ease-in-out animate-in fade-in`}
            style={{
              height: `${heightPercentage}%`,
              width: `${100 / Math.max(array.length, 1)}%`,
              maxWidth: "20px",
            }}
          />
        );
      })}
    </div>
  );
}
