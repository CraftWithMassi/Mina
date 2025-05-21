import { motion } from "framer-motion";

const heartPath =
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

export default function Burst({ side = "left" }) {
  // 5 petits cœurs
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-pink-500/80"
          initial={{
            x: side === "left" ? -40 : 40,
            y: 20 * i,
            scale: 0.4,
            opacity: 0,
          }}
          animate={{
            x: side === "left" ? 120 : -120,
            y: -40 - 15 * i,
            scale: 1,
            opacity: 0,
          }}
          transition={{
            duration: 1.8,
            delay: 0.1 * i,
          }}
        >
          <path d={heartPath} />
        </motion.svg>
      ))}
    </div>
  );
}
