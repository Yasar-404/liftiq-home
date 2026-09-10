"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { viewportOnce } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const nodes = [
  "Members",
  "Staff",
  "Attendance",
  "Billing",
  "CRM",
  "Communication",
  "AI",
  "Reports",
  "Business Intelligence",
];

const W = 720;
const H = 460;
const cx = W / 2;
const cy = H / 2;
const rx = 300;
const ry = 180;

function nodePos(i: number) {
  const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
  return { x: cx + Math.cos(angle) * rx, y: cy + Math.sin(angle) * ry };
}

export function PlatformEcosystem() {
  const reduced = useReducedMotion();

  return (
    <Section id="ecosystem" spacing="lg" containerClassName="flex flex-col gap-14">
      <SectionHeading
        eyebrow="Platform ecosystem"
        title="Everything in the gym, connected through one core."
        description="Each part of the operation feeds the same system — so the whole business stays in sync."
        align="center"
      />

      <div className="relative mx-auto w-full max-w-3xl">
        {/* ambient glow behind the core */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(circle,rgba(124,92,255,0.32),transparent 70%)",
          }}
          animate={reduced ? {} : { opacity: [0.45, 0.8, 0.45], scale: [1, 1.12, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg
          viewBox={`-52 -16 ${W + 104} ${H + 32}`}
          className="w-full"
          role="img"
          aria-label="LiftIQ platform ecosystem diagram"
        >
          {/* spokes */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {nodes.map((_, i) => {
              const { x, y } = nodePos(i);
              return (
                <line
                  key={i}
                  className={reduced ? undefined : "ecosys-line"}
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke="var(--color-border-strong)"
                  strokeWidth={1}
                  strokeDasharray="3 5"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              );
            })}
          </motion.g>

          {/* data pulses flowing into the core */}
          {!reduced &&
            nodes.map((_, i) => {
              const { x, y } = nodePos(i);
              return (
                <motion.circle
                  key={`pulse-${i}`}
                  r={2.6}
                  fill="var(--color-accent)"
                  initial={{ cx: x, cy: y, opacity: 0 }}
                  animate={{ cx: [x, cx], cy: [y, cy], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: 1 + i * 0.42,
                    repeatDelay: 1.4,
                    ease: "easeIn",
                    times: [0, 0.12, 0.82, 1],
                  }}
                />
              );
            })}

          {/* outer nodes */}
          {nodes.map((label, i) => {
            const { x, y } = nodePos(i);
            const w = Math.max(72, label.length * 7.2 + 22);
            return (
              <motion.g
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.06 }}
                viewport={viewportOnce}
                transition={{
                  delay: 0.3 + i * 0.06,
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              >
                <g
                  className={reduced ? "ecosys-node" : "ecosys-node ecosys-bob"}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <rect
                    x={x - w / 2}
                    y={y - 15}
                    width={w}
                    height={30}
                    rx={15}
                    fill="var(--color-surface-elevated)"
                    stroke="var(--color-border)"
                  />
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    fontSize={12}
                    fill="var(--color-text-muted)"
                    fontFamily="var(--font-sans)"
                  >
                    {label}
                  </text>
                </g>
              </motion.g>
            );
          })}

          {/* core */}
          <motion.g
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ type: "spring", stiffness: 220, damping: 20, delay: 0.15 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            {!reduced && (
              <>
                <circle
                  className="ecosys-ring"
                  cx={cx}
                  cy={cy}
                  r={40}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth={1}
                />
                <circle
                  className="ecosys-ring"
                  cx={cx}
                  cy={cy}
                  r={40}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth={1}
                  style={{ animationDelay: "1.8s" }}
                />
              </>
            )}

            <circle cx={cx} cy={cy} r={56} fill="var(--color-accent-soft)" />
            <circle
              cx={cx}
              cy={cy}
              r={40}
              fill="var(--color-surface)"
              stroke="var(--color-accent)"
              strokeWidth={1.5}
            />
            {!reduced && (
              <circle
                className="ecosys-spin"
                cx={cx}
                cy={cy}
                r={40}
                fill="none"
                stroke="var(--color-accent)"
                strokeOpacity={0.55}
                strokeWidth={1}
                strokeDasharray="1 7"
              />
            )}
            <text
              x={cx}
              y={cy + 5}
              textAnchor="middle"
              fontSize={15}
              fontWeight={600}
              fill="var(--color-text)"
              fontFamily="var(--font-sans)"
            >
              LiftIQ
            </text>
          </motion.g>
        </svg>
      </div>
    </Section>
  );
}
