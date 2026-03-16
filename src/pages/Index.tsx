import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useColorMode } from "@/hooks/ColorModeContext";
import Thumbnail from "@/components/Thumbnail";

import frame01 from "@/assets/frames/01_r0c0_frame1700.jpg";
import frame02 from "@/assets/frames/02_r0c1_frame1155.jpg";
import frame03 from "@/assets/frames/03_r0c2_frame1822.jpg";
import frame04 from "@/assets/frames/04_r0c3_frame0893.jpg";
import frame05 from "@/assets/frames/05_r0c4_frame1562.jpg";
import frame06 from "@/assets/frames/06_r0c5_frame0021.jpg";
import frame07 from "@/assets/frames/07_r1c0_frame0271.jpg";
import frame08 from "@/assets/frames/08_r1c1_frame1673.jpg";
import frame09 from "@/assets/frames/09_r1c2_frame0630.jpg";
import frame10 from "@/assets/frames/10_r1c3_frame1543.jpg";
import frame11 from "@/assets/frames/11_r1c4_frame1377.jpg";
import frame12 from "@/assets/frames/12_r1c5_frame0527.jpg";
import frame13 from "@/assets/frames/13_r2c0_frame1299.jpg";
import frame14 from "@/assets/frames/14_r2c1_frame1230.jpg";
import frame15 from "@/assets/frames/15_r2c2_frame1442.jpg";
import frame16 from "@/assets/frames/16_r2c3_frame1513.jpg";
import frame17 from "@/assets/frames/17_r2c4_frame1006.jpg";
import frame18 from "@/assets/frames/18_r2c5_frame0969.jpg";
import frame19 from "@/assets/frames/19_r3c0_frame1775.jpg";
import frame20 from "@/assets/frames/20_r3c1_frame1787.jpg";
import frame21 from "@/assets/frames/21_r3c2_frame0922.jpg";
import frame22 from "@/assets/frames/22_r3c3_frame1415.jpg";
import frame23 from "@/assets/frames/23_r3c4_frame0819.jpg";
import frame24 from "@/assets/frames/24_r3c5_frame0005.jpg";
import frame25 from "@/assets/frames/25_r4c0_frame0670.jpg";
import frame26 from "@/assets/frames/26_r4c1_frame0633.jpg";
import frame27 from "@/assets/frames/27_r4c2_frame0511.jpg";
import frame28 from "@/assets/frames/28_r4c3_frame0560.jpg";
import frame29 from "@/assets/frames/29_r4c4_frame1711.jpg";
import frame30 from "@/assets/frames/30_r4c5_frame1524.jpg";
import frame31 from "@/assets/frames/31_r5c0_frame0421.jpg";
import frame32 from "@/assets/frames/32_r5c1_frame1117.jpg";
import frame33 from "@/assets/frames/33_r5c2_frame1080.jpg";
import frame34 from "@/assets/frames/34_r5c3_frame0149.jpg";
import frame35 from "@/assets/frames/35_r5c4_frame0030.jpg";
import frame36 from "@/assets/frames/36_r5c5_frame0645.jpg";

import clip01 from "@/assets/clips/01_r0c0_frame1700.mp4";
import clip02 from "@/assets/clips/02_r0c1_frame1155.mp4";
import clip03 from "@/assets/clips/03_r0c2_frame1822.mp4";
import clip04 from "@/assets/clips/04_r0c3_frame0893.mp4";
import clip05 from "@/assets/clips/05_r0c4_frame1562.mp4";
import clip06 from "@/assets/clips/06_r0c5_frame0021.mp4";
import clip07 from "@/assets/clips/07_r1c0_frame0271.mp4";
import clip08 from "@/assets/clips/08_r1c1_frame1673.mp4";
import clip09 from "@/assets/clips/09_r1c2_frame0630.mp4";
import clip10 from "@/assets/clips/10_r1c3_frame1543.mp4";
import clip11 from "@/assets/clips/11_r1c4_frame1377.mp4";
import clip12 from "@/assets/clips/12_r1c5_frame0527.mp4";
import clip13 from "@/assets/clips/13_r2c0_frame1299.mp4";
import clip14 from "@/assets/clips/14_r2c1_frame1230.mp4";
import clip15 from "@/assets/clips/15_r2c2_frame1442.mp4";
import clip16 from "@/assets/clips/16_r2c3_frame1513.mp4";
import clip17 from "@/assets/clips/17_r2c4_frame1006.mp4";
import clip18 from "@/assets/clips/18_r2c5_frame0969.mp4";
import clip19 from "@/assets/clips/19_r3c0_frame1775.mp4";
import clip20 from "@/assets/clips/20_r3c1_frame1787.mp4";
import clip21 from "@/assets/clips/21_r3c2_frame0922.mp4";
import clip22 from "@/assets/clips/22_r3c3_frame1415.mp4";
import clip23 from "@/assets/clips/23_r3c4_frame0819.mp4";
import clip24 from "@/assets/clips/24_r3c5_frame0005.mp4";
import clip25 from "@/assets/clips/25_r4c0_frame0670.mp4";
import clip26 from "@/assets/clips/26_r4c1_frame0633.mp4";
import clip27 from "@/assets/clips/27_r4c2_frame0511.mp4";
import clip28 from "@/assets/clips/28_r4c3_frame0560.mp4";
import clip29 from "@/assets/clips/29_r4c4_frame1711.mp4";
import clip30 from "@/assets/clips/30_r4c5_frame1524.mp4";
import clip31 from "@/assets/clips/31_r5c0_frame0421.mp4";
import clip32 from "@/assets/clips/32_r5c1_frame1117.mp4";
import clip33 from "@/assets/clips/33_r5c2_frame1080.mp4";
import clip34 from "@/assets/clips/34_r5c3_frame0149.mp4";
import clip35 from "@/assets/clips/35_r5c4_frame0030.mp4";
import clip36 from "@/assets/clips/36_r5c5_frame0645.mp4";

const grid = [
  { src: frame01, clip: clip01 }, { src: frame02, clip: clip02 },
  { src: frame03, clip: clip03 }, { src: frame04, clip: clip04 },
  { src: frame05, clip: clip05 }, { src: frame06, clip: clip06 },
  { src: frame07, clip: clip07 }, { src: frame08, clip: clip08 },
  { src: frame09, clip: clip09 }, { src: frame10, clip: clip10 },
  { src: frame11, clip: clip11 }, { src: frame12, clip: clip12 },
  { src: frame13, clip: clip13 }, { src: frame14, clip: clip14 },
  { src: frame15, clip: clip15 }, { src: frame16, clip: clip16 },
  { src: frame17, clip: clip17 }, { src: frame18, clip: clip18 },
  { src: frame19, clip: clip19 }, { src: frame20, clip: clip20 },
  { src: frame21, clip: clip21 }, { src: frame22, clip: clip22 },
  { src: frame23, clip: clip23 }, { src: frame24, clip: clip24 },
  { src: frame25, clip: clip25 }, { src: frame26, clip: clip26 },
  { src: frame27, clip: clip27 }, { src: frame28, clip: clip28 },
  { src: frame29, clip: clip29 }, { src: frame30, clip: clip30 },
  { src: frame31, clip: clip31 }, { src: frame32, clip: clip32 },
  { src: frame33, clip: clip33 }, { src: frame34, clip: clip34 },
  { src: frame35, clip: clip35 }, { src: frame36, clip: clip36 },
];

const Index = () => {
  const { toggle } = useColorMode();
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/10 relative flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-baseline px-4 py-4 md:px-10 md:py-8 shrink-0 gap-3">
        <motion.span
          className="text-[7px] md:text-[10px] tracking-[0.12em] uppercase font-display font-medium whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          Leto s Monikou
        </motion.span>
        <motion.div
          className="flex gap-3 md:gap-8 text-[7px] md:text-[10px] tracking-[0.12em] uppercase font-display font-medium shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-500">
            Počúvať
          </a>
          <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-500">
            Objednať
          </a>
          <Link to="/texty" className="opacity-70 hover:opacity-100 transition-opacity duration-500">
            Texty
          </Link>
          <button
            onClick={toggle}
            className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-current opacity-50 hover:opacity-100 transition-opacity duration-500 shrink-0"
            aria-label="Toggle colors"
          />
        </motion.div>
      </nav>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10">
        {/* 6x6 grid */}
        <div className="grid grid-cols-6 gap-[3px] md:gap-[5px] w-full max-w-[520px]">
          {grid.map((cell, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.02 }}
            >
              <Thumbnail src={cell.src} clip={cell.clip} delay={0} />
            </motion.div>
          ))}
        </div>

        {/* Title below grid */}
        <motion.h1
          className="font-display font-extrabold text-[13px] md:text-xl tracking-wide uppercase mt-8 md:mt-14 whitespace-nowrap text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Cítiť to všetko naraz
        </motion.h1>

        {/* Tracklist below grid */}
        <motion.div
          className="mt-10 md:mt-14 text-center font-display font-bold uppercase tracking-wide text-[7px] md:text-[10px] leading-[2] opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        >
          <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full border border-current text-[8px] mb-2">
            A
          </span>
          <div>Miesta na mape</div>
          <div>Tiger</div>
          <div>Ha Ha</div>
          <div>Zastav</div>
          <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full border border-current text-[8px] mt-4 mb-2">
            B
          </span>
          <div>Lament</div>
          <div>Odovzdaj sa mi</div>
          <div>Asi ma máš</div>
          <div>Zvony bijú na poplach</div>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#"
          className="mt-10 md:mt-14 inline-block rounded-full border border-foreground/30 px-8 py-3 text-[9px] md:text-[10px] font-display font-bold uppercase tracking-[0.14em] hover:bg-foreground hover:text-background transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          Objednať vinyl
        </motion.a>
      </div>

      {/* Footer */}
      <footer className="flex justify-between p-6 md:p-10 text-[9px] text-foreground opacity-30 shrink-0 font-body tracking-wide">
        <span>© 2026</span>
        <span>Slnko Records</span>
      </footer>
    </main>
  );
};

export default Index;
