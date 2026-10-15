/**
 * The homepage's anchor targets that appear in navigation, in page order.
 * `id` is the `id` of the matching <section>; the navbar, mobile menu, footer
 * and the active-section highlight all read from this list.
 */
export interface NavSection {
  id: string;
  label: string;
}

export const navSections: NavSection[] = [
  { id: "product", label: "Product" },
  { id: "platform", label: "Platform" },
  { id: "ai-insights", label: "AI Insights" },
  { id: "benefits", label: "Benefits" },
  { id: "security", label: "Security" },
];

/** In-page link that also works from other routes (such as the 404 page). */
export const sectionHref = (id: string) => `/#${id}`;
