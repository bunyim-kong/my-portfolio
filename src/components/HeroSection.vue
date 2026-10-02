<script setup>
import { ref } from "vue";
import HeroShowcase from "./HeroShowcase.vue";
import ParallaxBackdrop from "./ParallaxBackdrop.vue";
import { useParallax } from "../composables/useParallax";
const base = import.meta.env.BASE_URL;
const scene = ref(null);
const { motionEnabled, reducedMotion, toggleMotion } = useParallax(scene);
</script>

<template>
  <section id="home" ref="scene" class="hero container">
    <ParallaxBackdrop />
    <div class="hero-topline">
      <span class="eyebrow"
        ><span class="status-dot"></span> FULL-STACK DEVELOPER</span
      ><span class="location">PHNOM PENH, CAMBODIA <span>↗</span></span>
    </div>
    <div class="hero-grid">
      <div class="hero-copy">
        <p class="hello">Hello, world. I’m Bunyim.</p>
        <h1>
          Turning ideas<br />into <span class="accent">digital</span><br /><span
            class="accent"
            >experiences.</span
          ><span class="heading-dot">✳</span>
        </h1>
        <p class="hero-description">
          I build thoughtful websites and powerful web applications.<br
            class="desktop-break"
          />
          From the first pixel to the last line of code.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#work"
            >Explore my work <span>↗</span></a
          ><a
            class="button secondary"
            :href="`${base}Kong-Bunyim-CV.pdf`"
            download
            >Download CV <span>↓</span></a
          >
        </div>
      </div>
      <HeroShowcase
        :motion-enabled="motionEnabled"
        :reduced-motion="reducedMotion"
        @toggle-motion="toggleMotion"
      />
    </div>
    <div class="hero-bottom">
      <div class="hero-stats">
        <div>
          <strong>3<span>+</span></strong
          ><span>Years of hands-on experience</span>
        </div>
        <div>
          <strong>10<span>+</span></strong
          ><span>Projects built & explored</span>
        </div>
      </div>
      <a class="scroll-cue" href="#work">SCROLL TO EXPLORE <span>↓</span></a>
    </div>
  </section>
</template>

<style>
h1 {
  margin: 0;
}
h1 {
  font-family: var(--heading);
  font-weight: 500;
}
.hero {
  padding-top: 44px;
  background-image: radial-gradient(#7e8e6f16 1px, transparent 1px);
  background-size: 25px 25px;
}
.hero-topline {
  display: flex;
  justify-content: space-between;
}
.location {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--muted);
}
.location > span {
  margin-left: 12px;
  color: var(--accent);
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.18fr 1fr;
  gap: 30px;
  padding-top: 50px;
  align-items: center;
}
.hello {
  font-size: 15px;
  color: #b5bbae;
  margin-bottom: 19px;
}
h1 {
  font-size: clamp(50px, 5.2vw, 74px);
  letter-spacing: -3.8px;
  line-height: 1.08;
  position: relative;
}
.heading-dot {
  display: inline-block;
  color: var(--accent);
  font-size: 46px;
  margin-left: 18px;
  vertical-align: top;
}
.hero-description {
  font-size: 15px;
  line-height: 1.8;
  color: var(--muted);
  margin-top: 25px;
}
.hero-actions {
  display: flex;
  gap: 13px;
  margin-top: 30px;
}
.button {
  display: inline-flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  padding: 15px 20px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 600;
  transition:
    transform 0.2s,
    background 0.2s;
}
.button:hover {
  transform: translateY(-3px);
}
.primary {
  background: var(--accent);
  color: #192211;
}
.primary:hover {
  background: #c9ff99;
}
.secondary {
  border: 1px solid #3d4437;
  background: #151814;
}
.secondary:hover {
  background: #252b21;
}
.hero-bottom {
  margin-top: 55px;
  padding: 27px 0 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border);
}
.hero-stats {
  display: flex;
  gap: 40px;
}
.hero-stats > div {
  display: flex;
  align-items: center;
  gap: 13px;
}
.hero-stats strong {
  font-family: var(--heading);
  font-size: 34px;
  font-weight: 500;
  letter-spacing: -1px;
}
.hero-stats strong span {
  color: var(--accent);
  font-size: 22px;
}
.hero-stats > div > span {
  font-size: 11px;
  color: var(--muted);
  max-width: 110px;
  line-height: 1.6;
}
.scroll-cue {
  font: 9px var(--mono);
  letter-spacing: 1px;
  display: flex;
  gap: 25px;
  align-items: center;
  color: var(--muted);
}
.scroll-cue > span {
  border: 1px solid var(--border);
  padding: 8px 12px;
  border-radius: 50%;
  color: var(--accent);
  font-size: 16px;
}

@media (min-width: 1600px) {
  .hero-grid {
    padding-top: 65px;
  }
  h1 {
    font-size: 82px;
  }
}
@media (max-width: 1100px) {
  .hero-grid {
    grid-template-columns: 1.1fr 1fr;
    gap: 15px;
  }
  h1 {
    font-size: 56px;
    letter-spacing: -3px;
  }
  .heading-dot {
    font-size: 32px;
    margin-left: 8px;
  }
}
@media (max-width: 800px) {
  .hero {
    padding-top: 30px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    padding-top: 35px;
    gap: 25px;
  }
  .hero-copy {
    max-width: 600px;
  }
  h1 {
    font-size: clamp(52px, 8.7vw, 76px);
    letter-spacing: -3px;
  }
  .hero-bottom {
    margin-top: 37px;
  }
}
@media (max-width: 560px) {
  .hero-topline .eyebrow {
    font-size: 11px;
    letter-spacing: 1px;
  }
  .location {
    font-size: 7px;
    letter-spacing: 0;
    max-width: 100px;
    text-align: right;
    line-height: 1.6;
  }
  .location > span {
    display: none;
  }
  .hello {
    font-size: 13px;
    margin-bottom: 18px;
  }
  .hero-grid {
    padding-top: 32px;
  }
  h1 {
    font-size: clamp(43px, 10.7vw, 60px);
    letter-spacing: -2.6px;
  }
  .heading-dot {
    font-size: 29px;
    margin-left: 7px;
  }
  .hero-description {
    font-size: 13px;
    line-height: 1.8;
    margin-top: 20px;
  }
  .desktop-break {
    display: none;
  }
  .hero-actions {
    gap: 9px;
    margin-top: 24px;
  }
  .button {
    padding: 13px 14px;
    gap: 14px;
    font-size: 12px;
  }
  .hero-bottom {
    margin-top: 24px;
    padding-block: 22px;
    align-items: end;
  }
  .hero-stats {
    gap: 20px;
  }
  .hero-stats > div {
    display: block;
  }
  .hero-stats strong {
    font-size: 29px;
  }
  .hero-stats > div > span {
    display: block;
    font-size: 9px;
    max-width: 100px;
    margin-top: 3px;
  }
  .scroll-cue {
    font-size: 0;
    gap: 0;
  }
  .scroll-cue > span {
    font-size: 15px;
  }
}
[data-theme="light"] .hero {
  background-image: radial-gradient(#658d4430 1px, transparent 1px);
}
[data-theme="light"] .hello {
  color: #59634f;
}
[data-theme="light"] .primary {
  background: #396b20;
  color: #fff;
}
[data-theme="light"] .primary:hover {
  background: #2e5719;
}
[data-theme="light"] .secondary {
  background: #f0f4e9;
  border-color: #bccbad;
}
[data-theme="light"] .secondary:hover {
  background: #e2ebd8;
}
.hero-copy {
  animation: hero-arrive 0.8s ease both;
}
.scroll-cue > span {
  transition:
    transform 0.25s,
    border-color 0.25s;
}
.scroll-cue:hover > span {
  transform: translateY(4px);
  border-color: var(--accent);
}
@keyframes hero-arrive {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 800px) {
  .hero-bottom {
    margin-top: 65px;
  }
}
@media (max-width: 560px) {
  .hero-bottom {
    margin-top: 60px;
  }
}
@media (max-width: 800px) {
  .hero-bottom {
    margin-top: 35px;
  }
}
@media (max-width: 560px) {
  .hero-bottom {
    margin-top: 30px;
  }
}
.hero {
  position: relative;
  isolation: isolate;
  --pointer-x: 0;
  --pointer-y: 0;
  --scroll-depth: 0;
}
.hero-grid > * {
  min-width: 0;
}
</style>
