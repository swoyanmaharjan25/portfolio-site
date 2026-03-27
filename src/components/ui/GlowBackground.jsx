export function GlowBackground({ className = "", absolute = false }) {
  return (
    <div
      className={`pointer-events-none ${absolute ? "absolute" : "fixed"} -z-30 rounded-full blur-[140px] ${className}`}
    />
  );
}
