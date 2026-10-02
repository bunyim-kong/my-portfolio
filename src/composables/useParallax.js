import { computed, onMounted, onUnmounted, ref, watch } from "vue";

// One control coordinates motion across the page without changing native scrolling.
const paused = ref(false);
const reducedMotion = ref(false);
export const motionEnabled = computed(
  () => !paused.value && !reducedMotion.value,
);
export const toggleMotion = () => {
  paused.value = !paused.value;
};

export function useParallax(scene) {
  let dispose = () => {};

  onMounted(() => {
    const root = scene.value;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let bounds = root.getBoundingClientRect();
    let needsMeasure = true;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let progress = 0;
    let lastTime = 0;
    const depthElements = [...document.querySelectorAll("[data-scroll-depth]")];
    const activeDepth = new Set();

    const write = () => {
      root.style.setProperty("--pointer-x", x.toFixed(4));
      root.style.setProperty("--pointer-y", y.toFixed(4));
      root.style.setProperty("--scroll-depth", progress.toFixed(4));
      root.style.setProperty("--light-x", `${50 + x * 35}%`);
      root.style.setProperty("--light-y", `${50 + y * 35}%`);
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      x = y = targetX = targetY = progress = 0;
      lastTime = 0;
      write();
      depthElements.forEach((element) =>
        element.style.setProperty("--section-depth", "0"),
      );
    };
    const render = (time) => {
      frame = 0;
      if (!motionEnabled.value || document.hidden) return;
      const ease =
        1 - Math.exp(-Math.min(time - (lastTime || time - 16), 64) / 95);
      lastTime = time;
      if (needsMeasure) {
        bounds = root.getBoundingClientRect();
        const pageTravel = document.documentElement.scrollHeight - innerHeight;
        document.documentElement.style.setProperty(
          "--page-scroll",
          pageTravel > 0 ? String(Math.min(1, scrollY / pageTravel)) : "0",
        );
        if (visible)
          progress = Math.max(0, Math.min(1, -bounds.top / bounds.height));
        for (const element of activeDepth) {
          const rect = element.getBoundingClientRect();
          const depth = Math.max(
            -1,
            Math.min(
              1,
              (innerHeight / 2 - rect.top - rect.height / 2) /
                (innerHeight / 2 + rect.height / 2),
            ),
          );
          element.style.setProperty("--section-depth", depth.toFixed(4));
        }
        needsMeasure = false;
      }
      if (visible) {
        x += (targetX - x) * ease;
        y += (targetY - y) * ease;
        write();
        if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.001)
          frame = requestAnimationFrame(render);
      }
    };
    const schedule = () => {
      if (!frame && motionEnabled.value && !document.hidden)
        frame = requestAnimationFrame(render);
    };
    const measure = () => {
      needsMeasure = true;
      schedule();
    };
    const move = (event) => {
      if (!["mouse", "pen"].includes(event.pointerType) || !motionEnabled.value)
        return;
      targetX = Math.max(
        -1,
        Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1),
      );
      targetY = Math.max(
        -1,
        Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1),
      );
      schedule();
    };
    const leave = () => {
      targetX = targetY = 0;
      schedule();
    };
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
        lastTime = 0;
      } else measure();
    };
    const syncMotion = () => {
      reducedMotion.value = preference.matches;
      document.documentElement.dataset.motion = motionEnabled.value
        ? "on"
        : "off";
      if (!motionEnabled.value) reset();
      else measure();
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === root) visible = entry.isIntersecting;
        else if (entry.isIntersecting) activeDepth.add(entry.target);
        else activeDepth.delete(entry.target);
      }
      measure();
    });
    observer.observe(root);
    depthElements.forEach((element) => observer.observe(element));
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(root);
    depthElements.forEach((element) => resizeObserver.observe(element));
    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerleave", leave);
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    document.addEventListener("visibilitychange", visibility);
    preference.addEventListener("change", syncMotion);
    // A Vue watcher also handles the explicit motion toggle.
    const stop = watch(motionEnabled, syncMotion, { flush: "sync" });
    syncMotion();
    dispose = () => {
      stop();
      reset();
      observer.disconnect();
      resizeObserver.disconnect();
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      document.removeEventListener("visibilitychange", visibility);
      preference.removeEventListener("change", syncMotion);
      delete document.documentElement.dataset.motion;
      document.documentElement.style.removeProperty("--page-scroll");
    };
  });

  onUnmounted(() => dispose());
  return { motionEnabled, reducedMotion, toggleMotion };
}
