<script setup>
import { ref } from "vue";
import ToolIcon from "./ToolIcon.vue";
const paused = ref(false);
const tools = [
  ["Vue.js", "#65c99a"],
  ["Nuxt.js", "#54dca1"],
  ["React.js", "#75d7f1"],
  ["Next.js", "var(--accent)"],
  ["JavaScript", "#efd265"],
  ["HTML", "#ef9573"],
  ["CSS", "#80b7f2"],
  ["WordPress", "#82bed9"],
  ["Laravel", "#f5867f"],
  ["PHP", "#aeb4ef"],
  ["Java", "#eab58a"],
  ["Spring Boot", "#97c76f"],
  ["Express", "var(--accent)"],
  ["Strapi", "#b1a0fa"],
  ["MySQL", "#86c3df"],
  ["PostgreSQL", "#95bbdf"],
  ["MongoDB", "#8ecd83"],
  ["Figma", "#f1a6bf"],
  ["Git", "#ed947c"],
  ["GitHub", "var(--accent)"],
  ["Trello", "#83b7ef"],
  ["Documentation", "#dbbd86"],
];
</script>

<template>
  <div class="toolkit">
    <div class="skills-heading">
      <div>
        <p class="eyebrow">WHAT I WORK WITH</p>
        <p class="toolkit-description">
          A flexible toolkit. A consistent attention to detail.
        </p>
      </div>
      <button
        class="marquee-toggle"
        type="button"
        :aria-pressed="paused"
        :aria-label="
          paused ? 'Resume toolkit scrolling' : 'Pause toolkit scrolling'
        "
        @click="paused = !paused"
      >
        <span aria-hidden="true">{{ paused ? "▶" : "Ⅱ" }}</span>
        {{ paused ? "Resume" : "Pause" }}
      </button>
    </div>
    <div
      class="toolkit-window"
      :class="{ paused }"
      tabindex="0"
      role="region"
      aria-label="Tools I use. Scrolling pauses on hover or keyboard focus."
    >
      <div class="toolkit-track">
        <ul
          v-for="copy in 2"
          :key="copy"
          class="toolkit-group"
          :aria-hidden="copy === 2 ? 'true' : undefined"
        >
          <li
            v-for="[name, color] in tools"
            :key="name"
            class="tool-chip"
            :style="{ '--tool-color': color }"
          >
            <span class="tool-icon"><ToolIcon :name="name" /></span>
            <span>{{ name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <p class="toolkit-hint">
      Always learning, always building.
      <span>Hover to take a closer look.</span>
    </p>
  </div>
</template>

<style scoped>
.toolkit {
  margin-top: 65px;
  min-width: 0;
}
.skills-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.toolkit-description {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
  margin-top: 12px;
}
.marquee-toggle {
  display: flex;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  border: 1px solid var(--border);
  border-radius: 50px;
  padding: 10px 15px;
  background: var(--bg);
  color: var(--accent);
  font: 12px var(--mono);
  transition:
    background 0.2s,
    border-color 0.2s;
}
.marquee-toggle:hover {
  background: var(--panel);
  border-color: var(--accent);
}
.toolkit-window {
  overflow: hidden;
  margin-top: 24px;
  padding-block: 10px;
  border-radius: 8px;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 4%,
    #000 96%,
    transparent
  );
}
.toolkit-window:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}
.toolkit-track {
  display: flex;
  width: max-content;
  animation: toolkit-scroll 85s linear infinite;
}
.toolkit-group {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px 0 0;
  margin: 0;
  list-style: none;
  flex-shrink: 0;
}
.tool-chip {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 174px;
  padding: 20px 24px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  font: 500 16px var(--heading);
  white-space: nowrap;
  transition:
    border-color 0.25s,
    background 0.25s,
    transform 0.25s,
    box-shadow 0.25s;
}
.tool-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--panel);
  color: var(--tool-color);
  transition: transform 0.25s;
}
.tool-chip:hover {
  border-color: var(--accent);
  background: var(--panel);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px #0002;
}
.tool-chip:hover .tool-icon {
  transform: rotate(-6deg) scale(1.08);
}
.toolkit-window:hover .toolkit-track,
.toolkit-window:focus-within .toolkit-track,
.paused .toolkit-track {
  animation-play-state: paused;
}
.toolkit-hint {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
  margin-top: 14px;
}
[data-theme="light"] .tool-icon {
  color: var(--accent);
}
@keyframes toolkit-scroll {
  to {
    transform: translateX(-50%);
  }
}
@media (max-width: 560px) {
  .toolkit {
    margin-top: 42px;
  }
  .tool-chip {
    min-width: 155px;
    padding: 16px 18px;
    font-size: 15px;
    gap: 12px;
  }
  .toolkit-description {
    font-size: 12px;
  }
  .toolkit-hint {
    display: block;
  }
  .toolkit-hint span {
    display: none;
  }
  .marquee-toggle {
    padding: 10px;
    font-size: 11px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .toolkit-window {
    overflow-x: auto;
    mask-image: none;
  }
  .toolkit-track {
    animation: none;
  }
  .toolkit-group[aria-hidden="true"],
  .marquee-toggle,
  .toolkit-hint span {
    display: none;
  }
  .tool-chip,
  .tool-icon {
    transition: none;
  }
  .tool-chip:hover,
  .tool-chip:hover .tool-icon {
    transform: none;
  }
}
</style>
