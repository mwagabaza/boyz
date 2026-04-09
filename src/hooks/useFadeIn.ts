import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement>(rootMargin = "-60px") {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      // Fallback: show everything immediately
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );

    targets.forEach((target) => observer.observe(target));

    // Safety fallback: reveal everything after 4s in case observer fails
    const timeout = setTimeout(() => {
      targets.forEach((t) => t.classList.add("is-visible"));
    }, 4000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [rootMargin]);

  return ref;
}
