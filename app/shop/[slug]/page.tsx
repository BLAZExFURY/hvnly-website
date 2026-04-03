"use client";

import { useCart } from "../../providers/CartProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, use } from "react";

const SIZES = ["S", "M", "L", "XL", "XXL"];

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { openCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Mock product data based on slug
  const productName = resolvedParams.slug.replace(/-/g, " ").toUpperCase();

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
        {/* Left: Image (Hero) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative aspect-[3/4] bg-[#F9F9F9] flex items-center justify-center p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 mix-blend-multiply" />
          <Image
            src="/stars-variant.png" // using placeholder
            alt={productName}
            fill
            className="object-contain p-12 mix-blend-multiply"
          />
        </motion.div>

        {/* Right: Details & Hierarchy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col justify-center"
        >
          <div className="mb-12">
            <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-none mb-4">
              {productName}
            </h1>
            <p className="font-sans text-[10px] tracking-[0.1em] text-black/60">
              $240 USD
            </p>
          </div>

          <div className="mb-12 space-y-8 max-w-sm">
            <p className="font-sans text-[10px] tracking-[0.1em] leading-relaxed text-black/50">
              Forged in the tension between ancient brutalism and modern luxury. 
              This garment features heavyweight 500gsm organic cotton, dropped shoulders, 
              and a slight crop. Pre-washed for a vintage drape.
            </p>
            
            <ul className="font-sans text-[10px] uppercase tracking-[0.15em] text-black/40 space-y-2">
              <li>100% Organic Heavyweight Cotton</li>
              <li>Boxy, Cropped Fit</li>
              <li>Made in Portugal</li>
            </ul>
          </div>

          {/* Sizing & Actions */}
          <div className="mt-24 pt-12">
            <div className="flex justify-between items-center mb-6 font-sans text-[10px] uppercase tracking-[0.2em]">
              <span className="text-black/40">Select Size</span>
              <button className="text-black/30 hover:text-black transition-colors underline underline-offset-4">
                Size Guide
              </button>
            </div>

            <div className="flex gap-4 mb-12">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center font-sans text-[10px] tracking-[0.1em] transition-all ${
                    selectedSize === size 
                      ? "bg-black text-white" 
                      : "bg-[#F9F9F9] text-black/40 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              onClick={openCart}
              className="w-full bg-black text-white font-sans text-[10px] uppercase tracking-[0.3em] py-6 hover:bg-black/80 transition-colors"
            >
              {selectedSize ? "Add to Bag" : "Select a Size"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
