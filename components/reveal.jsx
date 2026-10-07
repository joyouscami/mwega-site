"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/utils";

export function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") { setInView(true); return undefined; }
    const io = new IntersectionObserver((entries) => { if (entries.some((e) => e.isIntersecting)) { setInView(true); io.disconnect(); } }, { rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

export function Reveal({ as: Tag = "div", delay = 0, className, children, ...rest }) {
  const [ref, inView] = useInView();
  return <Tag ref={ref} className={cx("reveal", inView && "is-in", className)} style={delay ? { transitionDelay: delay + "ms" } : undefined} {...rest}>{children}</Tag>;
}
