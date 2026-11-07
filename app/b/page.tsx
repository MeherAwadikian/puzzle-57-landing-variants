import type { Metadata } from "next";
import VariantSwitch from "../VariantSwitch";
import { product, variants } from "../product";
import styles from "./variant.module.css";

const v = variants.b;

export const metadata: Metadata = {
  title: `${product.name} — ${v.headline}`,
  description: v.subhead,
};

const benefits = [
  "Every page is three pages: A, B, and C, live at once.",
  "Traffic splits itself evenly, no tagging or scripts to wire up.",
  "The winner is promoted automatically once it clears significance.",
];

export default function VariantB() {
  return (
    <div className={styles.page} data-variant="b">
      <VariantSwitch active="b" />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.copy}>
            <span className={styles.pill}>Variant B · benefit-led</span>
            <h1 className={styles.headline}>{v.headline}</h1>
            <p className={styles.sub}>{v.subhead}</p>
            <ul className={styles.benefits}>
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className={styles.ctaRow}>
              <a className={styles.ctaPrimary} href="#demo">
                {v.cta}
              </a>
              <a className={styles.ctaSecondary} href="#tour">
                Take the product tour
              </a>
            </div>
            <p className={styles.note}>{v.ctaNote}</p>
          </div>

          <aside className={styles.panel} aria-label="Results">
            <p className={styles.panelTitle}>What teams see</p>
            <ul className={styles.stats}>
              {product.metrics.map((m) => (
                <li key={m.label}>
                  <span className={styles.statValue}>{m.value}</span>
                  <span className={styles.statLabel}>{m.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}
