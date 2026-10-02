<script setup>
import { ref } from "vue";
defineProps({ currentSection: String });
const theme = ref(document.documentElement.dataset.theme || "dark");
function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme.value;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme.value === "light" ? "#f6f8f2" : "#101211");
  try {
    localStorage.setItem("portfolio-theme", theme.value);
  } catch {
    /* Theme still works when storage is unavailable. */
  }
}
const menuOpen = ref(false);
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <a
        class="logo"
        href="#home"
        aria-label="Kong Bunyim home"
        @click="menuOpen = false"
        >kb<span>.</span><span class="logo-slash"> / </span
        ><span class="logo-name">KONG BUNYIM</span></a
      >
      <div class="header-controls">
        <button
          class="theme-toggle"
          type="button"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
          :title="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
          @click="toggleTheme"
        >
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"
            />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />
          </svg>
        </button>
        <button
          class="menu-toggle"
          :aria-expanded="menuOpen"
          aria-controls="navigation"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? "Close ×" : "Menu ☰" }}
        </button>
      </div>
      <nav
        id="navigation"
        :class="{ open: menuOpen }"
        aria-label="Main navigation"
      >
        <a
          v-for="item in ['Work', 'About', 'Experience']"
          :key="item"
          :href="`#${item.toLowerCase()}`"
          :class="{ active: currentSection === item.toLowerCase() }"
          @click="menuOpen = false"
          >{{ item }}</a
        >
        <a class="nav-contact" href="#contact" @click="menuOpen = false"
          >Let’s talk <span>↗</span></a
        >
      </nav>
    </div>
  </header>
</template>

<style>
.site-header {
  border-bottom: 1px solid var(--border);
  background: #101211ed;
  backdrop-filter: blur(16px);
  position: sticky;
  top: 0;
  z-index: 20;
}
.header-inner {
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-slash {
  font-size: 24px;
  color: #484e44;
  margin: 0 22px;
  font-weight: 400;
}
.logo-name {
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 1.5px;
}
nav {
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 13px;
  color: #afb4aa;
}
nav > a:hover,
nav > a.active {
  color: var(--accent);
}
nav .nav-contact {
  border: 1px solid #59634e;
  border-radius: 5px;
  color: var(--accent);
  padding: 11px 17px;
  margin-left: 7px;
  display: flex;
  gap: 25px;
}
.menu-toggle {
  display: none;
}
@media (max-width: 800px) {
  .header-inner {
    height: 74px;
  }
  .logo-slash {
    margin-inline: 14px;
  }
  .logo-name {
    font-size: 9px;
  }
  nav {
    gap: 20px;
    font-size: 12px;
  }
  nav .nav-contact {
    padding: 9px 12px;
    gap: 12px;
  }
}
@media (max-width: 560px) {
  .header-inner {
    height: 68px;
  }
  .logo-name {
    font-size: 9px;
  }
  .menu-toggle {
    display: block;
    background: transparent;
    border: 1px solid var(--border);
    font: 11px var(--mono);
    padding: 10px;
    border-radius: 4px;
    color: var(--accent);
  }
  nav {
    display: none;
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    background: #171c14;
    border-bottom: 1px solid var(--border);
    padding: 24px;
    align-items: stretch;
    gap: 20px;
    font-size: 15px;
  }
  nav.open {
    display: flex;
    flex-direction: column;
  }
  nav .nav-contact {
    margin-left: 0;
    justify-content: space-between;
  }
}
.header-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  order: 3;
  margin-left: 22px;
}
.header-inner nav {
  margin-left: auto;
}
.theme-toggle {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid var(--border);
  border-radius: 5px;
  background: transparent;
  color: var(--accent);
  transition:
    background 0.2s,
    border-color 0.2s;
}
.theme-toggle:hover {
  background: var(--panel);
  border-color: var(--accent);
}
.theme-toggle svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}
[data-theme="light"] .site-header {
  background: #f6f8f2ed;
}
[data-theme="light"] nav {
  color: #59634f;
}
[data-theme="light"] .nav-contact {
  border-color: #96ad85;
}
@media (max-width: 800px) {
  .header-controls {
    margin-left: 14px;
  }
  nav {
    gap: 15px;
  }
}
@media (max-width: 560px) {
  .header-controls {
    margin-left: auto;
  }
  [data-theme="light"] nav {
    background: #f0f4e9;
  }
}
@media (max-width: 360px) {
  .logo-slash {
    margin-inline: 9px;
  }
  .logo-name {
    font-size: 8px;
  }
  .header-controls {
    gap: 6px;
  }
}
nav > a {
  position: relative;
  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s;
}
nav > a:not(.nav-contact)::after {
  content: "";
  position: absolute;
  bottom: -7px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
nav > a:hover::after,
nav > a.active::after {
  transform: scaleX(1);
}
nav .nav-contact:hover {
  border-color: var(--accent);
  background: var(--panel);
}
.theme-toggle svg {
  transition: transform 0.35s;
}
.theme-toggle:hover svg {
  transform: rotate(25deg);
}
nav.open {
  animation: menu-arrive 0.2s ease both;
}
@keyframes menu-arrive {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.site-header::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent);
  transform: scaleX(var(--page-scroll, 0));
  transform-origin: left;
  pointer-events: none;
}
</style>
