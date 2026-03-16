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

const grid = [
  [
    { frames: [still01, still02, still03], id: "0841" },
    { frames: [still05, still06, still04], id: "0844" },
    { frames: [still07, still08, still09], id: "0847" },
    { frames: [still10, still11, still12], id: "0850" },
    { frames: [still13, still14, still15], id: "0853" },
    { frames: [still16, still15, still14], id: "0856" },
  ],
  [
    { frames: [still03, still06, still09], id: "0859" },
    { frames: [still12, still11, still10], id: "0862" },
    { frames: [still08, still05, still02], id: "0865" },
    { frames: [still04, still07, still01], id: "0868" },
    { frames: [still14, still02, still08], id: "0871" },
    { frames: [still06, still10, still16], id: "0874" },
  ],
  [
    { frames: [still02, still04, still06], id: "0877" },
    { frames: [still09, still13, still01], id: "0880" },
    { frames: [still11, still03, still15], id: "0883" },
    { frames: [still05, still16, still07], id: "0886" },
    { frames: [still01, still08, still14], id: "0889" },
    { frames: [still10, still12, still05], id: "0892" },
  ],
  [
    { frames: [still15, still09, still03], id: "0895" },
    { frames: [still07, still01, still11], id: "0898" },
    { frames: [still16, still14, still06], id: "0901" },
    { frames: [still04, still10, still02], id: "0904" },
    { frames: [still13, still05, still08], id: "0907" },
    { frames: [still12, still03, still16], id: "0910" },
  ],
  [
    { frames: [still08, still11, still14], id: "0913" },
    { frames: [still02, still06, still10], id: "0916" },
    { frames: [still05, still09, still01], id: "0919" },
    { frames: [still15, still07, still13], id: "0922" },
    { frames: [still03, still16, still04], id: "0925" },
    { frames: [still11, still14, still12], id: "0928" },
  ],
  [
    { frames: [still06, still02, still08], id: "0931" },
    { frames: [still10, still15, still05], id: "0934" },
    { frames: [still13, still04, still16], id: "0937" },
    { frames: [still01, still09, still07], id: "0940" },
    { frames: [still14, still12, still03], id: "0943" },
    { frames: [still07, still11, still06], id: "0946" },
  ],
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/10 relative flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-start p-6 md:p-10 shrink-0">
        <motion.span
          className="text-meta font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          Leto s Monikou
        </motion.span>
        <motion.div
          className="flex gap-8 text-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <a href="#" className="hover:text-accent transition-colors duration-500">Počúvať</a>
          <a href="#" className="hover:text-accent transition-colors duration-500">Objednať</a>
        </motion.div>
      </nav>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10">
        {/* Title above grid */}
        <motion.h1
          className="font-serif text-xl md:text-2xl tracking-tight mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Cítiť to všetko naraz
        </motion.h1>

        {/* 6×6 grid */}
        <div className="grid grid-cols-6 gap-[6px] md:gap-2 w-full max-w-[520px]">
          {grid.flat().map((still, i) => (
            <motion.div
              key={still.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.02 }}
            >
              <Thumbnail
                frames={still.frames}
                aspectRatio="square"
                delay={0}
              />
            </motion.div>
          ))}
        </div>

        {/* Tracklist below grid */}
        <motion.p
          className="mt-10 md:mt-14 text-meta-sm text-muted-foreground opacity-30 text-center leading-[2.2] max-w-[360px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        >
          Miesta na mape · Tiger · Ha Ha · Zastav · Lament · Odovzdaj sa mi · Asi ma máš · Zvony bijú na poplach
        </motion.p>
      </div>

      {/* Footer */}
      <footer className="flex justify-between p-6 md:p-10 text-meta-sm text-muted-foreground opacity-20 shrink-0">
        <span>© 2026</span>
        <span>Slnko Records</span>
      </footer>
    </main>
  );
};

export default Index;
