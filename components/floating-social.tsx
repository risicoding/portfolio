"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "motion/react";

import Image from "next/image";

import { useState } from "react";

const FloatingSocial = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);

    if (latest > 0.01) setIsVisible(false);
    if (latest < scrollYProgress.getPrevious()!) setIsVisible(true);
  });
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          initial={{ x: -200 }}
          animate={{ x: "0%" }}
          exit={{ x: -200 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="fixed bottom-0 left-4 flex flex-col items-center space-y-4"
        >
          <IconRenderer
            href="https://github.com/risicoding"
            src="/icons/github.svg"
          />
          <IconRenderer
            href="https://www.x.com/risi_ksh"
            src="/icons/twitter.svg"
          />
          <IconRenderer href="" src="/icons/linkedin.svg" />
          <div className="h-28 w-[1px] bg-white" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const IconRenderer = ({ src, href }: { src: string; href: string }) => (
  <a href={href}>
    <Image src={src} width={20} height={20} alt={src} />
  </a>
);

export default FloatingSocial;
