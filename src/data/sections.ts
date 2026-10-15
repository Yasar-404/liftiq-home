/**
 * The homepage sections that appear in navigation, in page order. `id` is the
 * `id` of the matching element, so a link to `/#platform` is a plain anchor: it
 * updates the URL hash, works on direct load, refresh and back/forward, and
 * needs no script. The navbar, mobile menu, footer and the active-section
 * highlight all read from this list.
 */
interface NavSection {
  id: string;
  label: string;
}

export const navSections: NavSection[] = [
  { id: "platform", label: "Platform" },
  { id: "ai", label: "AI Insights" },
  { id: "benefits", label: "Benefits" },
  { id: "security", label: "Security" },
];

/** An in-page link that also works from other routes (such as the 404 page). */
export const sectionHref = (id: string) => `/#${id}`;
