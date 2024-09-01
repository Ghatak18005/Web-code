import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-gray-700/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardTitle>{item.cardtitle}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};


export const Card = ({
  className,
  children,
  image
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg relative z-20",
        className
      )}
    >
      {/* Image Section */}
      {image && (
        <div className="h-48 w-full overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      )}
      <div className="relative z-50 p-4">
        {children}
      </div>
    </div>
  );
};





export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}
    >
      {children}
    </p>
  );
};

export const CardTitle = ({
    className,
    children
  }) => {
    return (
      <p
        className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}
      >
        {children}
      </p>
    );
  };
