"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MOCK_PRODUCTS = [
  {
    id: "1",
    slug: "obsidian-hoodie",
    name: "Obsidian Heavyweight Hoodie",
    price: "$240",
    image: "/stars-variant.png",
  },
  {
    id: "2",
    slug: "crown-of-thorns-tee",
    name: "Crown of Thorns Vintage Tee",
    price: "$110",
    image: "/hero-image.png",
  },
  {
    id: "3",
    slug: "shattered-star-crewneck",
    name: "Shattered Star Crewneck",
    price: "$180",
    image: "/obsidian-stars.png",
  }
];

export default function Home() {
  // Hero section animations
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.95]);
  const heroY = useTransform(heroProgress, [0, 1], [0, 150]);

  // Story section parallax reveal
  const storyRef = useRef(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyOpacity = useTransform(storyProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const storyY = useTransform(storyProgress, [0, 1], [150, -150]);

  return (
    <main className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative h-[150vh]">
        <motion.div 
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-90 mix-blend-multiply">
            <div className="relative w-72 h-72 md:w-[32rem] md:h-[32rem]">
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
            className="font-display text-[18vw] md:text-[15vw] leading-[0.8] tracking-[-0.05em] text-black mt-auto mix-blend-difference relative z-10"
          >
            HVNLY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: [0.25, 1, 0.5, 1] }}
            className="mt-auto mb-12 flex flex-col items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-sans text-black"
          >
            <span>Scroll to explore</span>
            <div className="w-[1px] h-16 bg-black origin-top animate-[pulse_3s_ease-in-out_infinite]" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE STORY */}
      <section ref={storyRef} className="relative h-[150vh] bg-white">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-24">
          <motion.div 
            style={{ opacity: storyOpacity, y: storyY }}
            className="max-w-5xl mx-auto text-center flex flex-col items-center"
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-black">
              HVNLY exists in the silent space between sacred reverence and urban brutality.
            </h2>
            <p className="mt-16 font-sans text-[10px] uppercase tracking-[0.3em] text-black/60 leading-[2.5] max-w-xl mx-auto">
              A collision of gothic architecture and raw street culture. Every garment is an artifact. Every stitch is intentional. We build for those who find peace in the void.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. ARCHIVE PREVIEW */}
      <section className="relative z-10 bg-white py-32 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <h3 className="font-display text-6xl md:text-8xl tracking-tight text-black">The Archive</h3>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/60 mt-8 max-w-sm leading-[2]">
              Selected artifacts from the current collection.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="pb-2"
          >
            <Link href="/shop" className="text-[10px] uppercase tracking-[0.3em] font-sans text-black hover:text-black/30 transition-colors duration-500">
              View All [6]
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-32">
          {MOCK_PRODUCTS.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 120, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, delay: i * 0.15, ease: [0.19, 1, 0.22, 1] }}
              className="group relative"
            >
              <Link href={`/shop/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] mb-10 flex items-center justify-center p-8">
                  <motion.div 
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="font-display text-2xl tracking-tight text-black group-hover:text-black/60 transition-colors duration-500">
                    {product.name}
                  </h4>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/30">
                    {product.price}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="relative py-40 md:py-60 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col items-center"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/30 mb-12">
            Descent into the void
          </span>
          <Link href="/shop" className="group relative inline-block">
            <h2 className="font-display text-[12vw] leading-[0.85] tracking-[-0.02em] text-black group-hover:text-black/30 transition-colors duration-700">
              SHOP THE
              <br />
              ARCHIVE
            </h2>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
