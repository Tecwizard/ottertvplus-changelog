export default function Tag({ label }: { label: string }) {
  const base =
    "text-xs font-semibold px-2.5 py-1 rounded-full border inline-flex items-center";

  const map: Record<string, string> = {
    Feature:
      "border-jellyfinPurple/40 bg-jellyfinPurple/10 text-jellyfinPurple",
    Fix: "border-jellyfinBlue/40 bg-jellyfinBlue/10 text-jellyfinBlue",
    Maintenance: "border-white/15 bg-white/5 text-white/80",
    Update: "border-white/15 bg-white/5 text-white/80"
  };

  const style = map[label] ?? "border-white/15 bg-white/5 text-white/80";

  return <span className={`${base} ${style}`}>{label}</span>;
}
