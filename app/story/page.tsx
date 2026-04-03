"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-24 md:gap-40">
        {/* The Single Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="relative aspect-square md:aspect-[3/4] w-full md:w-1/2 bg-[#F9F9F9] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 mix-blend-multiply" />
          <Image
            src="/hero-image.png"
            alt="The Crown"
            fill
            className="object-contain p-16 mix-blend-multiply opacity-80"
          />
        </motion.div>

        {/* The One Paragraph */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="w-full md:w-1/2 max-w-lg"
        >
          <p className="font-display text-3xl md:text-5xl leading-tight tracking-tight text-black mb-12">
            HVNLY exists in the silent space between sacred reverence and urban brutality.
          </p>
          <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/40 space-y-6 leading-[2.5]">
            <p>
              We craft garments that treat negative space as a luxury commodity. Every line, every seam, and every graphic is a deliberate exercise in restraint. 
            </p>
            <p>
              This is not noise. This is architecture for the body.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
