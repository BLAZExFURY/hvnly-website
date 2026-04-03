"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  },
  {
    id: "4",
    slug: "void-cargo-pants",
    name: "Void Cargo Trousers",
    price: "$290",
    image: "/hero-image.png",
  },
  {
    id: "5",
    slug: "sacred-brutalism-jacket",
    name: "Sacred Brutalism Coach Jacket",
    price: "$450",
    image: "/stars-variant.png",
  },
  {
    id: "6",
    slug: "heaven-meets-earth-cap",
    name: "Hvnly Logo Cap",
    price: "$65",
    image: "/obsidian-stars.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 1.05, filter: "blur(10px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { duration: 1.8, ease: [0.25, 1, 0.5, 1] as const } 
  },
};

export default function Shop() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-32 px-6 md:px-12 pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-40 gap-12">
        <div>
          <h1 className="font-display text-6xl tracking-tight">The Archive</h1>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 mt-6 max-w-sm leading-relaxed">
            A curated selection of garments blending gothic architecture with brutalist street culture.
          </p>
        </div>
        
        {/* Filters (Mock) */}
        <div className="flex flex-wrap gap-4 md:gap-8 font-sans text-[10px] uppercase tracking-[0.2em]">
          <button className="text-black pb-1">All</button>
          <button className="text-black/30 hover:text-black/70 transition-colors pb-1">Outerwear</button>
          <button className="text-black/30 hover:text-black/70 transition-colors pb-1">Tees</button>
          <button className="text-black/30 hover:text-black/70 transition-colors pb-1">Bottoms</button>
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32"
      >
        {MOCK_PRODUCTS.map((product) => (
          <motion.div key={product.id} variants={itemVariants} className="group relative">
            <Link href={`/shop/${product.slug}`} className="block">
              {/* Image Container */}
              <div className="relative aspect-[3/4] mb-8 bg-white overflow-hidden flex items-center justify-center p-8">
                <motion.div 
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain mix-blend-multiply"
                  />
                </motion.div>
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                  <span className="bg-white/80 backdrop-blur-md px-6 py-3 font-sans text-[10px] uppercase tracking-[0.2em]">
                    View Details
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start">
                <h3 className="font-display text-lg tracking-tight group-hover:text-black/70 transition-colors">
                  {product.name}
                </h3>
                <span className="font-sans text-[10px] tracking-[0.1em] text-black/60">
                  {product.price}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
