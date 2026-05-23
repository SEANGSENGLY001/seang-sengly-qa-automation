import { motion } from "motion/react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 max-w-3xl"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="h-px w-10 bg-gold" />
        <span className="text-xs uppercase tracking-[0.3em] text-gold/80">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
