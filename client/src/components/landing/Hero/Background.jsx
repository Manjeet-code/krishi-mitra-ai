import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="hero-bg">

      {/* Grid */}

      <div className="hero-grid-bg"></div>

      {/* Top Glow */}

      <motion.div
        className="hero-glow-one"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Glow */}

      <motion.div
        className="hero-glow-two"
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
};

export default Background;