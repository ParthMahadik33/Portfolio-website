"use client";

import React, { useEffect, useRef } from "react";
import styles from "./CustomCursorOverlay.module.scss";

interface TrailPoint {
  x: number;
  y: number;
  time: number;
}

interface InkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  startTime: number;
  duration: number;
}

interface LeafParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  vAngle: number;
  size: number;
  imgIndex: number;
  startTime: number;
  duration: number;
}

interface ClickRipple {
  x: number;
  y: number;
  startTime: number;
  duration: number;
  maxRadius: number;
}

export const CustomCursorOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only run on desktop devices with fine pointer and hover support
    const hoverMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!hoverMedia.matches) return;

    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = motionMedia.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
    };
    motionMedia.addEventListener("change", handleMotionChange);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // High-DPI Canvas Resizing
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const updateCanvasSize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize, { passive: true });

    // Preload individual botanical leaf trail assets
    const leafSources = [
      "/assets/cursors/trail/leaf-1.png",
      "/assets/cursors/trail/leaf-2.png",
      "/assets/cursors/trail/leaf-3.png",
      "/assets/cursors/trail/leaf-4.png",
      "/assets/cursors/trail/leaf-5.png",
      "/assets/cursors/trail/leaf-6.png",
      "/assets/cursors/trail/leaf-7.png",
      "/assets/cursors/trail/leaf-8.png",
      "/assets/cursors/trail/leaf-9.png",
      "/assets/cursors/trail/leaf-10.png",
    ];
    const leafImages: HTMLImageElement[] = [];
    leafSources.forEach((src) => {
      const img = new Image();
      img.src = src;
      leafImages.push(img);
    });

    // Cursor state variables
    let pointerX = -100;
    let pointerY = -100;
    let ringX = -100;
    let ringY = -100;
    let ringRadius = 0;
    let ringOpacity = 0;
    let isHovering = false;
    let isMouseDown = false;
    let isInsideWindow = false;

    // Trail buffers
    let trailPoints: TrailPoint[] = [];
    const maxTrailDuration = 420; // ms

    let inkParticles: InkParticle[] = [];
    const maxInkParticles = 16;
    let lastInkSpawnTime = 0;

    let leafParticles: LeafParticle[] = [];
    const maxLeaves = 5;
    let distanceSinceLastLeaf = 0;
    let lastPointerX = -100;
    let lastPointerY = -100;

    let ripples: ClickRipple[] = [];

    // Animation frame management
    let animationFrameId: number | null = null;
    let isLoopRunning = false;

    const wakeLoop = () => {
      if (!isLoopRunning) {
        isLoopRunning = true;
        animationFrameId = requestAnimationFrame(renderLoop);
      }
    };

    const renderLoop = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      let hasActiveElements = false;

      // 1. Draw Dashed Vermilion Trail Path (smooth Catmull-Rom / midpoint splines)
      if (!isReducedMotion && trailPoints.length > 1) {
        // Purge expired trail points
        trailPoints = trailPoints.filter((pt) => timestamp - pt.time <= maxTrailDuration);

        if (trailPoints.length > 1) {
          hasActiveElements = true;

          // Draw fading segments
          for (let i = 1; i < trailPoints.length; i++) {
            const pPrev = trailPoints[i - 1];
            const pCurr = trailPoints[i];
            const age = timestamp - pCurr.time;
            const progress = age / maxTrailDuration;
            const alpha = Math.max(0, (1 - progress) * 0.45);

            if (alpha > 0.01) {
              ctx.beginPath();
              ctx.setLineDash([3, 4]); // Calligraphic dashed path from reference sheet
              ctx.lineCap = "round";
              ctx.lineJoin = "round";
              ctx.strokeStyle = `rgba(181, 40, 45, ${alpha.toFixed(3)})`;
              ctx.lineWidth = Math.max(0.6, 1.25 * (1 - progress * 0.4));
              ctx.moveTo(pPrev.x, pPrev.y);
              ctx.lineTo(pCurr.x, pCurr.y);
              ctx.stroke();
            }
          }
          ctx.setLineDash([]); // Reset dash for non-dashed shapes
        }
      }

      // 2. Draw Soft Vermilion Ink Droplets Along Trail
      if (!isReducedMotion && inkParticles.length > 0) {
        hasActiveElements = true;
        const remainingInk: InkParticle[] = [];

        for (let i = 0; i < inkParticles.length; i++) {
          const p = inkParticles[i];
          const elapsed = timestamp - p.startTime;
          const progress = elapsed / p.duration;

          if (progress < 1) {
            remainingInk.push(p);
            // Ease out fade
            const alpha = (1 - progress) * 0.52;
            const currentR = p.radius * (1 - progress * 0.25);

            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(currentR, 0.4), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(181, 40, 45, ${alpha.toFixed(3)})`;
            ctx.fill();

            // Very gentle ink drift
            p.x += p.vx;
            p.y += p.vy;
          }
        }
        inkParticles = remainingInk;
      }

      // 3. Draw Floating Engraved Botanical Leaves
      if (!isReducedMotion && leafParticles.length > 0) {
        hasActiveElements = true;
        const remainingLeaves: LeafParticle[] = [];

        for (let i = 0; i < leafParticles.length; i++) {
          const lf = leafParticles[i];
          const elapsed = timestamp - lf.startTime;
          const progress = elapsed / lf.duration;

          if (progress < 1) {
            remainingLeaves.push(lf);
            const img = leafImages[lf.imgIndex];

            if (img && img.complete && img.naturalWidth > 0) {
              // Fade in slightly then fade out smoothly
              const alpha = progress < 0.15 ? progress / 0.15 * 0.72 : (1 - progress) * 0.72;

              ctx.save();
              ctx.translate(lf.x, lf.y);
              ctx.rotate(lf.angle);
              ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

              const aspect = img.naturalHeight / img.naturalWidth;
              const w = lf.size;
              const h = lf.size * aspect;

              ctx.drawImage(img, -w / 2, -h / 2, w, h);
              ctx.restore();
            }

            // Drift and tumble
            lf.x += lf.vx;
            lf.y += lf.vy;
            lf.angle += lf.vAngle;
          }
        }
        leafParticles = remainingLeaves;
      }

      // 4. Draw Click Ripples (Concentric circles matching reference animation frames)
      if (!isReducedMotion && ripples.length > 0) {
        hasActiveElements = true;
        const remainingRipples: ClickRipple[] = [];

        for (let i = 0; i < ripples.length; i++) {
          const r = ripples[i];
          const elapsed = timestamp - r.startTime;
          const progress = elapsed / r.duration;

          if (progress < 1) {
            remainingRipples.push(r);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const outerRadius = 4 + (r.maxRadius - 4) * easeOut;
            const innerRadius = outerRadius * 0.58;
            const alpha = (1 - easeOut) * 0.48;

            // Center solid ink dot
            if (progress < 0.6) {
              ctx.beginPath();
              ctx.arc(r.x, r.y, 2.2 * (1 - progress / 0.6), 0, Math.PI * 2);
              ctx.fillStyle = `rgba(181, 40, 45, ${alpha.toFixed(3)})`;
              ctx.fill();
            }

            // Middle solid ring
            ctx.beginPath();
            ctx.arc(r.x, r.y, innerRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(181, 40, 45, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();

            // Outer dashed ring (as seen in reference 8-frame ripple animation)
            ctx.beginPath();
            ctx.setLineDash([3, 3]);
            ctx.arc(r.x, r.y, outerRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(181, 40, 45, ${(alpha * 0.75).toFixed(3)})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
        ripples = remainingRipples;
      }

      // 5. Draw Subtle Vermilion Hover Reticle Ring (Matching "CURSOR HOVER" in reference)
      if (isInsideWindow) {
        const lerpFactor = isReducedMotion ? 1 : 0.22;
        ringX += (pointerX - ringX) * lerpFactor;
        ringY += (pointerY - ringY) * lerpFactor;

        const targetRadius = isHovering ? (isMouseDown ? 11 : 15) : 0;
        const targetOpacity = isHovering ? (isMouseDown ? 0.62 : 0.46) : 0;

        ringRadius += (targetRadius - ringRadius) * lerpFactor;
        ringOpacity += (targetOpacity - ringOpacity) * lerpFactor;

        if (ringOpacity > 0.01 && ringRadius > 1) {
          hasActiveElements = true;

          // Main outer hover ring
          ctx.beginPath();
          ctx.arc(ringX, ringY, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(181, 40, 45, ${ringOpacity.toFixed(3)})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();

          // Soft inner concentric whisper
          ctx.beginPath();
          ctx.arc(ringX, ringY, ringRadius * 0.68, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(181, 40, 45, ${(ringOpacity * 0.35).toFixed(3)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Subtle center tint
          ctx.beginPath();
          ctx.arc(ringX, ringY, ringRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(181, 40, 45, ${(ringOpacity * 0.06).toFixed(3)})`;
          ctx.fill();
        }
      }

      // Check if loop should stay awake
      if (
        hasActiveElements ||
        isHovering ||
        trailPoints.length > 0 ||
        inkParticles.length > 0 ||
        leafParticles.length > 0 ||
        ripples.length > 0
      ) {
        animationFrameId = requestAnimationFrame(renderLoop);
      } else {
        isLoopRunning = false;
        animationFrameId = null;
      }
    };

    // Pointer Move Handler
    const handlePointerMove = (e: PointerEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      isInsideWindow = true;

      if (ringX < 0) {
        ringX = pointerX;
        ringY = pointerY;
      }

      const now = performance.now();

      // Check whether target or ancestor is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, [role="button"], input[type="submit"], input[type="button"], label[for], summary, select, [tabindex="0"]'
        );
        isHovering = !!interactive;
      }

      if (!isReducedMotion) {
        // Record trail point for dashed line
        trailPoints.push({ x: pointerX, y: pointerY, time: now });

        // Calculate distance moved
        if (lastPointerX >= 0) {
          const dx = pointerX - lastPointerX;
          const dy = pointerY - lastPointerY;
          const dist = Math.hypot(dx, dy);

          distanceSinceLastLeaf += dist;

          // 1. Spawn tiny vermilion ink particles along path
          if (now - lastInkSpawnTime >= 50 && inkParticles.length < maxInkParticles) {
            lastInkSpawnTime = now;
            // Varied ink radii from reference sheet: 1.0px to 2.8px
            const radii = [0.9, 1.4, 2.0, 2.8];
            const chosenRadius = radii[Math.floor(Math.random() * radii.length)];

            inkParticles.push({
              x: pointerX + (Math.random() - 0.5) * 6,
              y: pointerY + (Math.random() - 0.5) * 6,
              vx: (Math.random() - 0.5) * 0.25,
              vy: (Math.random() - 0.5) * 0.25,
              radius: chosenRadius,
              startTime: now,
              duration: 380 + Math.random() * 120, // ~450ms
            });
          }

          // 2. Spawn occasional floating botanical leaf (every ~85px of travel)
          if (distanceSinceLastLeaf >= 85 && leafParticles.length < maxLeaves) {
            distanceSinceLastLeaf = 0;
            const moveAngle = Math.atan2(dy, dx);
            const side = Math.random() > 0.5 ? 1 : -1;
            const offsetDist = 6 + Math.random() * 8;

            leafParticles.push({
              x: pointerX + Math.cos(moveAngle + (Math.PI / 2) * side) * offsetDist,
              y: pointerY + Math.sin(moveAngle + (Math.PI / 2) * side) * offsetDist,
              vx: (Math.random() - 0.5) * 0.35 + (dx / dist) * 0.2,
              vy: (Math.random() - 0.5) * 0.35 + (dy / dist) * 0.2,
              angle: moveAngle + (Math.random() - 0.5) * 0.8,
              vAngle: (Math.random() - 0.5) * 0.035, // gentle rotation
              size: 13 + Math.random() * 5, // 13px - 18px miniature leaf size
              imgIndex: Math.floor(Math.random() * leafImages.length),
              startTime: now,
              duration: 650 + Math.random() * 150, // ~750ms lifespan
            });
          }
        }

        lastPointerX = pointerX;
        lastPointerY = pointerY;
      }

      wakeLoop();
    };

    // Pointer Down (Click ripple)
    const handlePointerDown = (e: PointerEvent) => {
      isMouseDown = true;
      pointerX = e.clientX;
      pointerY = e.clientY;

      if (!isReducedMotion) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          startTime: performance.now(),
          duration: 380,
          maxRadius: isHovering ? 20 : 15,
        });
        if (ripples.length > 5) {
          ripples.shift();
        }
      }

      wakeLoop();
    };

    const handlePointerUp = () => {
      isMouseDown = false;
      wakeLoop();
    };

    const handlePointerLeave = () => {
      isInsideWindow = false;
      isHovering = false;
      isMouseDown = false;
      wakeLoop();
    };

    const handlePointerEnter = (e: PointerEvent) => {
      isInsideWindow = true;
      pointerX = e.clientX;
      pointerY = e.clientY;
      wakeLoop();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    document.documentElement.addEventListener("pointerenter", handlePointerEnter, { passive: true });

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      motionMedia.removeEventListener("change", handleMotionChange);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      document.documentElement.removeEventListener("pointerenter", handlePointerEnter);

      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.cursorCanvas} aria-hidden="true" />;
};
