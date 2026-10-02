<script setup>
defineProps({ name: String });
// Local vector artwork keeps the toolkit available without external icon requests.
const icons = {
  "Vue.js":
    '<path d="M2 5h6l8 14L24 5h6L16 29Z" fill="currentColor"/><path d="M8 5h5l3 5 3-5h5l-8 14Z" fill="var(--bg)"/>',
  "Nuxt.js": '<path d="m3 25 10-18 10 18Zm13 0 7-12 7 12Z"/>',
  "React.js":
    '<ellipse cx="16" cy="16" rx="14" ry="5"/><ellipse cx="16" cy="16" rx="14" ry="5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5" transform="rotate(120 16 16)"/><circle cx="16" cy="16" r="2" fill="currentColor"/>',
  "Next.js":
    '<circle cx="16" cy="16" r="13"/><path d="M10 23V9l16 20M22 9v12"/>',
  JavaScript:
    '<rect x="3" y="3" width="26" height="26" rx="3"/><text x="7" y="24">JS</text>',
  HTML: '<path d="m5 3 2 24 9 3 9-3 2-24ZM22 9H11l1 7h9l-1 7-4 1-4-1"/>',
  CSS: '<path d="m5 3 2 24 9 3 9-3 2-24ZM10 9h12l-1 7H11m10 0-1 7-4 1-4-1"/>',
  WordPress:
    '<circle cx="16" cy="16" r="13"/><path d="m6 10 6 15 5-13 5 13 5-16M4 10h7m3 0h7"/>',
  Laravel:
    '<path d="m3 8 6-3 6 3-6 3Zm0 0v13l12 7 12-7V9l-6-3-6 3v12l-6 3m0-13v13m6-3 6-3V6m-6 3 6 3 6-3m-6 3v6"/>',
  PHP: '<ellipse cx="16" cy="16" rx="15" ry="10"/><text x="5" y="20" style="font-size:11px">php</text>',
  Java: '<path d="M8 18h15l-2 8H10ZM23 18h3a3 3 0 0 1-4 5M7 29h18M15 15c-7-5 9-5 2-12M20 15c-4-3 5-4 3-7"/>',
  "Spring Boot":
    '<path d="M27 4C8 3 1 13 6 23s22 3 21-19ZM7 25 23 9M10 19h8M16 13v7"/>',
  Express:
    '<text x="2" y="22" style="font-size:22px;font-weight:500">ex</text>',
  Strapi:
    '<path d="M6 5h22v22H17V16H6Z" fill="currentColor" stroke="none"/><path d="M6 16h11v11H6Z" fill="currentColor" opacity=".5" stroke="none"/>',
  MySQL:
    '<path d="M3 9c6-5 12-5 17 0l8 7-7-1 6 9-10-7-6 2-2-7-6-3Z"/><circle cx="17" cy="9" r="1" fill="currentColor"/>',
  PostgreSQL:
    '<path d="M8 22C1 18 3 5 9 4l7 2 7-2c7 1 8 14 2 18l-5-3v8c0 4-6 4-6 0V16M8 8v13l6 3m8-16v12l-8 4"/><circle cx="11" cy="11" r="1"/><circle cx="21" cy="11" r="1"/>',
  MongoDB:
    '<path d="M16 2C2 14 7 24 16 28 25 24 30 14 16 2Z"/><path d="M16 10v21"/>',
  Figma:
    '<path d="M16 3h-5a5 5 0 0 0 0 10h5Zm0 0h5a5 5 0 0 1 0 10h-5ZM16 13h-5a5 5 0 0 0 0 10h5ZM16 23h-5a5 5 0 1 0 5 5Z"/><circle cx="21" cy="18" r="5"/>',
  Git: '<rect x="6" y="6" width="20" height="20" rx="2" transform="rotate(45 16 16)"/><path d="m10 6 12 12M16 12v13"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="22" cy="18" r="2" fill="currentColor"/><circle cx="16" cy="25" r="2" fill="currentColor"/>',
  GitHub:
    '<path d="M11 28C2 27 1 8 8 7L8 3l7 3h3l6-3 1 5c7 6 4 17-5 19v4m-7 0v-7c-6 1-7-3-9-4M20 31v-7"/>',
  Trello:
    '<rect x="3" y="3" width="26" height="26" rx="4"/><rect x="8" y="8" width="5" height="15" rx="1"/><rect x="19" y="8" width="5" height="10" rx="1"/>',
  Documentation:
    '<path d="M7 3h12l6 6v20H7ZM19 3v7h6M11 15h10m-10 5h10m-10 5h6"/>',
};
</script>

<template>
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    focusable="false"
    v-html="icons[name]"
  />
</template>

<style scoped>
svg {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}
svg :deep(text) {
  fill: currentColor;
  stroke: none;
  font: 700 16px var(--heading);
}
</style>
