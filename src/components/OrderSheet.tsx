import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CartItem {
  name: string;
  desc: string;
  price: number;
  qty: number;
}

interface OrderSheetProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderComplete: () => void;
}

const OrderSheet = ({ open, onClose, cartItems, onOrderComplete }: OrderSheetProps) => {
  const [step, setStep] = useState<"details" | "confirm" | "done">("details");
  const [form, setForm] = useState({ name: "", email: "", street: "", city: "", zip: "" });

  const shipping = 3;
  const itemsTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = itemsTotal + shipping;

  const handleSubmit = () => {
    if (step === "details") {
      setStep("confirm");
    } else if (step === "confirm") {
      setStep("done");
      onOrderComplete();
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("details");
      setForm({ name: "", email: "", street: "", city: "", zip: "" });
    }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Sheet */}
          <motion.div
            className="fixed inset-x-0 bottom-0 z-50 md:inset-auto md:top-1/2 md:left-1/2 md:w-[420px]"
            initial={{ y: "100%", x: 0 }}
            animate={{ y: 0, x: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            style={{ maxHeight: "90vh" }}
          >
            <div className="bg-background text-foreground rounded-t-3xl md:rounded-3xl md:-translate-x-1/2 md:-translate-y-1/2 overflow-hidden shadow-[0_-4px_40px_rgba(0,0,0,0.15)] md:shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-1 md:hidden">
                <div className="w-10 h-1 rounded-full bg-foreground/15" />
              </div>

              <div className="px-6 md:px-8 pb-8 pt-4 md:pt-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display font-bold uppercase text-[11px] md:text-[12px] tracking-[0.08em]">
                    {step === "done" ? "Ďakujeme" : "Objednávka"}
                  </h3>
                  <button
                    onClick={handleClose}
                    className="w-[28px] h-[28px] rounded-full bg-foreground/8 flex items-center justify-center hover:bg-foreground/15 transition-colors"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1,1 L9,9 M9,1 L1,9" />
                    </svg>
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {step === "details" && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Cart items */}
                      <div className="space-y-0">
                        {cartItems.map((item, i) => (
                          <div key={i} className="flex items-center justify-between py-3 border-b border-foreground/10">
                            <div>
                              <div className="font-display font-bold uppercase text-[9px] tracking-[0.06em]">
                                {item.qty}× {item.name}
                              </div>
                              <div className="font-body text-[8px] opacity-50 mt-0.5">{item.desc}</div>
                            </div>
                            <div className="font-display font-bold text-[11px] shrink-0 ml-4">
                              {item.price * item.qty} €
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Form */}
                      <div className="mt-5 space-y-3">
                        <input
                          type="text"
                          placeholder="Meno a priezvisko"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-foreground/20 rounded-xl px-4 py-3 font-body text-[12px] placeholder:text-foreground/50 outline-none focus:ring-1 focus:ring-foreground/40 transition-shadow"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-foreground/20 rounded-xl px-4 py-3 font-body text-[12px] placeholder:text-foreground/50 outline-none focus:ring-1 focus:ring-foreground/40 transition-shadow"
                        />

                        <div className="pt-1">
                          <div className="font-display font-bold uppercase text-[9px] tracking-[0.06em] opacity-50 mb-2">
                            Adresa doručenia
                          </div>
                          <input
                            type="text"
                            placeholder="Ulica a číslo"
                            value={form.street}
                            onChange={(e) => setForm({ ...form, street: e.target.value })}
                            className="w-full bg-foreground/20 rounded-xl px-4 py-3 font-body text-[12px] placeholder:text-foreground/50 outline-none focus:ring-1 focus:ring-foreground/40 transition-shadow"
                          />
                          <div className="flex gap-3 mt-3">
                            <input
                              type="text"
                              placeholder="Mesto"
                              value={form.city}
                              onChange={(e) => setForm({ ...form, city: e.target.value })}
                              className="flex-1 bg-foreground/20 rounded-xl px-4 py-3 font-body text-[12px] placeholder:text-foreground/50 outline-none focus:ring-1 focus:ring-foreground/40 transition-shadow"
                            />
                            <input
                              type="text"
                              placeholder="PSČ"
                              value={form.zip}
                              onChange={(e) => setForm({ ...form, zip: e.target.value })}
                              className="w-[100px] bg-foreground/20 rounded-xl px-4 py-3 font-body text-[12px] placeholder:text-foreground/50 outline-none focus:ring-1 focus:ring-foreground/40 transition-shadow"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="mt-5 space-y-1 font-body text-[10px]">
                        <div className="flex justify-between opacity-50">
                          <span>Doručenie</span>
                          <span>{shipping} €</span>
                        </div>
                        <div className="flex justify-between font-display font-bold text-[11px] pt-2 border-t border-foreground/10">
                          <span>Spolu</span>
                          <span>{total} €</span>
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        onClick={handleSubmit}
                        disabled={!form.name || !form.email || !form.street || !form.city || !form.zip}
                        className="mt-6 w-full py-3.5 rounded-2xl bg-foreground text-background font-display font-bold uppercase text-[10px] tracking-[0.10em] disabled:opacity-20 hover:opacity-90 transition-all duration-300"
                      >
                        Pokračovať
                      </button>
                    </motion.div>
                  )}

                  {step === "confirm" && (
                    <motion.div
                      key="confirm"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-center py-4">
                        <div className="font-body text-[11px] opacity-70 leading-[1.7]">
                          <p><strong>{form.name}</strong></p>
                          <p className="opacity-50">{form.email}</p>
                          <p className="opacity-50 mt-1">{form.street}, {form.zip} {form.city}</p>
                          <p className="mt-4 font-display font-bold text-[14px]">{total} €</p>
                          <p className="opacity-40 text-[9px] mt-1">
                            {cartItems.map((item) => `${item.qty}× ${item.name}`).join(" + ")} + doručenie
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="mt-4 w-full py-3.5 rounded-2xl bg-foreground text-background font-display font-bold uppercase text-[10px] tracking-[0.10em] hover:opacity-90 transition-all duration-300"
                      >
                        Potvrdiť objednávku
                      </button>
                      <button
                        onClick={() => setStep("details")}
                        className="mt-2 w-full py-2 font-body text-[9px] opacity-40 hover:opacity-70 transition-opacity"
                      >
                        ← Späť
                      </button>
                    </motion.div>
                  )}

                  {step === "done" && (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-8"
                    >
                      <div className="w-[48px] h-[48px] rounded-full border-2 border-foreground/30 flex items-center justify-center mx-auto mb-5">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M2,8 L8,14 L18,2" />
                        </svg>
                      </div>
                      <p className="font-display font-bold uppercase text-[11px] tracking-[0.08em]">
                        Objednávka prijatá
                      </p>
                      <p className="font-body text-[10px] opacity-50 mt-2 leading-[1.6]">
                        Potvrdenie pošleme na {form.email}
                      </p>
                      <button
                        onClick={handleClose}
                        className="mt-6 px-8 py-3 rounded-full border border-foreground/30 font-display font-bold uppercase text-[9px] tracking-[0.10em] hover:bg-foreground hover:text-background transition-all duration-300"
                      >
                        Zavrieť
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderSheet;
