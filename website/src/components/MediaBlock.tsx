type MediaProps = {
  className?: string;
  label?: string;
  accent?: "blue" | "green";
};

export function MediaBlock({
  className = "",
  label,
  accent = "blue",
}: MediaProps) {
  const glow =
    accent === "green"
      ? "from-brand-green/25 via-blue/20 to-ink"
      : "from-blue/30 via-ink to-brand-indigo/40";

  return (
    <div className={`media-frame ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${glow}`} />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 flex items-end p-6">
        {label && (
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
