<script setup>
import { computed, ref } from "vue";
const base = import.meta.env.BASE_URL;
const filter = ref("All projects");
const filters = ["All projects", "Live websites", "Applications"];
const projects = [
  {
    name: "LMLP Tourism",
    type: "Travel & discovery",
    category: "Live websites",
    image: "project-tourism.jpg",
    description:
      "A Khmer-language destination guide bringing Cambodia’s places, travel tips, and hotel information together.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "LMLP-Tourism",
    url: "https://bunyim-kong.github.io/LMLP-Tourism/",
  },
  {
    name: "Samai Rum Map",
    type: "Full-stack application",
    category: "Applications",
    image: "samai-map.png",
    description:
      "An interactive product location map with a database-backed admin dashboard for Samai Distillery.",
    tags: ["Laravel", "MySQL", "Maps"],
    repo: "samai-laravel",
  },
  {
    name: "Apple Real Estate",
    type: "Property showcase",
    category: "Live websites",
    image: "project-estate.jpg",
    description:
      "A property discovery website showcasing houses, apartments, and condos in Phnom Penh.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "apple-real-estate",
    url: "https://bunyim-kong.github.io/apple-real-estate/",
  },
  {
    name: "X-Tra Interior",
    type: "Design & interiors",
    category: "Live websites",
    image: "project-interior.jpg",
    description:
      "An image-led interior design website with spaces, services, and furniture inspiration.",
    tags: ["HTML", "CSS"],
    repo: "Interior",
    url: "https://bunyim-kong.github.io/Interior/",
  },
  {
    name: "Cafe Shop",
    type: "Food & hospitality",
    category: "Live websites",
    image: "project-cafe.png",
    description:
      "A Khmer-language café website with a visual food and drinks menu and shop information.",
    tags: ["HTML", "CSS"],
    repo: "Cafe-shop",
    url: "https://bunyim-kong.github.io/Cafe-shop/",
  },
  {
    name: "Khmer Organic",
    type: "Agriculture & community",
    category: "Live websites",
    image: "project-farm.jpg",
    description:
      "A showcase of organic farming, Cambodian produce, and local shops through stories and photography.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "organic-farm",
    url: "https://bunyim-kong.github.io/organic-farm/",
  },
];
const visibleProjects = computed(() =>
  projects.filter(
    (p) => filter.value === "All projects" || p.category === filter.value,
  ),
);
</script>

<template>
  <section id="work" class="section container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">01 / SELECTED WORK</p>
        <h2>Made with purpose<span class="accent">.</span></h2>
      </div>
      <p>
        A few ideas I’ve brought to life.<br />Built to be used, designed to be
        enjoyed.
      </p>
    </div>
    <div class="work-toolbar">
      <div class="filters" aria-label="Filter projects">
        <button
          v-for="item in filters"
          :key="item"
          :class="{ selected: filter === item }"
          :aria-pressed="filter === item"
          @click="filter = item"
        >
          {{ item }}
          <span v-if="item === 'All projects'">{{ projects.length }}</span>
        </button>
      </div>
      <a
        class="text-link"
        href="https://github.com/bunyim-kong"
        target="_blank"
        rel="noopener noreferrer"
        >Explore GitHub ↗</a
      >
    </div>
    <TransitionGroup
      name="project"
      tag="div"
      class="project-grid"
      aria-live="polite"
      data-scroll-depth
    >
      <article
        v-for="(project, index) in visibleProjects"
        :key="project.repo"
        class="project-card"
        :style="{ '--reveal-delay': `${(index % 3) * 90}ms` }"
      >
        <a
          class="project-image"
          :class="project.repo"
          :href="
            project.url || `https://github.com/bunyim-kong/${project.repo}`
          "
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${project.url ? 'Visit' : 'View source for'} ${project.name}`"
          ><div class="project-browser">
            <span class="browser-dots">● ● ●</span
            ><span>{{
              project.url
                ? project.url.replace("https://", "")
                : "samai / product locator"
            }}</span
            ><span>↗</span>
          </div>
          <div class="project-preview">
            <img
              :src="`${base}images/${project.image}`"
              :alt="`${project.name} project preview`"
              loading="lazy"
            />
          </div>
          <span class="image-action"
            >{{ project.url ? "Visit website" : "View project" }} ↗</span
          ></a
        >
        <div class="project-meta">
          <span>{{ project.type }}</span
          ><span class="mono">{{ String(index + 1).padStart(2, "0") }}</span>
        </div>
        <div class="project-title">
          <h3>{{ project.name }}</h3>
          <a
            :href="`https://github.com/bunyim-kong/${project.repo}`"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${project.name} source on GitHub`"
            >〈/〉</a
          >
        </div>
        <p>{{ project.description }}</p>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span
          ><span v-if="project.url" class="live-tag"><i></i> Live site</span>
        </div>
      </article>
    </TransitionGroup>
  </section>
</template>

<style>
.work-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 29px;
}
.filters {
  display: flex;
  gap: 7px;
}
.filters button {
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 11px;
  background: transparent;
  color: var(--muted);
  border: 1px solid transparent;
}
.filters .selected {
  background: #242d1c;
  border-color: #495d33;
  color: var(--accent);
}
.filters button:hover {
  color: var(--accent);
}
.filters button span {
  font-size: 9px;
  padding-left: 8px;
  opacity: 0.65;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 39px 26px;
}
.project-card {
  min-width: 0;
}
.project-image {
  display: block;
  height: 300px;
  position: relative;
  overflow: hidden;
  border: 1px solid #373e30;
  border-radius: 7px;
  background: #273023;
  padding: 16px 16px 0;
}
.project-browser {
  height: 26px;
  background: #f2f3ef;
  color: #7b8176;
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font: 7px var(--mono);
  padding-inline: 10px;
  white-space: nowrap;
  overflow: hidden;
}
.project-browser > span:nth-child(2) {
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
}
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s;
  scale: 1.12;
  translate: 0 calc(var(--section-depth, 0) * 14px);
}
.project-preview {
  height: calc(100% - 26px);
  overflow: hidden;
}
.project-image:hover img {
  transform: scale(1.04);
}
.project-image.samai-laravel {
  background: #362824;
}
.project-image.apple-real-estate {
  background: #2b3338;
}
.project-image.Interior {
  background: #38332c;
}
.project-image.Cafe-shop {
  background: #392e26;
}
.project-image.organic-farm {
  background: #2a3825;
}
.image-action {
  position: absolute;
  bottom: 13px;
  right: 13px;
  background: #111a10e8;
  color: var(--accent);
  border: 1px solid #6b8555;
  font-size: 12px;
  padding: 9px 12px;
  border-radius: 4px;
  opacity: 0;
  transform: translateY(5px);
  transition: 0.2s;
}
.project-image:hover .image-action,
.project-image:focus-visible .image-action {
  opacity: 1;
  transform: translateY(0);
}
.project-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 19px;
  font: 9px var(--mono);
  letter-spacing: 0.4px;
  color: #939c89;
  text-transform: uppercase;
}
.project-meta .mono {
  color: #58614f;
}
.project-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9px;
}
.project-title h3 {
  font-size: 23px;
  letter-spacing: -0.6px;
}
.project-title a {
  font: 12px var(--mono);
  color: var(--accent);
  padding: 8px;
}
.project-card > p {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
  margin-top: 9px;
  min-height: 64px;
}

@media (min-width: 1600px) {
  .project-image {
    height: 340px;
  }
}
@media (max-width: 1100px) {
  .project-image {
    height: 250px;
    padding: 12px 12px 0;
  }
  .project-grid {
    gap: 35px 20px;
  }
  .project-title h3 {
    font-size: 21px;
  }
}
@media (max-width: 800px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .project-image {
    height: 290px;
  }
  .project-card > p {
    min-height: 65px;
  }
}
@media (max-width: 560px) {
  .work-toolbar {
    align-items: start;
    gap: 17px;
    flex-direction: column;
    padding-bottom: 22px;
  }
  .filters {
    gap: 4px;
    width: 100%;
  }
  .filters button {
    font-size: 10px;
    padding: 9px 11px;
  }
  .project-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .project-image {
    height: 320px;
    padding: 18px 18px 0;
  }
  .project-browser {
    height: 29px;
    font-size: 8px;
  }
  .project-preview {
    height: calc(100% - 29px);
  }
  .project-card > p {
    min-height: 0;
    font-size: 12px;
  }
  .image-action {
    opacity: 1;
    transform: none;
  }
  .project-title h3 {
    font-size: 23px;
  }
}
.project-card {
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg);
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}
.project-card:focus-within {
  background: var(--panel);
  border-color: var(--accent);
  box-shadow: 0 12px 30px #0002;
}
.project-card:focus-within .image-action {
  opacity: 1;
  transform: translateY(0);
}
@media (hover: hover) {
  .project-card:hover {
    transform: translateY(-6px);
    background: var(--panel);
    border-color: var(--accent);
    box-shadow: 0 18px 38px #0003;
  }
  .project-card:hover .project-image img {
    transform: scale(1.05);
  }
  .project-card:hover .image-action {
    opacity: 1;
    transform: translateY(0);
  }
  .project-card:hover .project-title h3 {
    color: var(--accent);
  }
}
[data-theme="light"] .filters .selected {
  background: #e3edd7;
  border-color: #a5be91;
}
[data-theme="light"] .project-meta {
  color: #637355;
}
[data-theme="light"] .project-meta .mono {
  color: #6a775f;
}
[data-theme="light"] .image-action {
  color: #b8f87b;
}
@media (max-width: 560px) {
  .project-card {
    padding: 10px;
  }
}
.filters button {
  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s;
}
.project-enter-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}
.project-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.project-move {
  transition: transform 0.35s ease;
}
.project-leave-active {
  display: none;
  animation: none !important;
}
.project-grid.reveal:not(.reveal-pending) > .project-card {
  animation: project-reveal 0.7s var(--reveal-delay, 0ms)
    cubic-bezier(0.2, 0.65, 0.3, 1) both;
}
@keyframes project-reveal {
  from {
    opacity: 0;
    translate: 0 24px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
[data-motion="off"] .project-image img {
  scale: 1;
  translate: none;
}
@media (prefers-reduced-motion: reduce) {
  .project-image img {
    scale: 1;
    translate: none;
  }
}
</style>
