"use client";

import { motion } from "motion/react";
import { ecosystemNodes } from "@/data/ecosystem";
import { useFittedViewBox } from "@/hooks/useFittedViewBox";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { viewportOnce } from "@/lib/motion";

const WIDTH = 720;
const HEIGHT = 460;
const CENTER_X = WIDTH / 2;
const CENTER_Y = HEIGHT / 2;
const RADIUS_X = 300;
const RADIUS_Y = 180;
const VIEWBOX_PADDING = 20;
const INITIAL_VIEWBOX = `-52 -16 ${WIDTH + 104} ${HEIGHT + 32}`;

function nodePosition(index: number) {
  const angle = (index / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER_X + Math.cos(angle) * RADIUS_X,
    y: CENTER_Y + Math.sin(angle) * RADIUS_Y,
  };
}

/** Approximate pill width for a label at 12px. */
function labelWidth(label: string) {
  return Math.max(72, label.length * 7.2 + 22);
}

export function EcosystemDiagram() {
  const reducedMotion = useReducedMotion();
  const { ref, viewBox } = useFittedViewBox(VIEWBOX_PADDING, INITIAL_VIEWBOX);

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle,rgba(124,92,255,0.32),transparent 70%)",
        }}
        animate={reducedMotion ? {} : { opacity: [0.45, 0.8, 0.45], scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        ref={ref}
        viewBox={viewBox}
        className="w-full"
        role="img"
        aria-label="LiftIQ platform ecosystem diagram"
      >
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {ecosystemNodes.map((label, i) => {
            const { x, y } = nodePosition(i);
            return (
              <line
                key={label}
                className={reducedMotion ? undefined : "ecosys-line"}
                x1={CENTER_X}
                y1={CENTER_Y}
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

        {!reducedMotion &&
          ecosystemNodes.map((label, i) => {
            const { x, y } = nodePosition(i);
            return (
              <motion.circle
                key={label}
                r={2.6}
                fill="var(--color-accent)"
                initial={{ cx: x, cy: y, opacity: 0 }}
                animate={{ cx: [x, CENTER_X], cy: [y, CENTER_Y], opacity: [0, 1, 1, 0] }}
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

        {ecosystemNodes.map((label, i) => {
          const { x, y } = nodePosition(i);
          const width = labelWidth(label);
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
                className={reducedMotion ? "ecosys-node" : "ecosys-node ecosys-bob"}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <rect
                  x={x - width / 2}
                  y={y - 15}
                  width={width}
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

        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ type: "spring", stiffness: 220, damping: 20, delay: 0.15 }}
          style={{ transformOrigin: `${CENTER_X}px ${CENTER_Y}px` }}
        >
          {!reducedMotion &&
            [undefined, "1.8s"].map((delay) => (
              <circle
                key={delay ?? "first"}
                className="ecosys-ring"
                cx={CENTER_X}
                cy={CENTER_Y}
                r={40}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1}
                style={{ animationDelay: delay }}
              />
            ))}

          <circle cx={CENTER_X} cy={CENTER_Y} r={56} fill="var(--color-accent-soft)" />
          <circle
            cx={CENTER_X}
            cy={CENTER_Y}
            r={40}
            fill="var(--color-surface)"
            stroke="var(--color-accent)"
            strokeWidth={1.5}
          />
          {!reducedMotion && (
            <circle
              className="ecosys-spin"
              cx={CENTER_X}
              cy={CENTER_Y}
              r={40}
              fill="none"
              stroke="var(--color-accent)"
              strokeOpacity={0.55}
              strokeWidth={1}
              strokeDasharray="1 7"
            />
          )}
          <text
            x={CENTER_X}
            y={CENTER_Y + 5}
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
  );
}
