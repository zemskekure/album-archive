import { motion } from "framer-motion";
import Thumbnail from "@/components/Thumbnail";

import still01 from "@/assets/stills/still-01.jpg";
import still02 from "@/assets/stills/still-02.jpg";
import still03 from "@/assets/stills/still-03.jpg";
import still04 from "@/assets/stills/still-04.jpg";
import still05 from "@/assets/stills/still-05.jpg";
import still06 from "@/assets/stills/still-06.jpg";
import still07 from "@/assets/stills/still-07.jpg";
import still08 from "@/assets/stills/still-08.jpg";
import still09 from "@/assets/stills/still-09.jpg";
import still10 from "@/assets/stills/still-10.jpg";
import still11 from "@/assets/stills/still-11.jpg";
import still12 from "@/assets/stills/still-12.jpg";
import still13 from "@/assets/stills/still-13.jpg";
import still14 from "@/assets/stills/still-14.jpg";
import still15 from "@/assets/stills/still-15.jpg";
import still16 from "@/assets/stills/still-16.jpg";

const stills = [
  { frames: [still01, still02, still03], id: "0841" },
  { frames: [still05, still06, still04], id: "0844" },
  { frames: [still07, still08, still09], id: "0847" },
  { frames: [still10, still11, still12], id: "0850" },
  { frames: [still13, still14, still15], id: "0853" },
  { frames: [still16, still15, still14], id: "0856" },
  { frames: [still03, still06, still09], id: "0859" },
  { frames: [still12, still11, still10], id: "0862" },
  { frames: [still08, still05, still02], id: "0865" },
  { frames: [still04, still07, still01], id: "0868" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/10 flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-start p-6 md:p-8 shrink-0">
        <motion.div
          className="text-meta font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Leto s Monikou
        </motion.div>
        <motion.div
          className="flex gap-6 md:gap-8 text-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a href="#" className="hover:text-accent transition-colors duration-300">
            Počúvať
          </a>
          <a href="#" className="hover:text-accent transition-colors duration-300">
            Objednať
          </a>
        </motion.div>
      </nav>

      {/* Title */}
      <div className="px-6 md:px-8 pt-[6vh] md:pt-[10vh] pb-8 md:pb-12 shrink-0">
        <motion.h1
          className="font-serif text-xl md:text-2xl tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Leto s Monikou{" "}
          <span className="italic opacity-50">— Cítiť to všetko naraz</span>
        </motion.h1>
        <motion.p
          className="text-meta-sm text-muted-foreground opacity-40 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A / B — 2026 — Slnko Records
        </motion.p>
      </div>

      {/* Horizontal scrolling strip */}
      <div className="flex-1 flex items-center shrink-0">
        <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div className="flex gap-4 md:gap-5 px-6 md:px-8 py-4 w-max">
            {stills.map((still, i) => (
              <div key={still.id} className="w-[140px] md:w-[180px] shrink-0">
                <Thumbnail
                  frames={still.frames}
                  metadata={`IMG_${still.id}`}
                  aspectRatio="square"
                  delay={0.08 * i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tracklist */}
      <motion.div
        className="px-6 md:px-8 pt-6 pb-4 shrink-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <p className="font-serif text-sm opacity-30 leading-relaxed">
          Miesta na mape · Tiger · Ha Ha · Zastav · Lament · Odovzdaj sa mi · Asi ma máš · Zvony bijú na poplach
        </p>
      </motion.div>

      {/* Footer */}
      <footer className="p-6 md:p-8 flex justify-between text-meta-sm text-muted-foreground opacity-30 shrink-0">
        <span>© 2026 Leto s Monikou</span>
        <span>Slnko Records</span>
      </footer>
    </main>
  );
};

export default Index;
