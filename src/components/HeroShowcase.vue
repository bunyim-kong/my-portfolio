<script setup>
import ToolIcon from "./ToolIcon.vue";
defineProps({ motionEnabled: Boolean, reducedMotion: Boolean });
defineEmits(["toggle-motion"]);
const base = import.meta.env.BASE_URL;
</script>

<template>
  <div class="hero-showcase">
    <div class="showcase-label">
      <span class="status-dot"></span> IDEAS, BROUGHT TO LIFE
      <span class="showcase-index">01 — 06</span>
    </div>
    <div class="showcase-stage">
      <div class="preview-sheet" aria-hidden="true"></div>
      <a
        class="showcase-main"
        href="https://bunyim-kong.github.io/LMLP-Tourism/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore LMLP Tourism, opens in a new tab"
      >
        <div class="preview-toolbar">
          <span class="preview-dots" aria-hidden="true"
            ><i></i><i></i><i></i
          ></span>
          <span>LMLP Tourism</span>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M6 14 14 6M6 6h8v8" />
          </svg>
        </div>
        <div class="preview-photo">
          <img
            :src="`${base}images/project-tourism.jpg`"
            alt="Angkor Wat at sunset"
            width="900"
            height="531"
            fetchpriority="high"
          />
          <div class="preview-shade"></div>
          <span class="preview-category">TRAVEL & DISCOVERY</span>
          <div class="preview-title">
            A little closer<br />to Cambodia<span>.</span>
          </div>
        </div>
        <div class="preview-footer">
          <span class="preview-visit">Explore project ↗</span>
        </div>
      </a>
      <a
        class="showcase-detail"
        href="https://bunyim-kong.github.io/apple-real-estate/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore Apple Real Estate, opens in a new tab"
      >
        <div class="detail-image">
          <img
            :src="`${base}images/project-estate.jpg`"
            alt="Poolside view of a modern property"
            width="1170"
            height="785"
          /><span aria-hidden="true">↗</span>
        </div>
        <div class="detail-copy">
          <span>PROPERTY SHOWCASE</span><strong>Apple Real Estate</strong>
        </div>
      </a>
      <div class="showcase-craft">
        <span class="craft-icon" aria-hidden="true">✳</span
        ><span
          >Thoughtfully designed.<br /><strong>Built to be used.</strong></span
        >
      </div>
    </div>
    <div class="showcase-bottom">
      <ul class="showcase-tools" aria-label="Technologies I work with">
        <li v-for="name in ['Vue.js', 'React.js', 'WordPress']" :key="name">
          <ToolIcon :name="name" /><span>{{ name }}</span>
        </li>
      </ul>
      <button
        class="motion-toggle"
        type="button"
        :disabled="reducedMotion"
        :title="
          reducedMotion
            ? 'Reduced motion is enabled in your system settings'
            : undefined
        "
        :aria-pressed="motionEnabled"
        :aria-label="
          reducedMotion
            ? 'Motion disabled by your system preference'
            : motionEnabled
              ? 'Pause page motion'
              : 'Enable page motion'
        "
        @click="$emit('toggle-motion')"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path v-if="motionEnabled" d="M7 5v10M13 5v10" />
          <path v-else d="m7 4 8 6-8 6Z" />
        </svg>
        <span>Motion {{ motionEnabled ? "on" : "off" }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.hero-showcase {
  min-width: 0;
  width: 100%;
  max-width: 540px;
  margin-inline: auto;
  animation: showcase-arrive 1s 0.15s ease both;
}
.showcase-label {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font: 10px var(--mono);
  letter-spacing: 1.2px;
  margin: 0 8px 20px;
}
.showcase-label .status-dot {
  width: 5px;
  height: 5px;
}
.showcase-index {
  margin-left: auto;
  font-size: 9px;
  color: var(--muted);
  opacity: 0.6;
}
.showcase-stage {
  position: relative;
  height: 415px;
  perspective: 1200px;
}
.preview-sheet {
  position: absolute;
  inset: 8px 20px 100px 26px;
  background: linear-gradient(140deg, #b8f87b14, #b8f87b03);
  border: 1px solid #b8f87b30;
  border-radius: 14px;
  transform: translate3d(
      calc(var(--pointer-x, 0) * -9px),
      calc(var(--scroll-depth, 0) * 25px),
      0
    )
    rotate(5deg);
}
.showcase-main {
  position: absolute;
  top: 15px;
  left: 0;
  right: 28px;
  background: #181e1a;
  border: 1px solid #485440;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 65px #0004;
  transform: translate3d(
      calc(var(--pointer-x, 0) * 5px),
      calc(var(--pointer-y, 0) * 4px + var(--scroll-depth, 0) * -20px),
      0
    )
    rotateX(calc(var(--pointer-y, 0) * -2deg))
    rotateY(calc(var(--pointer-x, 0) * 3deg)) rotate(-2deg);
  transition:
    border-color 0.25s,
    box-shadow 0.25s;
}
.showcase-main:hover {
  border-color: var(--accent);
  box-shadow: 0 30px 70px #0005;
}
.preview-toolbar {
  height: 40px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: #a6b49f;
  font: 10px var(--mono);
}
.preview-dots {
  display: flex;
  gap: 4px;
}
.preview-dots i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #76876d;
}
.preview-toolbar > svg {
  width: 15px;
  height: 15px;
  margin-left: auto;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.3;
}
.preview-photo {
  position: relative;
  height: 245px;
  overflow: hidden;
}
.preview-photo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 42%;
  scale: 1.1;
  translate: calc(var(--pointer-x, 0) * -5px)
    calc(var(--pointer-y, 0) * -4px + var(--scroll-depth, 0) * 10px);
}
.preview-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #18231b10 15%, #0c1d10bb);
}
.preview-category {
  position: absolute;
  top: 18px;
  left: 20px;
  font: 8px var(--mono);
  letter-spacing: 1.5px;
  color: #fff;
  padding: 7px 9px;
  border-radius: 30px;
  background: #18251fc9;
  border: 1px solid #ffffff33;
}
.preview-title {
  position: absolute;
  bottom: 22px;
  left: 20px;
  color: #fffef5;
  font: 500 clamp(26px, 2.8vw, 38px)/1.04 var(--heading);
  letter-spacing: -1.5px;
}
.preview-title > span {
  color: #c2f596;
}
.preview-footer {
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  font-size: 10px;
  color: #a9b4a3;
}
.preview-visit {
  color: #c1ee9c;
  white-space: nowrap;
}
.showcase-detail {
  position: absolute;
  z-index: 2;
  right: -8px;
  bottom: 0;
  width: 184px;
  padding: 7px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 13px;
  box-shadow: 0 15px 40px #0005;
  transform: translate3d(
      calc(var(--pointer-x, 0) * 12px),
      calc(var(--pointer-y, 0) * 9px + var(--scroll-depth, 0) * -38px),
      24px
    )
    rotate(4deg);
  transition: border-color 0.25s;
}
.showcase-detail:hover {
  border-color: var(--accent);
}
.detail-image {
  position: relative;
  height: 103px;
  border-radius: 8px;
  overflow: hidden;
}
.detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
.showcase-detail:hover img {
  transform: scale(1.06);
}
.detail-image > span {
  position: absolute;
  top: 7px;
  right: 7px;
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #f6f8f2;
  color: #263d24;
  font-size: 16px;
}
.detail-copy {
  padding: 12px 5px 8px;
}
.detail-copy > span {
  display: block;
  color: var(--muted);
  font: 7px var(--mono);
  letter-spacing: 1px;
  margin-bottom: 6px;
}
.detail-copy strong {
  font: 500 13px var(--heading);
}
.showcase-craft {
  position: absolute;
  left: 8px;
  bottom: 7px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  line-height: 1.8;
  color: var(--muted);
  translate: calc(var(--pointer-x, 0) * -3px)
    calc(var(--scroll-depth, 0) * -10px);
}
.craft-icon {
  font-size: 34px;
  color: var(--accent);
  rotate: calc(var(--scroll-depth, 0) * 70deg);
}
.showcase-craft strong {
  font-weight: 500;
  color: var(--accent);
}
.showcase-bottom {
  margin-top: 30px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.showcase-tools {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 16px;
}
.showcase-tools li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  color: var(--muted);
  white-space: nowrap;
}
.showcase-tools svg {
  width: 17px;
  height: 17px;
  color: var(--accent);
}
.motion-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-shrink: 0;
  padding: 8px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--bg);
  color: var(--muted);
  font: 8px var(--mono);
  white-space: nowrap;
  transition:
    color 0.2s,
    border-color 0.2s;
}
.motion-toggle svg {
  width: 11px;
  height: 11px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.motion-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.motion-toggle:disabled {
  cursor: default;
  opacity: 0.6;
}
@keyframes showcase-arrive {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 1100px) and (min-width: 801px) {
  .showcase-stage {
    height: 365px;
  }
  .preview-photo {
    height: 195px;
  }
  .showcase-detail {
    width: 150px;
    right: 0;
  }
  .detail-image {
    height: 83px;
  }
  .detail-copy strong {
    font-size: 11px;
  }
  .showcase-tools {
    gap: 10px;
  }
  .showcase-tools li {
    font-size: 9px;
    gap: 4px;
  }
  .showcase-tools svg {
    width: 14px;
    height: 14px;
  }
  .showcase-craft {
    font-size: 9px;
    gap: 6px;
  }
  .craft-icon {
    font-size: 25px;
  }
}
@media (max-width: 800px) {
  .hero-showcase {
    margin-top: 20px;
    max-width: 500px;
  }
  .showcase-main {
    rotate: 0deg;
  }
}
@media (max-width: 560px) {
  .showcase-stage {
    height: 360px;
  }
  .preview-photo {
    height: 195px;
  }
  .preview-title {
    font-size: 29px;
    left: 16px;
  }
  .preview-category {
    left: 16px;
  }
  .showcase-main {
    right: 17px;
    transform: translateY(calc(var(--scroll-depth, 0) * -10px)) rotate(-2deg);
  }
  .showcase-detail {
    right: 0;
    width: 148px;
    transform: translateY(calc(var(--scroll-depth, 0) * -18px)) rotate(3deg);
  }
  .detail-image {
    height: 80px;
  }
  .detail-copy strong {
    font-size: 11px;
  }
  .preview-footer {
    font-size: 9px;
    padding-inline: 12px;
  }
  .preview-footer {
    justify-content: flex-start;
  }
  .showcase-craft {
    font-size: 9px;
    gap: 7px;
    left: 2px;
  }
  .craft-icon {
    font-size: 27px;
  }
  .showcase-bottom {
    margin-top: 25px;
    gap: 8px;
  }
  .showcase-tools {
    gap: 10px;
  }
  .showcase-tools li {
    font-size: 9px;
    gap: 4px;
  }
  .showcase-tools svg {
    width: 15px;
    height: 15px;
  }
  .motion-toggle span {
    display: none;
  }
  .motion-toggle {
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 360px) {
  .showcase-stage {
    height: 380px;
  }
  .showcase-detail {
    width: 136px;
  }
  .showcase-craft {
    max-width: calc(100% - 150px);
  }
  .craft-icon {
    flex-shrink: 0;
    font-size: 23px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .showcase-main {
    transform: rotate(-2deg);
  }
  .showcase-detail {
    transform: rotate(3deg);
  }
}
</style>
