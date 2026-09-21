"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { DashboardMock } from "@/components/product/DashboardMock";
import { Backdrop } from "@/components/ui/Backdrop";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { blurIn, easeSpring, staggerContainer } from "@/lib/motion";
import { HeroFloatingCards } from "./HeroFloatingCards";
import { ScrollCue } from "./ScrollCue";

const beamMask = "linear-gradient(to bottom, #000, transparent 78%)";
const dashboardMask = "linear-gradient(to bottom, #000 72%, rgba(0,0,0,0.3) 90%, transparent)";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-24 sm:pt-36">
      <Backdrop />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[620px] w-[1100px] max-w-[140vw] -translate-x-1/2 opacity-70"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 0%, transparent 62deg, rgba(124,92,255,0.14) 90deg, rgba(47,128,255,0.12) 120deg, transparent 150deg)",
          maskImage: beamMask,
          WebkitMaskImage: beamMask,
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-bg" />

      <Container size="wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center text-center"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 h-[280px] w-[760px] max-w-[92vw] -translate-x-1/2 rounded-full opacity-50 blur-[110px]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(124,92,255,0.4), transparent 70%)",
            }}
          />

          <motion.h1
            variants={blurIn}
            className="text-display relative max-w-[15ch] text-balance text-text"
          >
            Run your gym. <span className="text-gradient-anim">Smarter.</span>
          </motion.h1>

          <motion.p
            variants={blurIn}
            className="text-lead relative mt-7 max-w-[34rem] text-balance"
          >
            One intelligent platform for members, operations, billing, attendance, and growth.
          </motion.p>

          <motion.div
            variants={blurIn}
            className="relative mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href={site.cta.primary.href} size="lg" withArrow>
              {site.cta.primary.label}
            </Button>
            <Button href={site.cta.secondary.href} size="lg" variant="secondary">
              {site.cta.secondary.label}
            </Button>
          </motion.div>

          <motion.p
            variants={blurIn}
            className="relative mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[0.8rem] text-text-faint"
          >
            <span>Built for independent gyms &amp; studios</span>
            <span className="h-1 w-1 rounded-full bg-text-faint/60" />
            <span>20-minute walkthrough, no slides</span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 44, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.55, duration: 1.1, ease: easeSpring }}
          className="relative mx-auto mt-16 max-w-[1000px]"
        >
          <div className="accent-glow absolute -inset-x-20 -top-16 bottom-[-6rem] -z-10 opacity-80 blur-3xl" />

          <HeroFloatingCards />

          <div
            className="relative max-h-[540px] overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-[linear-gradient(180deg,rgba(124,92,255,0.5),rgba(255,255,255,0.07)_26%,rgba(255,255,255,0.02))] p-px shadow-[0_50px_140px_-40px_rgba(124,92,255,0.4)] sm:max-h-[600px]"
            style={{ maskImage: dashboardMask, WebkitMaskImage: dashboardMask }}
          >
            <DashboardMock />
          </div>
        </motion.div>

        <div className="relative mt-12 flex justify-center">
          <ScrollCue />
        </div>
      </Container>
    </section>
  );
}
