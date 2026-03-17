import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { usePlayerState } from "@/hooks/PlayerContext";
import { syncedLyrics } from "@/data/synced-lyrics";
import { useColorMode } from "@/hooks/ColorModeContext";
import Thumbnail from "@/components/Thumbnail";
import Player from "@/components/Player";
import Footer from "@/components/Footer";
import OrderSheet from "@/components/OrderSheet";
import vinylFront from "@/assets/shop/vinyl_front.png";
import vinylBack from "@/assets/shop/vinyl_back.png";
import capImg from "@/assets/shop/cap.png";
import socksImg from "@/assets/shop/socks.png";

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

const visualiserSrc = `${import.meta.env.BASE_URL}visualiser.mp4`;

const Index = () => {
  const [visualiser, setVisualiser] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [shopIndex, setShopIndex] = useState(0);
  const [cart, setCart] = useState<Record<number, number>>({});

  const products = [
    { name: "Vinyl LP", desc: "180g vinyl · gatefold obal · plagát s textami", price: 25, hasFlip: true },
    { name: "Šiltovka", desc: "\"nádej\" · čierna · one size", price: 18, hasFlip: false },
    { name: "Ponožky", desc: "\"nádej\" · one size", price: 12, hasFlip: false },
  ];

  const addToCart = (index: number) => {
    setCart({ ...cart, [index]: (cart[index] || 0) + 1 });
  };

  const cartTotal = Object.entries(cart).reduce(
    (sum, [idx, qty]) => sum + products[Number(idx)].price * qty,
    0
  );

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setShopIndex((prev) => (prev - 1 + products.length) % products.length);
      setFlipped(false);
    } else if (e.key === "ArrowRight") {
      setShopIndex((prev) => (prev + 1) % products.length);
      setFlipped(false);
    }
  }, [products.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const { currentTrack, currentTime: playerTime } = usePlayerState();

  const currentLyricLine = useMemo(() => {
    const synced = syncedLyrics[currentTrack.title];
    if (!synced) return "";
    const { lyrics } = synced;
    let line = "";
    for (const l of lyrics) {
      if (l.time <= playerTime) {
        line = l.text;
      } else {
        break;
      }
    }
    return line;
  }, [currentTrack.title, playerTime]);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/10 relative flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-baseline px-6 py-4 md:px-10 md:py-8 shrink-0 gap-3">
        <motion.span
          className="text-[9px] md:text-[10px] tracking-[0.10em] uppercase font-display font-medium whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          Leto s Monikou
        </motion.span>
        <motion.div
          className="flex items-baseline gap-3 md:gap-8 text-[9px] md:text-[10px] tracking-[0.10em] uppercase font-display font-medium shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <a href="#player" className="opacity-70 hover:opacity-100 transition-opacity duration-500">
            Počúvať
          </a>
          <a href="#objednat" className="opacity-70 hover:opacity-100 transition-opacity duration-500">
            Objednať
          </a>
          <Link to="/texty" className="opacity-70 hover:opacity-100 transition-opacity duration-500">
            Texty
          </Link>
        </motion.div>
      </nav>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10">
        {/* Grid / Visualiser container */}
        <div className="relative w-full md:max-w-[520px]">
          <AnimatePresence mode="wait">
            {visualiser ? (
              <motion.div
                key="visualiser"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full max-w-[380px] mx-auto aspect-[2/3] rounded-2xl overflow-hidden shadow-paper relative"
              >
                <video
                  src={visualiserSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Synced lyrics overlay */}
                <AnimatePresence mode="wait">
                  {currentLyricLine && (
                    <motion.div
                      key={currentLyricLine}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-x-0 bottom-0 pb-8 px-6 text-center"
                    >
                      <span className="font-display font-bold uppercase text-[11px] md:text-[14px] tracking-[0.04em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                        {currentLyricLine}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-6 gap-[3px] md:gap-[5px] w-full"
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Title below grid */}
        <motion.h1
          className="font-display font-extrabold text-[13px] md:text-xl tracking-wide uppercase mt-6 md:mt-10 mb-6 md:mb-10 whitespace-nowrap text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Cítiť to všetko naraz
        </motion.h1>

        {/* Player */}
        <Player visualiser={visualiser} onToggleVisualiser={() => setVisualiser(!visualiser)} />

      </div>

      {/* Shop section */}
      <motion.section
        id="objednat"
        className="w-full px-6 md:px-10 py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.5 }}
      >
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-display font-extrabold uppercase text-[13px] md:text-xl tracking-wide text-center mb-10 md:mb-14">
            Objednať
          </h2>

          {/* Product carousel — 3D circle on desktop, swipe on mobile */}
          <div className="relative overflow-hidden" style={{ perspective: "1000px" }}>
            <div className="flex items-center justify-center h-[320px] md:h-[460px] relative">
              {products.map((product, i) => {
                const n = products.length;
                let offset = i - shopIndex;
                if (offset > Math.floor(n / 2)) offset -= n;
                if (offset < -Math.floor(n / 2)) offset += n;
                const z = offset === 0 ? 0 : -50;
                const x = offset * 340;
                const opacity = offset === 0 ? 1 : 0.3;
                const scale = offset === 0 ? 1 : 0.7;

                return (
                  <motion.div
                    key={product.name}
                    className="absolute cursor-pointer"
                    animate={{
                      x,
                      z,
                      opacity,
                      scale,
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    onClick={() => {
                      if (i === shopIndex && product.hasFlip) {
                        setFlipped(!flipped);
                      } else {
                        setShopIndex(i);
                        setFlipped(false);
                      }
                    }}
                    style={{ transformStyle: "preserve-3d", zIndex: offset === 0 ? 10 : 1 }}
                  >
                    {/* Vinyl */}
                    {i === 0 && (
                      <div className="w-[260px] md:w-[400px]" style={{ perspective: "800px" }}>
                        <div
                          className="relative w-full aspect-square transition-transform duration-700"
                          style={{
                            transformStyle: "preserve-3d",
                            transform: flipped && shopIndex === 0 ? "rotateY(180deg)" : "rotateY(0deg)",
                          }}
                        >
                          <div className="absolute inset-0 overflow-hidden " style={{ backfaceVisibility: "hidden" }}>
                            <img src={vinylFront} alt="Vinyl LP" className="w-full h-full object-cover" draggable={false} />
                          </div>
                          <div className="absolute inset-0 overflow-hidden " style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                            <img src={vinylBack} alt="Vinyl LP — zadná strana" className="w-full h-full object-cover" draggable={false} />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Cap */}
                    {i === 1 && (
                      <motion.div
                        className="w-[260px] md:w-[400px]"
                        whileTap={{
                          rotate: [0, -8, 6, -4, 2, 0],
                          transition: { duration: 0.5, ease: "easeInOut" },
                        }}
                      >
                        <div className="w-full aspect-square flex items-center justify-center">
                          <img src={capImg} alt="Šiltovka nádej" className="w-[85%] h-[85%] object-contain" draggable={false} />
                        </div>
                      </motion.div>
                    )}

                    {/* Socks */}
                    {i === 2 && (
                      <motion.div
                        className="w-[260px] md:w-[400px]"
                        whileTap={{
                          rotate: [0, -8, 6, -4, 2, 0],
                          transition: { duration: 0.5, ease: "easeInOut" },
                        }}
                      >
                        <div className="w-full aspect-square flex items-center justify-center">
                          <img src={socksImg} alt="Ponožky nádej" className="w-[85%] h-[85%] object-contain" draggable={false} />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Arrows */}
            <div className="flex justify-center gap-6 mt-2">
              <button
                onClick={() => { setShopIndex((shopIndex - 1 + products.length) % products.length); setFlipped(false); }}
                className="opacity-30 hover:opacity-100 transition-opacity p-2"
              >
                <svg width="14" height="16" viewBox="0 0 8 10" fill="currentColor">
                  <rect x="0" y="0" width="1.5" height="10" />
                  <polygon points="8,0 8,10 2,5" />
                </svg>
              </button>
              <button
                onClick={() => { setShopIndex((shopIndex + 1) % products.length); setFlipped(false); }}
                className="opacity-30 hover:opacity-100 transition-opacity p-2"
              >
                <svg width="14" height="16" viewBox="0 0 8 10" fill="currentColor">
                  <polygon points="0,0 6,5 0,10" />
                  <rect x="6.5" y="0" width="1.5" height="10" />
                </svg>
              </button>
            </div>

          </div>

          {/* Product info — centered */}
          <AnimatePresence mode="wait">
            <motion.div
              key={shopIndex}
              className="text-center mt-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="font-display font-bold uppercase text-[11px] md:text-[13px] tracking-[0.08em]">
                {products[shopIndex].name}
              </div>
              <div className="font-body text-[9px] md:text-[10px] opacity-50 mt-1">
                {products[shopIndex].desc}
              </div>
              <div className="font-display font-bold text-[15px] md:text-[18px] mt-2">
                {products[shopIndex].price} €
              </div>
              <button
                onClick={() => addToCart(shopIndex)}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-2.5 text-[9px] md:text-[10px] font-display font-bold uppercase tracking-[0.12em] hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Pridať do košíka
                {cart[shopIndex] ? (
                  <span className="w-5 h-5 rounded-full bg-foreground/15 flex items-center justify-center text-[9px] font-bold">
                    {cart[shopIndex]}
                  </span>
                ) : null}
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Cart summary */}
          <AnimatePresence>
            {cartCount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3 }}
                className="mt-8 md:mt-10"
              >
                <div className="max-w-[400px] mx-auto rounded-2xl border border-foreground/10 px-5 py-4">
                  <div className="space-y-1.5">
                    {Object.entries(cart).map(([idx, qty]) => (
                      <div key={idx} className="flex justify-between items-center font-body text-[10px] md:text-[11px]">
                        <span className="opacity-60">
                          {qty}× {products[Number(idx)].name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="opacity-60">{products[Number(idx)].price * qty} €</span>
                          <button
                            onClick={() => {
                              const next = { ...cart };
                              if (next[Number(idx)] > 1) {
                                next[Number(idx)] = next[Number(idx)] - 1;
                              } else {
                                delete next[Number(idx)];
                              }
                              setCart(next);
                            }}
                            className="w-4 h-4 rounded-full flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity text-[10px]"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-baseline mt-3 pt-3 border-t border-foreground/10">
                    <span className="font-display font-bold uppercase text-[9px] tracking-[0.06em]">Spolu</span>
                    <span className="font-display font-bold text-[14px]">{cartTotal} €</span>
                  </div>
                </div>

                <button
                  onClick={() => setOrderOpen(true)}
                  className="mt-5 w-full max-w-[400px] mx-auto block text-center rounded-full bg-foreground text-background px-8 py-3.5 text-[9px] md:text-[10px] font-display font-bold uppercase tracking-[0.14em] hover:opacity-90 transition-all duration-300"
                >
                  Objednať ({cartCount} {cartCount === 1 ? "položka" : cartCount < 5 ? "položky" : "položiek"})
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-center font-body text-[8px] md:text-[9px] opacity-30 mt-6">
            Doručenie po celom Slovensku a Česku · Slnko Records
          </p>
        </div>
      </motion.section>

      <Footer />
      <OrderSheet
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        cartItems={Object.entries(cart).map(([idx, qty]) => ({
          name: products[Number(idx)].name,
          desc: products[Number(idx)].desc,
          price: products[Number(idx)].price,
          qty,
        }))}
        onOrderComplete={() => setCart({})}
      />
    </main>
  );
};

export default Index;
