"use client";

import { useCart } from "../providers/CartProvider";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function CartDrawer() {
  const { isOpen, closeCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="fixed inset-0 bg-white/10 z-40 cursor-pointer"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.5 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-white z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-8">
              <h2 className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/50">
                Your Bag
              </h2>
              <button
                onClick={closeCart}
                className="text-black/30 hover:text-black transition-colors"
              >
                <X strokeWidth={1} size={20} />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-8">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/30">
                Your bag is empty
              </p>
            </div>

            <div className="p-8 mt-16 pt-16">
              <div className="flex justify-between items-center mb-8 font-sans text-[10px] uppercase tracking-[0.1em]">
                <span className="text-black/50">Subtotal</span>
                <span>$0.00</span>
              </div>
              <button className="w-full bg-black text-white font-sans text-[10px] uppercase tracking-[0.2em] py-5 hover:bg-black/80 transition-colors">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
