// Single source of truth for the product being advertised. All three landing
// page variants (/a, /b, /c) sell the SAME product with the SAME underlying
// facts; only the headline, value proposition, layout, and CTA differ. That is
// what makes this a real A/B/C test rather than three unrelated pages.

export const product = {
  name: "Forge Studio",
  // Shared factual claims the copy on every variant is allowed to draw from.
  metrics: [
    { value: "11 min", label: "median time from brief to shipped page" },
    { value: "3.2x", label: "average lift in signup conversion" },
    { value: "40k+", label: "pages shipped by teams on Forge" },
  ],
  features: [
    {
      title: "Brief to page",
      body: "Describe the offer in a sentence. Forge drafts the hero, the proof, and the call to action, grounded in your brand kit.",
    },
    {
      title: "Built-in experiments",
      body: "Every page ships as an A/B/C test by default. Traffic splits itself and promotes the winner once it reaches significance.",
    },
    {
      title: "Deploy anywhere",
      body: "One command pushes to Vercel, Cloudflare, or your own edge. No lock-in, no hand-off, no waiting on the platform team.",
    },
  ],
} as const;

export type VariantId = "a" | "b" | "c";

// Per-variant positioning. This is the only thing the test is changing.
export const variants: Record<
  VariantId,
  {
    id: VariantId;
    nickname: string;
    headline: string;
    subhead: string;
    cta: string;
    ctaNote: string;
    accent: string; // primary accent colour for this variant
  }
> = {
  a: {
    id: "a",
    nickname: "bold",
    headline: "Ship a landing page before your coffee gets cold.",
    subhead:
      "Forge Studio turns a one-line brief into a conversion-ready page you can launch in minutes, not sprints.",
    cta: "Start building free",
    ctaNote: "No card. Your first three pages are on us.",
    accent: "#6d5efc",
  },
  b: {
    id: "b",
    nickname: "benefit-led",
    headline: "Stop guessing which page converts. Test all three.",
    subhead:
      "Forge ships every landing page as a live A/B/C experiment, splits the traffic for you, and promotes the winner automatically.",
    cta: "See it split traffic",
    ctaNote: "Watch a real experiment reach significance in the demo.",
    accent: "#10b981",
  },
  c: {
    id: "c",
    nickname: "editorial",
    headline: "The marketing team that never files a ticket.",
    subhead:
      "Forge Studio gives founders a landing page as fast as they can describe it, and the autonomy to change it without anyone's calendar.",
    cta: "Read the manifesto",
    ctaNote: "Then build your first page in the same breath.",
    accent: "#f59e0b",
  },
};
