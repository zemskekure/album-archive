export interface LyricLine {
  readonly time: number; // seconds
  readonly text: string;
}

export interface SyncedTrack {
  readonly title: string;
  readonly lyrics: readonly LyricLine[];
}

// Timestamps are approximate — adjust to match the actual audio
export const syncedLyrics: Record<string, SyncedTrack> = {
  "ASI MA MÁŠ": {
    title: "ASI MA MÁŠ",
    lyrics: [
      { time: 0, text: "" },
      { time: 3, text: "Trvá mi kým prídem k pointe" },
      { time: 7, text: "Neviem písať správy na WhatsAppe" },
      { time: 11, text: "Chodím z práce neskoro ja viem" },
      { time: 15, text: "Ale to ty tiež to ty tiež" },
      { time: 20, text: "" },
      { time: 23, text: "Asi ma máš" },
      { time: 26, text: "Asi ma máš rád" },
      { time: 29, text: "Asi ma máš" },
      { time: 33, text: "" },
      { time: 35, text: "Asi ma máš" },
      { time: 38, text: "Asi ma máš rád" },
      { time: 41, text: "Asi ma máš" },
      { time: 44, text: "V rukách" },
      { time: 48, text: "" },
      { time: 51, text: "Poznáš moje nervózne pohyby" },
      { time: 55, text: "Odvážiš sa ku mne ako jediný" },
      { time: 59, text: "Pritakám vždy že už ideme" },
      { time: 63, text: "V bunde čakať je ti súdené" },
      { time: 68, text: "" },
      { time: 71, text: "Asi ma máš" },
      { time: 74, text: "Asi ma máš rád" },
      { time: 77, text: "Asi ma máš" },
      { time: 81, text: "" },
      { time: 83, text: "Odpúšťaš zamračené pohľady" },
      { time: 87, text: "Presvedčíš ma znovu v seba uveriť" },
      { time: 91, text: "Od rána do noci tajne spojení" },
      { time: 95, text: "Nečakáš že ti život zaplním" },
      { time: 100, text: "" },
      { time: 103, text: "Asi ma máš" },
      { time: 106, text: "Asi ma máš rád" },
      { time: 109, text: "Asi ma máš" },
      { time: 112, text: "V rukách" },
      { time: 116, text: "" },
      { time: 119, text: "Asi ma máš" },
      { time: 122, text: "Asi ma máš rád" },
      { time: 125, text: "Asi ma máš" },
      { time: 128, text: "V rukách" },
      { time: 133, text: "" },
      { time: 145, text: "" },
    ],
  },
};
