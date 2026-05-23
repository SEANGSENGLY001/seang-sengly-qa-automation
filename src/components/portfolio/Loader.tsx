import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const finish = () => {
      if (cancelled) return;
      setHiding(true);
      setTimeout(() => !cancelled && setDone(true), 600);
    };

    const minDelay = new Promise((r) => setTimeout(r, 1400));
    const ready =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((r) =>
            window.addEventListener("load", () => r(), { once: true }),
          );
    const fonts =
      (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts?.ready ??
      Promise.resolve();

    Promise.all([minDelay, ready, fonts]).then(finish);
    const timeout = setTimeout(finish, 5000);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
    else document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      style={{
        opacity: hiding ? 0 : 1,
        transition: "opacity 600ms ease-in-out",
        pointerEvents: hiding ? "none" : "auto",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] loader-pulse" />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-2 border-gold/15 border-t-gold loader-spin-cw" />
          <div className="absolute inset-3 rounded-full border-2 border-gold/10 border-b-gold/70 loader-spin-ccw" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-gold text-2xl tracking-widest">S.S</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Loading Portfolio
          </span>
          <div className="relative h-px w-40 bg-border overflow-hidden">
            <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent loader-slide" />
          </div>
        </div>
      </div>
    </div>
  );
}
