"use client";

import Link from "next/link";
import { useCart } from "../providers/CartProvider";
import { motion } from "framer-motion";

export function Navbar() {
  const { openCart } = useCart();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-6 py-6 md:py-8 flex justify-between items-center mix-blend-difference"
    >
      <div className="flex gap-4 md:gap-8 text-[10px] uppercase tracking-[0.2em] font-sans text-white mix-blend-difference">
        <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link href="/shop" className="hover:text-white/50 transition-colors">
            Collection
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link href="/story" className="hover:text-white/50 transition-colors">
            Story
          </Link>
        </motion.div>
      </div>

      <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="absolute left-1/2 -translate-x-1/2">
        <Link href="/" className="font-display text-2xl text-white mix-blend-difference">
          HVNLY
        </Link>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={openCart}
        className="text-[10px] uppercase tracking-[0.2em] font-sans text-white hover:text-white/50 transition-colors mix-blend-difference"
      >
        Bag (0)
      </motion.button>
    </motion.header>
  );
}
