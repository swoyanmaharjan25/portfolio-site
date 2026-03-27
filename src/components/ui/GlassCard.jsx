export function GlassCard({
  as: Component = "div",
  className = "",
  glow = false,
  variant = "default",
  children,
  ...props
}) {
  const variantClass =
    variant === "strong"
      ? "bg-[image:var(--glass-surface-strong)] border-[color:var(--glass-border-strong)] shadow-[var(--shadow-glass-strong)]"
      : variant === "soft"
        ? "bg-[image:var(--glass-surface-soft)] border-[color:var(--glass-border)] shadow-[var(--shadow-soft)]"
        : "bg-[image:var(--glass-surface)] border-[color:var(--glass-border)] shadow-[var(--shadow-glass)]";

  return (
    <Component
      className={[
        "glass-card relative isolate overflow-hidden rounded-[var(--radius-xl)] border backdrop-blur-[var(--blur-lg)]",
        variantClass,
        glow
          ? "before:absolute before:inset-x-12 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.58),transparent)] before:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_34%)] after:content-['']"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
