import Link from "next/link";
import type { VariantId } from "./product";

// Shared across the index and all three variants so a visitor (or a reviewer)
// can jump between the versions and see that each route is genuinely distinct.
export default function VariantSwitch({ active }: { active?: VariantId }) {
  const items: { id: VariantId; short: string }[] = [
    { id: "a", short: "A · bold" },
    { id: "b", short: "B · benefit" },
    { id: "c", short: "C · editorial" },
  ];
  return (
    <nav className="variant-switch" aria-label="A/B/C test variants">
      <span className="label">Forge Studio landing test</span>
      {items.map((it) => (
        <Link
          key={it.id}
          href={`/${it.id}`}
          data-active={active === it.id ? "true" : "false"}
        >
          {it.short}
        </Link>
      ))}
      <span className="spacer" />
      <Link href="/" data-active={active ? "false" : "true"}>
        overview
      </Link>
    </nav>
  );
}
