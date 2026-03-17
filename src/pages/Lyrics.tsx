import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useColorMode } from "@/hooks/ColorModeContext";
import Footer from "@/components/Footer";
import { usePlayerState } from "@/hooks/PlayerContext";
import MiniPlayer from "@/components/MiniPlayer";

const sideA = [
  {
    title: "Miesta na mape",
    text: `Si tu celkom sám a predsa nečakane
Zjavil sa hlások takmer ho nepočujem
Šteboce ako vtáci na svitanie
Môj starý známy silnie tam kde ja nie

Povieš mi to čo ťa hnevalo
Odpoviem
Si mi tak strašne vzdialený
A pritom nie

Sú miesta na mape kam sa neodvážim
V hodine dvanástej viem pôjdeš presne tam
Tie slová by som nedala najhorším nepriateľom
Namiesto toho ich venujem nám

Túžim zmeniť adresu vymeniť kábel
Vypnúť počítač zahodiť master
Táto sloha stále nekončí nemá záver
Čo s tebou urobím len ja viem

Writing music hit song
Writing music hit song

Poviem ti to čo ma trápilo
Odpovieš
Si mi tak strašne vzdialený
A predsa nie

Nie si tu sám len ty to vieš
Nie si tu sám len ty to vieš
Nie si tu sám len ty to vieš
Nie si tu sám len ty to vieš`,
  },
  {
    title: "Tiger",
    text: `Pomalým nemenným
Tempom k nám prichádza
Valec čo nestojí
Ale len utláča
Bojíš sa opýtať
Čo volila kamoška
Ten vzťah nechceš ukončiť
Ale lož ho zabíja

A mezi námi
Mezi námi
Mezi námi
Mezi námi

Čo všetko si mohol mať
Čo všetko sa mohlo stať

Krajinou preteká
Zvieratko z temnoty
Na strach prilepí
A pohľad ti začerní
Z maličkých rozdielov
Stali sa zátoky
A tak v hlave počítaš
Čo všetko sa utopí

A mezi námi
Mezi námi
Mezi námi
Mezi námi

Čo všetko si mohol mať
Čo všetko sa mohlo

A zo všetkých emócií
Závisť je jediná
Čo za to nestojí`,
  },
  {
    title: "Ha Ha",
    text: `Stocks nerastú len padajú
Prečo veril tomu týpkovi
S úžasom díva sa na oblohu
A tajne dúfa že mu poradí

Hviezdy svietia do diaľky
A v tom si spomenie že sú to satelity v tme
Ticho si šepká
Len pre slabochov je odpúšťanie

Ha ha ha ha
Ha ha ha ha

Rád prišiel ale nemôže
Jas kompu slzy zahojí
Koľko ešte dokáže
A koľko času pri tom premárni

Prebliky tých ktorým ukrivdil
A či to spomalí keď sa zdôverí
Sladký denial
Ticho si šepká
Len pre slabochov je odpúšťanie

Ha ha ha ha
Ha ha ha ha

Tam vonku hrá viac než tisíc piesní
Tá naša znie ako ozvena z nich
Vo vnútri viet je tma čo nejde celkom skryť
Myslíš že raz to dokážeš nechať ísť`,
  },
  {
    title: "Zastav",
    text: `Zastav
Prestaň sa tváriť že vieš ako to má byť
Daj mi silu to všetko stráviť
Zastav

Nechaj sa viesť citom čo ťa tak trápi
Nie si sama keď sa to zdá ti
Zastav
Niet kam sa schovať vždy sa to vráti
Zastav zastav

Čas plynie dvojakým spôsobom
Prvý je s tebou druhý nie
Nik nevie trápenie trápenie
Svedomie

Dej plynie rovnakým spôsobom
V hlave znie zvoniaci telefón
Čo bolí prebolí vraveli
Hľadanie náhodných znamení

Čas trvá nehojí neničí
Všetko zlé aj dobré raz skončí
To miesto sa nikdy nescelí
Nevadí

Schováme sa doň v závetrí
Vyliečim zažehlím zotavím
Len trochu úprimní úprimní

Zastav
Prestaň sa tváriť že vieš ako to má byť
Daj mi silu to všetko stráviť
Zastav`,
  },
];

const sideB = [
  {
    title: "Lament",
    text: `Každý
Hľadá
To miesto
Kde dá sa
Tíško
Skrývať
Nevnímať
Vypínať

Malý
Krôčik
Nás delí
Od zbabelých
Je ti
Trápne
To priznať
Chápem

Čo sa dá čo sa dá čo sa dá čo sa dá zmeniť?
Nevieš ja viem nevieš neviem ako to má byť
Čo sa dá čo sa dá čo sa dá čo sa dá zmeniť?
Nevieš ja viem nevieš neviem ako to má byť

Každý
Hľadá
Ten východ
Kde dá sa
Tíško
Tíško skrývať
Zhasínať
Nevnímať

Nechceš
To počuť
Ani vidieť
Aj tak to cítiš
Je ti
Trápne
To priznať
Chápem`,
  },
  {
    title: "Odovzdaj sa mi",
    text: `Vonku zase sneží
A ty mi tak veľmi chýbaš
Dvaja unavení
V dvoch samostatných izbách

V hlave som napísala
Toľko piesní o nás dvoch
Žiadnu nik neuvidí
Bojím sa či som
Či som ti dosť

Veď predsa môžeš odísť
Kamkoľvek chceš
A nekonečné pláne
Skryjú ma skryjú ma tiež
Vtedy chcem prísť a povedať

Odovzdaj sa mi
Je to ako jazdiť na koni
Uvoľni svaly
Uvidíš

Ak toto nie je krásne
Tak potom už neviem čo
Len nedávno mi došlo
Že navždy trvá zraniteľnosť

Prosím pripomeň mi
Nech vypustím z hlavy strach
Každý z nás dostáva
Tak zákonite musí niečo dať

Zromantizujeme
Všetky dôvody úniku
Nevieš si pomôcť
A zastaviť sa na chvíľku
Veď vieš čo chcem povedať

Odovzdaj sa mi
Je to ako jazdiť na koni
Uvoľni svaly
Uvidíš`,
  },
  {
    title: "Asi ma máš",
    text: `Trvá mi kým prídem k pointe
Neviem písať správy na WhatsAppe
Chodím z práce neskoro ja viem
Ale to ty tiež to ty tiež

Asi ma máš
Asi ma máš rád
Asi ma máš

Asi ma máš
Asi ma máš rád
Asi ma máš
V rukách

Poznáš moje nervózne pohyby
Odvážiš sa ku mne ako jediný
Pritakám vždy že už ideme
V bunde čakať je ti súdené

Asi ma máš
Asi ma máš rád
Asi ma máš

Odpúšťaš zamračené pohľady
Presvedčíš ma znovu v seba uveriť
Od rána do noci tajne spojení
Nečakáš že ti život zaplním

Asi ma máš
Asi ma máš rád
Asi ma máš
V rukách`,
  },
  {
    title: "Zvony bijú na poplach",
    text: `Zvony bijú na poplach
V tvojej hlave
Je dvanásť čas odovzdať
Čo máš hotové

Za sto rokov budeme
Obrázky na stene
Ak sa na nás usmeje
Šťastie

Fotka v niečom albume
Nebudú si môcť
Spomenúť
Kosti v zemi odené

Za sto rokov budeme
Obrázky na stene
Pravda ak sa na nás usmeje
Šťastie

Dovtedy ti dám
Všetok čas tohto sveta
Žiaden akord nie je zlý
Stačí s kým sa obklopí

Zvony bijú na poplach
V mojom srdci
Dám ti všetok čas
Tu ho máš je tvoj
Je náš`,
  },
];

const allSongs = [...sideA, ...sideB];

const SongCard = ({ song, index }: { song: typeof allSongs[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.1 + index * 0.05 }}
    className="text-center"
  >
    <h2 className="font-display font-bold uppercase text-[13px] md:text-[15px] tracking-[0.02em] mb-2">
      {song.title}
    </h2>
    <p className="font-body text-[12px] md:text-[13px] leading-[1.4] tracking-[-0.01em] whitespace-pre-line opacity-90">
      {song.text}
    </p>
  </motion.div>
);

const Lyrics = () => {
  const { toggle } = useColorMode();
  const { hasPlayed } = usePlayerState();
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobilePrev = () => setMobileIndex((p) => (p > 0 ? p - 1 : allSongs.length - 1));
  const mobileNext = () => setMobileIndex((p) => (p < allSongs.length - 1 ? p + 1 : 0));
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/10 relative flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-baseline px-6 py-4 md:px-10 md:py-8 shrink-0 gap-3">
        <Link to="/">
          <motion.span
            className="text-[9px] md:text-[10px] tracking-[0.10em] uppercase font-display font-medium whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
          Leto s Monikou
          </motion.span>
        </Link>
        <motion.div
          className="flex items-baseline gap-3 md:gap-8 text-[9px] md:text-[10px] tracking-[0.10em] uppercase font-display font-medium shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <Link to="/#player" className="opacity-70 hover:opacity-100 transition-opacity duration-500">
            Počúvať
          </Link>
          <Link to="/#objednat" className="opacity-70 hover:opacity-100 transition-opacity duration-500">
            Objednať
          </Link>
          <Link to="/texty" className="hover:opacity-70 transition-opacity duration-500">
            Texty
          </Link>
        </motion.div>
      </nav>

      {/* Mobile: single song with arrows */}
      <div className="md:hidden flex-1 flex flex-col pt-4 pb-8 px-6">
        {/* Navigation arrows + counter */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={mobilePrev} className="opacity-40 hover:opacity-100 transition-opacity p-2">
            <svg width="14" height="16" viewBox="0 0 8 10" fill="currentColor">
              <rect x="0" y="0" width="1.5" height="10" />
              <polygon points="8,0 8,10 2,5" />
            </svg>
          </button>
          <span className="font-display font-bold text-[8px] tracking-[0.10em] uppercase opacity-40">
            {mobileIndex + 1} / {allSongs.length}
          </span>
          <button onClick={mobileNext} className="opacity-40 hover:opacity-100 transition-opacity p-2">
            <svg width="14" height="16" viewBox="0 0 8 10" fill="currentColor">
              <polygon points="0,0 6,5 0,10" />
              <rect x="6.5" y="0" width="1.5" height="10" />
            </svg>
          </button>
        </div>

        {/* Song content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mobileIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <SongCard song={allSongs[mobileIndex]} index={mobileIndex} />
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Desktop: 4-column grid */}
      <div className="hidden md:block flex-1 px-10 pt-10 pb-20 max-w-[1200px] mx-auto w-full">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full border border-current text-[9px] font-display font-bold">A</span>
        </motion.div>
        <div className="grid grid-cols-4 gap-x-16 gap-y-14 text-center">
          {sideA.map((song, i) => (
            <SongCard key={song.title} song={song} index={i} />
          ))}
        </div>
        <div className="my-20" />
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full border border-current text-[9px] font-display font-bold">B</span>
        </motion.div>
        <div className="grid grid-cols-4 gap-x-16 gap-y-14 text-center">
          {sideB.map((song, i) => (
            <SongCard key={song.title} song={song} index={i + 4} />
          ))}
        </div>
      </div>

      <Footer />

      {/* Persistent mini player — only if user has played something */}
      {hasPlayed && <MiniPlayer />}
    </main>
  );
};

export default Lyrics;
