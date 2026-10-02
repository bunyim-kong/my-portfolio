<script setup>
import ToolkitMarquee from "./ToolkitMarquee.vue";
const base = import.meta.env.BASE_URL;
</script>

<template>
  <section id="about" class="about-section">
    <div class="container section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">02 / THE PERSON BEHIND THE CODE</p>
        </div>
        <span class="about-symbol" data-scroll-depth aria-hidden="true">✳</span>
      </div>
      <div class="about-grid">
        <div class="portrait-wrap" data-scroll-depth>
          <img
            :src="`${base}images/portrait.jpg`"
            alt="Kong Bunyim"
            loading="lazy"
          />
          <div class="portrait-caption">
            <span>KONG BUNYIM</span><span>DEVELOPER / CAMBODIA ↗</span>
          </div>
        </div>
        <div class="about-copy">
          <h2>
            A builder. A learner.<br />A little bit of both<span class="accent"
              >.</span
            >
          </h2>
          <p class="about-lead">
            Good development starts with curiosity.<br />And a willingness to
            figure things out.
          </p>
          <p>
            I’m Kong Bunyim, a full-stack developer based in Phnom Penh,
            studying Web & Mobile Application Development at PSE Institute. With
            three years of hands-on experience across more than ten projects, I
            enjoy connecting thoughtful interfaces with reliable systems.
          </p>
          <p>
            My work spans websites, e-commerce platforms, and management tools.
            I’m comfortable building with Vue, Nuxt, Laravel, and CMS platforms,
            and I care about responsive design, clear documentation, and working
            well with a team.
          </p>
          <div class="about-facts">
            <div>
              <span>BASED IN</span><strong>Mean Chey, Phnom Penh</strong>
            </div>
            <div><span>LANGUAGES</span><strong>Khmer · English</strong></div>
          </div>
          <a class="text-link" :href="`${base}Kong-Bunyim-CV.pdf`" download
            >Get the full story — download CV ↓</a
          >
        </div>
      </div>
      <ToolkitMarquee />
    </div>
  </section>
</template>

<style>
.about-section {
  border-block: 1px solid var(--border);
  background: #141713;
}
.about-symbol {
  font-size: 83px;
  line-height: 1;
  color: var(--accent);
}
.about-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.6fr;
  gap: 70px;
  margin-top: 42px;
  align-items: center;
}
.portrait-wrap {
  height: 450px;
  position: relative;
  background: #292f23;
  border-radius: 5px;
  overflow: hidden;
}
.portrait-wrap > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 67%;
  filter: saturate(0.55);
}
.portrait-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #101811e8;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font: 10px var(--mono);
  letter-spacing: 1px;
}
.portrait-caption span:last-child {
  color: var(--accent);
  font-size: 12px;
  line-height: 1.6;
}
.about-lead {
  font-family: var(--heading);
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
}
.about-copy > p:not(.about-lead) {
  font-size: 13px;
  line-height: 1.9;
  color: var(--muted);
  margin-bottom: 14px;
}
.about-facts {
  display: flex;
  gap: 40px;
  margin-block: 24px;
}
.about-facts > div {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.about-facts span {
  font: 9px var(--mono);
  letter-spacing: 1px;
  color: #74816a;
}
.about-facts strong {
  font-size: 12px;
  font-weight: 400;
}
@media (max-width: 1100px) {
  .about-grid {
    gap: 40px;
  }
}
@media (max-width: 800px) {
  .about-grid {
    grid-template-columns: 0.8fr 1.3fr;
    gap: 28px;
  }
  .portrait-wrap {
    height: 360px;
  }
  .about-lead {
    font-size: 21px;
  }
  .about-copy > p:not(.about-lead) {
    font-size: 12px;
  }
  .about-facts {
    gap: 20px;
    flex-direction: column;
  }
}
@media (max-width: 560px) {
  .about-section .section-heading {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .about-symbol {
    font-size: 50px;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 28px;
    margin-top: 30px;
  }
  .portrait-wrap {
    height: 350px;
    width: 100%;
  }
  .portrait-wrap > img {
    object-position: center 65%;
  }
  .about-copy > p:not(.about-lead) {
    font-size: 13px;
  }
  .about-lead {
    font-size: 22px;
  }
  .about-facts {
    flex-direction: row;
    gap: 26px;
  }
  .about-facts strong {
    font-size: 10px;
  }
}
[data-theme="light"] .about-section {
  background: #eff3e9;
}
[data-theme="light"] .portrait-caption {
  color: #eceee9;
}
[data-theme="light"] .portrait-caption span:last-child {
  color: #b8f87b;
}
[data-theme="light"] .about-facts span {
  color: #627454;
}
.portrait-wrap > img {
  transition:
    transform 0.6s ease,
    filter 0.6s ease;
}
@media (hover: hover) {
  .portrait-wrap:hover > img {
    transform: scale(1.035);
    filter: saturate(0.9);
  }
}
.about-copy .text-link {
  margin-top: 22px;
}
.about-symbol {
  rotate: calc(var(--section-depth, 0) * 65deg);
}
.portrait-wrap > img {
  scale: 1.12;
  translate: 0 calc(var(--section-depth, 0) * 18px);
}
[data-motion="off"] .portrait-wrap > img {
  scale: 1;
  translate: none;
}
@media (prefers-reduced-motion: reduce) {
  .portrait-wrap > img {
    scale: 1;
    translate: none;
  }
}
</style>
