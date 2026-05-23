import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const finish = () => {
      if (!cancelled) setDone(true);
    };

    const minDelay = new Promise((r) => setTimeout(r, 600));
    const ready =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((r) => window.addEventListener("load", () => r(), { once: true }));
    const fonts =
      // @ts-expect-error fonts may not exist in older browsers
      document.fonts?.ready ?? Promise.resolve();

    Promise.all([minDelay, ready, fonts]).then(finish);
    // Safety net
    const timeout = setTimeout(finish, 4000);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (done) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]" />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            <div className="relative w-20 h-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-gold/20 border-t-gold"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-gold/10 border-b-gold/60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-gold text-xl tracking-widest">S.S</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Loading Portfolio
              </span>
              <div className="h-px w-32 bg-border overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
