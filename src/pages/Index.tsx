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

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/10">
      {/* Nav */}
      <nav className="flex justify-between items-start p-6 md:p-8">
        <    motion.div
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

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pt-[8vh] md:pt-[12vh] pb-[6vh]">
        <div className="grid grid-cols-12 gap-y-20 md:gap-y-32">
          
          {/* Row 1 */}
          <div className="col-start-1 col-span-5 md:col-start-2 md:col-span-3">
            <Thumbnail
              frames={[still01, still02, still03]}
              metadata="IMG_0841"
              delay={0.1}
            />
          </div>

          <div className="col-start-8 col-span-5 md:col-start-7 md:col-span-3 mt-12 md:mt-20">
            <Thumbnail
              frames={[still05, still06, still04]}
              metadata="IMG_0844"
              aspectRatio="square"
              delay={0.2}
            />
          </div>

          {/* Title break */}
          <div className="col-span-12 md:col-start-3 md:col-span-8 py-8 md:py-16">
            <motion.h1
              className="font-serif text-xl md:text-2xl tracking-tight text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
            >
              Leto s Monikou{" "}
              <span className="italic opacity-50">— Cítiť to všetko naraz</span>
            </motion.h1>
          </div>

          {/* Row 2 */}
          <div className="col-start-1 col-span-4 md:col-start-1 md:col-span-2">
            <Thumbnail
              frames={[still07, still08, still09]}
              metadata="IMG_0847"
              delay={0.15}
            />
          </div>

          <div className="col-start-7 col-span-6 md:col-start-5 md:col-span-3 mt-6">
            <Thumbnail
              frames={[still10, still11, still12]}
              metadata="IMG_0850"
              aspectRatio="square"
              delay={0.25}
            />
          </div>

          <div className="hidden md:block col-start-10 col-span-2 mt-16">
            <Thumbnail
              frames={[still13, still14, still15]}
              metadata="IMG_0853"
              delay={0.35}
            />
          </div>

          {/* Row 3 */}
          <div className="col-start-3 col-span-5 md:col-start-3 md:col-span-3 mt-[-10px]">
            <Thumbnail
              frames={[still16, still15, still14]}
              metadata="IMG_0856"
              delay={0.2}
            />
          </div>

          <div className="col-start-9 col-span-4 md:col-start-8 md:col-span-2 mt-8 md:mt-24">
            <Thumbnail
              frames={[still03, still06, still09]}
              metadata="IMG_0859"
              aspectRatio="square"
              delay={0.3}
            />
          </div>

          {/* Tracklist whisper */}
          <div className="col-span-12 md:col-start-4 md:col-span-6 py-12 md:py-20">
            <motion.div
              className="text-center space-y-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-meta-sm text-muted-foreground opacity-40 mb-4">
                A / B — 2026
              </p>
              <p className="font-serif text-sm opacity-40 leading-relaxed">
                Miesta na mape · Tiger · Ha Ha · Zastav
              </p>
              <p className="font-serif text-sm opacity-40 leading-relaxed">
                Lament · Odovzdaj sa mi · Asi ma máš · Zvony bijú na poplach
              </p>
            </motion.div>
          </div>

          {/* Last stills */}
          <div className="col-start-1 col-span-4 md:col-start-1 md:col-span-2">
            <Thumbnail
              frames={[still12, still11, still10]}
              metadata="IMG_0862"
              delay={0.1}
            />
          </div>

          <div className="col-start-6 col-span-4 md:col-start-6 md:col-span-3 mt-10 md:mt-32">
            <Thumbnail
              frames={[still08, still05, still02]}
              metadata="IMG_0865"
              delay={0.2}
            />
          </div>

          <div className="hidden md:block col-start-11 col-span-2 mt-6">
            <Thumbnail
              frames={[still04, still07, still01]}
              metadata="IMG_0868"
              aspectRatio="square"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 md:p-8 mt-[6vh] md:mt-[10vh] flex justify-between text-meta-sm text-muted-foreground opacity-30">
        <span>© 2026 Leto s Monikou</span>
        <span>Slnko Records</span>
      </footer>
    </main>
  );
};

export default Index;
