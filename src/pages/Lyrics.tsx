import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useColorMode } from "@/hooks/ColorModeContext";

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

const SideSection = ({
  label,
  songs,
  startDelay,
}: {
  label: string;
  songs: typeof sideA;
  startDelay: number;
}) => (
  <>
    <motion.div
      className="flex justify-center mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: startDelay }}
    >
      <span className="inline-flex items-center justify-center w-[16px] h-[16px] rounded-full border border-current text-[6px] font-display font-bold">
        {label}
      </span>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-14 text-center">
      {songs.map((song, i) => (
        <motion.div
          key={song.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: startDelay + 0.1 + i * 0.1 }}
        >
          <h2 className="font-display font-bold uppercase text-[11px] md:text-[13px] tracking-[0.02em] mb-2">
            {song.title}
          </h2>
          <p className="font-body text-[10px] md:text-[11px] leading-[1.35] tracking-[-0.01em] whitespace-pre-line opacity-90">
            {song.text}
          </p>
        </motion.div>
      ))}
    </div>
  </>
);

const Lyrics = () => {
  const { toggle } = useColorMode();
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/10 relative flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-baseline px-4 py-4 md:px-10 md:py-8 shrink-0 gap-3">
        <Link to="/">
          <motion.span
            className="text-[7px] md:text-[10px] tracking-[0.12em] uppercase font-display font-medium whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Leto s Monikou
          </motion.span>
        </Link>
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
          <Link to="/texty" className="hover:opacity-70 transition-opacity duration-500">
            Texty
          </Link>
          <button
            onClick={toggle}
            className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-current opacity-50 hover:opacity-100 transition-opacity duration-500 shrink-0"
            aria-label="Toggle colors"
          />
        </motion.div>
      </nav>

      {/* Lyrics content */}
      <div className="flex-1 px-6 md:px-10 pt-6 md:pt-12 pb-12 md:pb-20 max-w-[900px] mx-auto w-full">
        <SideSection label="A" songs={sideA} startDelay={0.3} />
        <div className="my-12 md:my-20" />
        <SideSection label="B" songs={sideB} startDelay={0.6} />

        {/* Credits */}
        <motion.div
          className="mt-16 md:mt-24 pt-8 border-t border-foreground/20 font-body text-[8px] md:text-[9px] leading-[2.2] opacity-70 text-center max-w-[500px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="grid grid-cols-[auto_auto] gap-x-3 justify-center text-left">
            <span className="text-right opacity-60">Hudba a texty</span>
            <span>Monika Omerzu Midriaková</span>
            <span className="text-right opacity-60">Produkcia</span>
            <span>Monika Omerzu Midriaková</span>
            <span className="text-right opacity-60">Mix a mastering</span>
            <span>Gaex</span>
          </div>
          <div className="grid grid-cols-[auto_auto] gap-x-3 justify-center text-left mt-4">
            <span className="text-right opacity-60">Spev, synths, programming</span>
            <span>Monika Omerzu Midriaková</span>
            <span className="text-right opacity-60">Bicie</span>
            <span>Jakub Šindler</span>
            <span className="text-right opacity-60">Gitara</span>
            <span>Lukáš Klavrza</span>
            <span className="text-right opacity-60">Basa</span>
            <span>Lukáš Klavrza</span>
            <span className="text-right opacity-60">Doprovodný spev</span>
            <span>Amelie Siba</span>
          </div>
          <div className="grid grid-cols-[auto_auto] gap-x-3 justify-center text-left mt-4">
            <span className="text-right opacity-60">Vizuálny koncept</span>
            <span>Jumping Jacks</span>
            <span className="text-right opacity-60">Grafický dizajn</span>
            <span>Šimon Marek</span>
            <span className="text-right opacity-60">PR</span>
            <span>Zdeněk Neusar, Alexander Čerevka</span>
            <span className="text-right opacity-60">Booking</span>
            <span>Prokop Holoubek, Alžbeta Holičková</span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="flex justify-between px-6 py-6 md:p-10 text-[9px] text-foreground opacity-30 shrink-0 font-body tracking-wide">
        <span>© 2026</span>
        <span>Slnko Records</span>
      </footer>
    </main>
  );
};

export default Lyrics;
