import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface StatItemProps {
  percentage: string;
  label: string;
  delay: number;
}

export const StatItem = ({ percentage, label, delay }: StatItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center justify-center p-6 text-white"
    >
      <span className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">{percentage}</span>
      <span className="text-sm md:text-base uppercase tracking-widest text-zinc-400 text-center">{label}</span>
    </motion.div>
  );
};

export const Hero = () => {
  const headline = "W E L C O M E I T Z F I Z Z";
  
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761270143182-883c8ee26ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoaWdod2F5JTIwYXQlMjBuaWdodCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcyMzUzMzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
      </div>

      <div className="relative z-10 text-center mb-12">
        <motion.h1 
          className="text-4xl md:text-7xl lg:text-9xl font-black text-white whitespace-pre-wrap leading-tight tracking-[0.2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {headline.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                duration: 1, 
                delay: i * 0.04,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        <StatItem percentage="98%" label="Customer Satisfaction" delay={1.5} />
        <StatItem percentage="250+" label="Cars in Stock" delay={1.7} />
        <StatItem percentage="15+" label="Global Locations" delay={1.9} />
        <StatItem percentage="0.1s" label="Shift Speed" delay={2.1} />
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll to Drive</span>
          <div className="w-[1px] h-12 bg-linear-to-b from-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
