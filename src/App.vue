<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import WorkSection from "./components/WorkSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import StackStrip from "./components/StackStrip.vue";
const currentSection = ref("home");
let sectionObserver;
let revealObserver;
onMounted(() => {
  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) currentSection.value = entry.target.id;
    },
    { rootMargin: "-15% 0px -60% 0px" },
  );
  document
    .querySelectorAll("main > section[id]")
    .forEach((section) => sectionObserver.observe(section));
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            revealObserver.unobserve(entry.target);
          }
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        "#work .section-heading, #work .work-toolbar, #work .project-grid, #about .section-heading, .about-grid, .toolkit, #experience .section-heading, .experience-label, .experience-item, .education, #contact > .container",
      )
      .forEach((element) => {
        element.classList.add("reveal", "reveal-pending");
        revealObserver.observe(element);
      });
  }
});
onUnmounted(() => {
  sectionObserver?.disconnect();
  revealObserver?.disconnect();
});
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <SiteHeader :current-section="currentSection" />
  <main id="main">
    <HeroSection />
    <StackStrip />
    <WorkSection />
    <AboutSection />
    <ExperienceSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
