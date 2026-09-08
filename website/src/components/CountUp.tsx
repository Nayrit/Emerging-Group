"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const numeric = value.replace(/[^\d.]/g, "");
  const hasNumber = numeric.length > 0 && !Number.isNaN(Number(numeric));

  useEffect(() => {
    if (!hasNumber) return;
    const node = ref.current;
    if (!node) return;

    const target = Number(numeric);
    const suffix = value.replace(numeric, "");
    let frame = 0;
    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1100;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          const formatted =
            target >= 100 && Number.isInteger(target)
              ? Math.round(current).toString()
              : current.toFixed(target % 1 === 0 ? 0 : 1);
          setDisplay(`${formatted}${suffix}`);
          frame = progress;
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      void frame;
    };
  }, [hasNumber, numeric, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
