import type { Metadata } from "next";
import VariantSwitch from "../VariantSwitch";
import { product, variants } from "../product";
import styles from "./variant.module.css";

const v = variants.c;

export const metadata: Metadata = {
  title: `${product.name} — ${v.headline}`,
  description: v.subhead,
};

export default function VariantC() {
  return (
    <div className={styles.page} data-variant="c">
      <VariantSwitch active="c" />
      <main className={styles.main}>
        <article className={styles.essay}>
          <p className={styles.eyebrow}>Variant C · editorial</p>
          <h1 className={styles.headline}>{v.headline}</h1>
          <p className={styles.lede}>{v.subhead}</p>

          <blockquote className={styles.quote}>
            &ldquo;We shipped eleven landing pages the week we switched. The
            last time we moved that fast, we had a designer, a dev, and a
            standing Thursday meeting.&rdquo;
            <cite>— Dana R., founder, two-person startup</cite>
          </blockquote>

          <dl className={styles.facts}>
            {product.metrics.map((m) => (
              <div key={m.label} className={styles.fact}>
                <dt>{m.value}</dt>
                <dd>{m.label}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.ctaWrap}>
            <a className={styles.cta} href="#manifesto">
              {v.cta}
            </a>
            <span className={styles.note}>{v.ctaNote}</span>
          </div>
        </article>
      </main>
    </div>
  );
}
