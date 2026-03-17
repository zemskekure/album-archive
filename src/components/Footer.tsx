import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useColorMode } from "@/hooks/ColorModeContext";

const Footer = () => {
  const { toggle } = useColorMode();
  const [expanded, setExpanded] = useState(false);

  return (
    <footer className="border-t border-foreground/30 mt-8 md:mt-0">
      {/* Bottom bar — always visible */}
      <div className="px-6 md:px-16 py-5 md:py-6 grid grid-cols-3 items-center font-body text-[9px] md:text-[9px] opacity-50 tracking-wide">
        <span>© 2026</span>
        <button
          onClick={() => setExpanded(!expanded)}
          className="opacity-70 hover:opacity-100 transition-opacity duration-300 font-display uppercase tracking-[0.10em] text-[7px] md:text-[8px] flex items-center gap-1 justify-self-center"
        >
          Kredity
          <svg
            width="8"
            height="8"
            viewBox="0 0 10 10"
            fill="currentColor"
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          >
            <polygon points="2,3 8,3 5,7" />
          </svg>
        </button>
        <div className="flex items-center gap-3 justify-self-end">
          <span>Slnko Records</span>
          <button
            onClick={toggle}
            className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-current opacity-80 hover:opacity-100 transition-opacity duration-500"
            aria-label="Toggle colors"
          />
        </div>
      </div>

      {/* Expandable credits */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-16 pb-8 md:pb-12 pt-2 md:pt-4">
              <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 font-body text-[11px] md:text-[10px] leading-[1.8] opacity-80">
                {/* Music */}
                <div className="text-center">
                  <p className="font-display font-bold uppercase text-[10px] md:text-[9px] tracking-[0.10em] mb-3 opacity-80">
                    Hudba
                  </p>
                  <p>Monika Omerzu Midriaková</p>
                  <p className="opacity-60 text-[8px]">hudba, texty, produkcia, spev, synths</p>
                  <p className="mt-2">Gaex <span className="opacity-60">— mix a mastering</span></p>
                  <p className="mt-2">Jakub Šindler <span className="opacity-60">— bicie</span></p>
                  <p>Lukáš Klavrza <span className="opacity-60">— gitara, basa</span></p>
                  <p>Amelie Siba <span className="opacity-60">— doprovodný spev</span></p>
                </div>

                {/* Visual */}
                <div className="text-center">
                  <p className="font-display font-bold uppercase text-[10px] md:text-[9px] tracking-[0.10em] mb-3 opacity-80">
                    Vizuál
                  </p>
                  <p>Jumping Jacks <span className="opacity-60">— koncept</span></p>
                  <p>Šimon Marek <span className="opacity-60">— grafický dizajn</span></p>
                </div>

                {/* Team */}
                <div className="text-center">
                  <p className="font-display font-bold uppercase text-[10px] md:text-[9px] tracking-[0.10em] mb-3 opacity-80">
                    Tím
                  </p>
                  <p>Zdeněk Neusar <span className="opacity-60">— PR</span></p>
                  <p>Alexander Čerevka <span className="opacity-60">— PR</span></p>
                  <p>Prokop Holoubek <span className="opacity-60">— booking</span></p>
                  <p>Alžbeta Holičková <span className="opacity-60">— booking</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
