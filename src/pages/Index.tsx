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
    <main className="min-h-[200vh] bg-background text-foreground selection:bg-accent/10 relative">
      {/* Top-left: artist */}
      <motion.div
        className="fixed top-0 left-0 p-6 md:p-10 text-meta font-medium z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        Leto s Monikou
      </motion.div>

      {/* Top-right: nav */}
      <motion.div
        className="fixed top-0 right-0 p-6 md:p-10 flex gap-8 text-meta z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <a href="#" className="hover:text-accent transition-colors duration-500">
          Počúvať
        </a>
        <a href="#" className="hover:text-accent transition-colors duration-500">
          Objednať
        </a>
      </motion.div>

      {/* Title — large serif, positioned asymmetrically in upper area */}
      <motion.div
        className="absolute left-6 md:left-10 top-[22vh] md:top-[28vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <h1 className="font-serif text-2xl md:text-[2rem] leading-tight tracking-tight">
          Cítiť to všetko naraz
        </h1>
      </motion.div>

      {/* Subtitle / date — far right */}
      <motion.p
        className="absolute right-6 md:right-10 top-[24vh] md:top-[30vh] text-meta-sm text-muted-foreground opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        2026
      </motion.p>

      {/* Image strip — horizontal scroll, positioned in the middle-lower zone */}
      <div className="absolute left-0 right-0 top-[48vh] md:top-[52vh]">
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div className="flex items-start gap-6 md:gap-10 px-6 md:px-10 w-max">
            {stills.map((still, i) => (
              <motion.div
                key={still.id}
                className="w-[110px] md:w-[140px] shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6 + i * 0.08 }}
              >
                <Thumbnail
                  frames={still.frames}
                  metadata={`IMG_${still.id}`}
                  aspectRatio="square"
                  delay={0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tracklist — bottom left, very quiet */}
      <motion.div
        className="absolute left-6 md:left-10 bottom-[18vh] md:bottom-[22vh] max-w-[280px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <p className="text-meta-sm text-muted-foreground opacity-30 leading-[2]">
          Miesta na mape<br />
          Tiger<br />
          Ha Ha<br />
          Zastav<br />
          Lament<br />
          Odovzdaj sa mi<br />
          Asi ma máš<br />
          Zvony bijú na poplach
        </p>
      </motion.div>

      {/* Side A / B marker — bottom right */}
      <motion.div
        className="absolute right-6 md:right-10 bottom-[22vh] md:bottom-[26vh] text-meta-sm text-muted-foreground opacity-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      >
        A / B
      </motion.div>

      {/* Footer — pinned to absolute bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex justify-between text-meta-sm text-muted-foreground opacity-20">
        <span>© 2026</span>
        <span>Slnko Records</span>
      </div>
    </main>
  );
};

export default Index;
