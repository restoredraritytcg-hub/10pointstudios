"use client";

import { useEffect } from "react";

export function SiteBehaviors() {
  useEffect(() => {
    const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const nav = document.querySelector<HTMLElement>(".nav");
    const setOpen = (open: boolean) => {
      document.body.classList.toggle("nav-open", open);
      toggle?.setAttribute("aria-expanded", open ? "true" : "false");
      toggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    const onToggle = () => setOpen(!document.body.classList.contains("nav-open"));
    const onNavClick = (event: Event) => {
      const target = event.target as Element | null;
      if (target?.closest("a")) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    toggle?.addEventListener("click", onToggle);
    nav?.addEventListener("click", onNavClick);
    window.addEventListener("keydown", onKey);

    const header = document.querySelector(".site-header");
    const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    let observer: IntersectionObserver | undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveals.forEach((node) => node.classList.add("in"));
    } else if (reveals.length) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      reveals.forEach((node, index) => {
        node.style.setProperty("--d", `${70 * Math.min(index % 8, 5)}ms`);
        observer?.observe(node);
      });
    }

    return () => {
      toggle?.removeEventListener("click", onToggle);
      nav?.removeEventListener("click", onNavClick);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return null;
}
