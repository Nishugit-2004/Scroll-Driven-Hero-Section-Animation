import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const AdditionalSection = () => {
  return (
    <section className="bg-zinc-950 py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-white/50 mb-4 block">Craftsmanship</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-none italic uppercase">
            BORN ON THE <br />
            <span className="text-zinc-600">TRACK.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
            Our engineers spent over 10,000 hours perfecting the aerodynamics of the Fizz GTS. Every curve serves a purpose, every vent directs flow.
          </p>
          <button className="group relative overflow-hidden border border-white px-8 py-3 text-xs tracking-widest uppercase font-bold text-white cursor-pointer">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Discover More</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square md:aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1763933356125-69476dc6eb5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBwcm9maWxlJTIwc2lkZSUyMHZpZXd8ZW58MXx8fHwxNzcyMzUzMzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Car Detail" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
