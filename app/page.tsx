import Link from "next/link";
import VariantSwitch from "./VariantSwitch";
import { variants, type VariantId } from "./product";
import styles from "./index.module.css";

export default function Overview() {
  const order: VariantId[] = ["a", "b", "c"];
  return (
    <>
      <VariantSwitch />
      <main className={styles.wrap}>
        <header className={styles.head}>
          <p className={styles.kicker}>A/B/C landing-page test</p>
          <h1 className={styles.title}>
            One product. Three landing pages. Separate routes.
          </h1>
          <p className={styles.lede}>
            Each card below opens a genuinely different landing page for the
            same product. Different headline, different layout, different call
            to action. In production, Forge Studio would split live traffic
            across the three and promote the winner.
          </p>
        </header>

        <div className={styles.grid}>
          {order.map((id) => {
            const v = variants[id];
            return (
              <Link
                key={id}
                href={`/${id}`}
                className={styles.card}
                style={{ ["--accent" as string]: v.accent }}
              >
                <span className={styles.badge}>
                  Variant {id.toUpperCase()} · {v.nickname}
                </span>
                <span className={styles.cardHead}>{v.headline}</span>
                <span className={styles.cardSub}>{v.subhead}</span>
                <span className={styles.cardCta}>{v.cta} →</span>
                <span className={styles.route}>/{id}</span>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
