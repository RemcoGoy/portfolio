"use client";

import { useState } from "react";

interface ControlsProps {
  arraySize: number;
  setArraySize: (size: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  disabled: boolean;
}

export default function Controls({
  arraySize,
  setArraySize,
  speed,
  setSpeed,
  disabled,
}: ControlsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="space-y-2">
        <div className="flex justify-between">
          <label htmlFor="array-size" className="text-sm font-medium">
            Array Size: {arraySize}
          </label>
        </div>
        <input
          id="array-size"
          type="range"
          min="10"
          max="100"
          value={arraySize}
          onChange={(e) => setArraySize(parseInt(e.target.value))}
          disabled={disabled}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <label htmlFor="speed" className="text-sm font-medium">
            Speed: {speed}%
          </label>
        </div>
        <input
          id="speed"
          type="range"
          min="1"
          max="100"
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
          disabled={disabled}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    </div>
  );
}
