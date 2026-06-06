import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  onClick?: () => void;
}

export default function Logo({ size = 36, showText = true, onClick, className = "" }: LogoProps) {
  return (
    <motion.div 
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      className={`flex items-center gap-3 group cursor-pointer ${className}`}
    >
      <div 
        style={{ width: size, height: size }}
        className="border border-black flex items-center justify-center relative bg-transparent overflow-hidden"
      >
        <motion.div 
          className="absolute w-[60%] h-[2px]"
          variants={{
            initial: { rotate: 45, width: "50%", opacity: 0.5, backgroundColor: "#0070f3" },
            hover: { rotate: 0, width: "70%", opacity: 1, backgroundColor: "#ffffff" }
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div 
          className="absolute w-[60%] h-[2px]"
          variants={{
            initial: { rotate: -45, width: "50%", opacity: 0.5, backgroundColor: "#0070f3" },
            hover: { rotate: 90, width: "70%", opacity: 1, backgroundColor: "#ffffff" }
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Shutter Effect Background */}
        <motion.div 
          className="absolute inset-0 bg-electric-blue -z-10"
          variants={{
            initial: { y: "100%" },
            hover: { y: "0%" }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      {showText && (
        <span className="text-2xl font-display font-bold tracking-tight text-black transition-colors duration-300 group-hover:text-electric-blue">xnui</span>
      )}
    </motion.div>
  );
}
