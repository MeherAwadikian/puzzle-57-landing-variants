import type { Metadata } from "next";
import VariantSwitch from "../VariantSwitch";
import { product, variants } from "../product";
import styles from "./variant.module.css";

const v = variants.a;

export const metadata: Metadata = {
  title: `${product.name} — ${v.headline}`,
  description: v.subhead,
};

export default function VariantA() {
  return (
    <div className={styles.page} data-variant="a">
      <VariantSwitch active="a" />
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.pill}>Variant A · bold</span>
          <h1 className={styles.headline}>{v.headline}</h1>
          <p className={styles.sub}>{v.subhead}</p>
          <div className={styles.ctaRow}>
            <a className={styles.cta} href="#start">
              {v.cta}
            </a>
          </div>
          <p className={styles.note}>{v.ctaNote}</p>
        </section>

        <section className={styles.features}>
          {product.features.map((f) => (
            <article key={f.title} className={styles.feature}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
