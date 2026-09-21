"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Close } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/data/site";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] md:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="absolute inset-0 bg-bg/80 backdrop-blur-xl"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.nav
            className="absolute inset-x-0 top-0 flex flex-col gap-8 border-b border-border bg-bg-subtle px-5 pt-4 pb-10"
            variants={{
              hidden: { y: "-100%" },
              visible: { y: 0 },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-muted transition-colors hover:text-text"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex flex-col">
              {items.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between border-b border-border py-4 text-lg font-medium text-text"
                  >
                    {item.label}
                    <span className="text-text-faint">→</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <Button href={site.cta.primary.href} size="lg" withArrow onClick={onClose}>
                {site.cta.primary.label}
              </Button>
              <Button href="#contact" size="lg" variant="secondary" onClick={onClose}>
                Sign In
              </Button>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
