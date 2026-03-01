import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "./figma/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

export const ScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger if it's not already
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Create the timeline for the scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000", // Total scroll distance
          pin: true,     // Pin the section while animating
          scrub: 1,      // Smoothly tie animation to scroll
          markers: false,
        },
      });

      // Initial state - Start slightly rotated and out of view
      gsap.set(carRef.current, { 
        x: "-120%", 
        scale: 1, 
        rotateY: 10,
        opacity: 1 
      });
      gsap.set(textRef.current, { opacity: 0, y: 50 });

      // Step 1: Car drives in and slows down in the center
      tl.to(carRef.current, {
        x: "0%",
        rotateY: 0,
        scale: 1,
        duration: 2,
        ease: "power2.out",
      })
      // Step 2: Show text
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      }, "-=0.5")
      // Step 3: Zoom into the car's wheel or detail (parallax background shift)
      .to(bgRef.current, {
        scale: 1.4,
        x: -200,
        duration: 3,
        ease: "power1.inOut"
      }, "+=0.5")
      .to(carRef.current, {
        scale: 1.8,
        x: "20%",
        duration: 3,
        ease: "power1.inOut"
      }, "<")
      // Step 4: Zoom out and drive away
      .to(carRef.current, {
        x: "180%",
        scale: 1,
        opacity: 0,
        duration: 2,
        ease: "power2.in"
      }, "+=0.5")
      .to(bgRef.current, {
        scale: 1.1,
        x: 0,
        duration: 2,
        ease: "power2.in"
      }, "<");
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen bg-[#050505] overflow-hidden flex items-center justify-center [perspective:1000px]"
    >
      {/* Background with parallax-like movement */}
      <div ref={bgRef} className="absolute inset-0 z-0 scale-110">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761270143182-883c8ee26ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoaWdod2F5JTIwYXQlMjBuaWdodCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcyMzUzMzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Road Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 shadow-inner" />
      </div>

      {/* Main Text in middle of scroll section */}
      <div ref={textRef} className="relative z-20 text-center pointer-events-none px-4">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white italic tracking-tighter">
          ENGINEERED FOR <br />
          <span className="text-zinc-500">PERFORMANCE</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto uppercase tracking-widest text-sm font-medium">
          Experience the ultimate fusion of luxury and speed with the all-new Fizz GTS.
        </p>
      </div>

      {/* Car Visual */}
      <div 
        ref={carRef} 
        className="absolute bottom-[20%] left-0 right-0 w-full md:w-[80%] lg:w-[60%] mx-auto flex items-center justify-center pointer-events-none z-10"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763933356125-69476dc6eb5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBwcm9maWxlJTIwc2lkZSUyMHZpZXd8ZW58MXx8fHwxNzcyMzUzMzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Sports Car Profile"
          className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* Road line effect */}
      <div className="absolute bottom-[20%] left-0 w-full h-px bg-white/10 blur-sm z-1" />
    </section>
  );
};
