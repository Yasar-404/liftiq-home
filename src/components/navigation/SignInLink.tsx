/** Nav link with a slowly rotating gradient outline. */
export function SignInLink() {
  return (
    <a href="#contact" className="group relative inline-flex overflow-hidden rounded-full p-px">
      <span
        aria-hidden="true"
        className="animate-spin-slow absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0%,#7c5cff_12%,#2f80ff_22%,transparent_38%,transparent_100%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="relative rounded-full bg-bg-subtle px-4 py-1.5 text-sm text-text-muted transition-colors duration-200 group-hover:text-text">
        Sign In
      </span>
    </a>
  );
}
