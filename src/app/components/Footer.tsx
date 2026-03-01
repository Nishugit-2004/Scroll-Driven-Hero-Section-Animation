import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-black tracking-tighter italic">FIZZ.</h3>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
            Crafting the future of automotive luxury and performance. Every detail is a testament to our commitment to excellence.
          </p>
          <div className="flex gap-4">
            {["INSTAGRAM", "TWITTER", "YOUTUBE"].map((social) => (
              <a key={social} href="#" className="text-[10px] tracking-widest font-bold hover:text-white transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Contact</h4>
          <address className="not-italic flex flex-col gap-4 text-sm font-medium">
            <p>123 Performance Way<br />Automotive District, 90210</p>
            <a href="mailto:hello@itzfizz.com" className="hover:underline transition-all">hello@itzfizz.com</a>
            <a href="tel:+1234567890" className="hover:underline transition-all">+1 (234) 567-890</a>
          </address>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Newsletter</h4>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-b border-zinc-800 pb-2 text-sm focus:outline-none focus:border-white transition-all tracking-wider"
            />
            <button className="text-[10px] tracking-widest font-bold uppercase w-fit bg-white text-black px-6 py-2 hover:bg-zinc-200 transition-all cursor-pointer">
              Join the club
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
        <span>&copy; 2026 FIZZ MOTORSPORTS.</span>
        <span>Made with Precision.</span>
      </div>
    </footer>
  );
};
