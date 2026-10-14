/** True for a path on this site ("/platform"), which should use client-side navigation. */
export function isRoute(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}
