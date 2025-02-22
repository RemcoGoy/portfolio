"use client";

import { motion } from "motion/react";

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="my-24 w-full flex justify-center relative"
    ></motion.div>
  );
};

export default SectionDivider;
