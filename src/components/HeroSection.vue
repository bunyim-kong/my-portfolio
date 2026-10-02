<script setup>
import ToolIcon from "./ToolIcon.vue";
const base = import.meta.env.BASE_URL;
const heroTools = [
  {
    name: "Vue.js",
    position: "vue",
    color: "#65c99a",
    tilt: "-4deg",
    delay: "0s",
  },
  {
    name: "React.js",
    position: "react",
    color: "#75d7f1",
    tilt: "4deg",
    delay: "-2s",
  },
  {
    name: "Next.js",
    position: "next",
    color: "#eceee9",
    tilt: "0deg",
    delay: "-4s",
  },
  {
    name: "Nuxt.js",
    position: "nuxt",
    color: "#54dca1",
    tilt: "0deg",
    delay: "-1s",
  },
  {
    name: "WordPress",
    position: "wordpress",
    color: "#82bed9",
    tilt: "-3deg",
    delay: "-3s",
  },
  {
    name: "Laravel",
    position: "laravel",
    color: "#f5867f",
    tilt: "3deg",
    delay: "-5s",
  },
];
</script>

<template>
  <section id="home" class="hero container">
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
      <div class="hero-visual" aria-label="Developer profile illustration">
        <div class="orbital orbital-one"></div>
        <div class="orbital orbital-two"></div>
        <ul class="hero-tools" aria-label="Technologies I work with">
          <li
            v-for="tool in heroTools"
            :key="tool.name"
            class="hero-tool"
            :class="`label-${tool.position}`"
            :style="{
              '--tool-color': tool.color,
              '--tilt': tool.tilt,
              animationDelay: tool.delay,
            }"
          >
            <ToolIcon :name="tool.name" />
            <span>{{ tool.name }}</span>
          </li>
        </ul>
        <div class="code-window">
          <div class="window-bar">
            <div class="window-dots"><i></i><i></i><i></i></div>
            <span>developer.js</span><span class="window-code">&lt;/&gt;</span>
          </div>
          <div class="code-body">
            <div class="code-line">
              <span class="line-number">01</span
              ><span
                ><span class="syntax-purple">const</span> developer = {</span
              >
            </div>
            <div class="code-line">
              <span class="line-number">02</span
              ><span
                >&nbsp; name:
                <span class="syntax-green">'Kong Bunyim'</span>,</span
              >
            </div>
            <div class="code-line">
              <span class="line-number">03</span
              ><span
                >&nbsp; role:
                <span class="syntax-green">'Full-Stack Developer'</span>,</span
              >
            </div>
            <div class="code-line">
              <span class="line-number">04</span
              ><span
                >&nbsp; location:
                <span class="syntax-green">'Phnom Penh, KH'</span>,</span
              >
            </div>
            <div class="code-line">
              <span class="line-number">05</span
              ><span
                >&nbsp; stack: [<span class="syntax-green">'Vue'</span>,
                <span class="syntax-green">'Laravel'</span>],</span
              >
            </div>
            <div class="code-line">
              <span class="line-number">06</span
              ><span
                >&nbsp; mindset:
                <span class="syntax-green">'Always learning'</span></span
              >
            </div>
            <div class="code-line">
              <span class="line-number">07</span><span>};</span>
            </div>
            <div class="code-line code-comment">
              <span class="line-number">08</span
              ><span>// Build something that matters.</span>
            </div>
            <div class="code-line">
              <span class="line-number">09</span
              ><span
                >developer.<span class="syntax-yellow">create</span>(<span
                  class="syntax-green"
                  >'your next idea'</span
                >);<span class="cursor"></span
              ></span>
            </div>
          </div>
          <div class="terminal">
            <span>❯</span> npm run build
            <span class="terminal-success">✓ ready to ship</span>
          </div>
        </div>
        <div class="visual-caption">
          <span class="status-dot"></span> CURIOSITY. CODE. CRAFT.
        </div>
      </div>
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
.orbital-two {
  width: 440px;
  height: 220px;
  transform: rotate(-33deg);
}
.code-window {
  background: #181c18;
  border: 1px solid #394431;
  width: 100%;
  max-width: 445px;
  border-radius: 9px;
  box-shadow: 0 24px 65px #0005;
  transform: rotate(-3deg);
}
.window-bar {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  padding: 0 16px;
  font: 10px var(--mono);
  color: #8e9a84;
}
.window-dots {
  display: flex;
  gap: 6px;
}
.window-dots i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #697063;
}
.window-dots i:first-child {
  background: #d57d70;
}
.window-dots i:nth-child(2) {
  background: #d6b670;
}
.window-dots i:nth-child(3) {
  background: #99ba73;
}
.window-code {
  font-size: 13px;
}
.code-body {
  padding: 23px 14px;
  font: 11px/2.3 var(--mono);
  color: #c7cfbf;
  white-space: nowrap;
}
.code-line {
  display: flex;
  gap: 18px;
}
.line-number {
  color: #55604e;
  font-size: 10px;
  min-width: 20px;
  text-align: center;
}
.syntax-purple {
  color: #bca6d7;
}
.syntax-green {
  color: #b8e68d;
}
.syntax-yellow {
  color: #dec089;
}
.code-comment {
  color: #6d7c64;
}
.cursor {
  display: inline-block;
  width: 5px;
  height: 12px;
  margin-left: 4px;
  background: var(--accent);
  vertical-align: middle;
  animation: blink 1.2s step-end infinite;
}
.terminal {
  font: 10px var(--mono);
  color: #afbca3;
  border-top: 1px solid var(--border);
  padding: 15px;
  display: flex;
  gap: 10px;
}
.terminal > span:first-child {
  color: var(--accent);
}
.terminal-success {
  margin-left: auto;
  font-size: 9px;
  color: var(--accent);
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
@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (min-width: 1600px) {
  .hero-grid {
    padding-top: 65px;
  }
  h1 {
    font-size: 82px;
  }
  .code-window {
    max-width: 485px;
  }
  .code-body {
    font-size: 12px;
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
  .code-body {
    font-size: 9px;
    padding: 20px 8px;
  }
  .code-line {
    gap: 8px;
  }
  .code-window {
    max-width: 390px;
  }
  .orbital-two {
    width: 340px;
    height: 200px;
  }
  .terminal {
    font-size: 8px;
    padding: 13px 10px;
  }
  .terminal-success {
    font-size: 8px;
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
  .code-window {
    max-width: 400px;
  }
  .code-body {
    font-size: 11px;
    line-height: 2.2;
    padding: 18px 10px;
  }
  .code-line {
    gap: 15px;
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
  .code-body {
    font-size: clamp(8px, 2.5vw, 11px);
    padding: 16px 8px;
  }
  .code-line {
    gap: 10px;
  }
  .code-window {
    width: 94%;
    transform: rotate(-2deg);
  }
  .window-bar {
    height: 36px;
    font-size: 8px;
  }
  .orbital-two {
    width: 300px;
    height: 180px;
  }
  .terminal {
    font-size: 8px;
    padding: 12px 10px;
  }
  .terminal-success {
    font-size: 7px;
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

.hero-visual {
  position: relative;
  isolation: isolate;
  height: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: hero-arrive 1s 0.15s ease both;
}
.hero-visual::before {
  content: "";
  position: absolute;
  inset: 5%;
  z-index: -1;
  background: radial-gradient(ellipse, #b8f87b12, transparent 70%);
}
.orbital {
  position: absolute;
  z-index: -1;
  width: 90%;
  aspect-ratio: 1;
  border: 1px solid #86a36b22;
  border-radius: 50%;
}
.orbital-two {
  width: 90%;
  aspect-ratio: 1.6;
  transform: rotate(-25deg);
}
.hero-visual .code-window {
  width: calc(100% - 86px);
  max-width: 420px;
  border-radius: 14px;
  box-shadow: 0 25px 70px #0004;
}
.hero-tools {
  list-style: none;
  padding: 0;
  margin: 0;
}
.hero-tool {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 11px 15px;
  border-radius: 12px;
  border: 1px solid #3b473b;
  background: #1c221e;
  color: #eceee9;
  box-shadow: 0 8px 24px #0003;
  font: 500 13px var(--heading);
  white-space: nowrap;
  transform: rotate(var(--tilt));
  animation: hero-tool-drift 8s ease-in-out infinite;
  transition:
    border-color 0.25s,
    box-shadow 0.25s;
}
.hero-tool svg {
  width: 24px;
  height: 24px;
  color: var(--tool-color);
}
.hero-tool:hover {
  border-color: var(--tool-color);
  box-shadow: 0 10px 28px #0005;
}
.hero-visual:hover .hero-tool {
  animation-play-state: paused;
}
.label-vue {
  left: 10%;
  top: 8px;
}
.label-react {
  right: 3%;
  top: 28px;
}
.label-wordpress {
  left: 3%;
  bottom: -6px;
}
.label-laravel {
  right: 10%;
  bottom: -10px;
}
.label-nuxt,
.label-next {
  top: 48%;
  flex-direction: column;
  gap: 7px;
  padding: 12px 8px 9px;
  width: 62px;
  font-size: 10px;
  letter-spacing: 0.2px;
}
.label-nuxt {
  left: -15px;
}
.label-next {
  right: -15px;
  top: 53%;
}
.label-nuxt svg,
.label-next svg {
  width: 28px;
  height: 28px;
}
.visual-caption {
  position: absolute;
  bottom: -38px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font: 10px var(--mono);
  letter-spacing: 1.4px;
  color: var(--muted);
}
.visual-caption .status-dot {
  width: 5px;
  height: 5px;
}
[data-theme="light"] .hero-tool {
  background: #f9fbf5;
  color: #20291c;
  border-color: #d0dcc7;
  box-shadow: 0 8px 24px #34452814;
}
[data-theme="light"] .hero-tool svg {
  color: var(--accent);
}
[data-theme="light"] .orbital {
  border-color: #66874326;
}
@keyframes hero-tool-drift {
  0%,
  100% {
    transform: translateY(0) rotate(var(--tilt));
  }
  50% {
    transform: translateY(-4px) rotate(var(--tilt));
  }
}
@media (max-width: 1100px) {
  .hero-visual {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding-top: 12px;
  }
  .hero-visual .code-window {
    width: 96%;
    max-width: 420px;
  }
  .hero-tools {
    order: 2;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    gap: 9px;
  }
  .hero-tool {
    position: static;
    flex-direction: row;
    justify-content: center;
    width: auto;
    padding: 11px 7px;
    gap: 7px;
    font-size: 11px;
    letter-spacing: 0;
    transform: none;
    animation: none;
    box-shadow: 0 3px 12px #0001;
    border-radius: 9px;
  }
  .hero-tool svg {
    width: 20px;
    height: 20px;
  }
  .visual-caption {
    position: static;
    order: 3;
    font-size: 9px;
    margin-top: -5px;
  }
}
@media (max-width: 800px) {
  .hero-visual {
    width: 100%;
    max-width: 480px;
    margin: 20px auto 0;
    gap: 26px;
  }
  .hero-tool {
    padding: 13px 10px;
    font-size: 12px;
  }
  .hero-bottom {
    margin-top: 35px;
  }
}
@media (max-width: 560px) {
  .hero-visual {
    margin-top: 16px;
    gap: 22px;
  }
  .hero-tools {
    gap: 8px;
  }
  .hero-tool {
    padding: 11px 6px;
    gap: 6px;
    font-size: 11px;
  }
  .hero-tool svg {
    width: 18px;
    height: 18px;
  }
  .hero-bottom {
    margin-top: 30px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-tool {
    transform: none;
  }
}
</style>
