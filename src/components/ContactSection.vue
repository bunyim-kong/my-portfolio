<script setup>
import { ref, onUnmounted } from "vue";
const base = import.meta.env.BASE_URL;
const copied = ref(false);
let copyTimer;

onUnmounted(() => clearTimeout(copyTimer));
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-top">
        <p class="eyebrow">
          <span class="status-dot"></span> 04 / LET’S CONNECT
        </p>
        <span class="mono">GREAT THINGS START WITH A CONVERSATION.</span>
      </div>
      <h2>
        Have an idea?<br />Let’s <span class="accent">build it.</span
        ><span class="contact-arrow" aria-hidden="true">↗</span>
      </h2>
      <div class="contact-bottom">
        <div>
          <p>
            A project, an opportunity, or just a hello.<br />I’d love to hear
            from you.
          </p>
          <div class="email-row">
            <a href="mailto:bunyimkong@gmail.com">bunyimkong@gmail.com ↗</a
            ><button
              @click="copyEmail"
              :aria-label="copied ? 'Email copied' : 'Copy email address'"
            >
              {{ copied ? "✓ Copied" : "⧉ Copy" }}
            </button>
          </div>
          <span class="copy-status" role="status">{{
            copied ? "Email address copied to clipboard." : ""
          }}</span>
        </div>
        <div class="contact-links">
          <a
            href="https://github.com/bunyim-kong"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub <span>↗</span></a
          ><a href="tel:+85517686388">+855 17 686 388 <span>↗</span></a
          ><a :href="`${base}Kong-Bunyim-CV.pdf`" download
            >Download CV <span>↓</span></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.contact-section {
  background: #1a2016;
  border-block: 1px solid #354329;
  padding: 55px 0 50px;
}
.contact-top {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
}
.contact-top > .mono {
  font-size: 8px;
  letter-spacing: 0.8px;
  color: #76856a;
}
.contact-section h2 {
  font-size: clamp(60px, 7vw, 98px);
  line-height: 1.05;
  letter-spacing: -4px;
  margin-top: 36px;
  position: relative;
}
.contact-arrow {
  position: absolute;
  right: 15px;
  top: 0;
  font-size: 150px;
  font-weight: 400;
  color: var(--accent);
  line-height: 1;
}
.contact-bottom {
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-top: 1px solid #36432e;
  margin-top: 35px;
  padding-top: 28px;
  gap: 30px;
}
.contact-bottom p {
  font-size: 13px;
  line-height: 1.8;
  color: #9fa895;
}
.email-row {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 20px;
}
.email-row > a {
  font-family: var(--heading);
  font-size: 22px;
  letter-spacing: -0.5px;
}
.email-row > a:hover {
  color: var(--accent);
}
.email-row > button {
  padding: 7px 9px;
  border: 1px solid #46543a;
  border-radius: 4px;
  background: transparent;
  font-size: 10px;
  color: var(--accent);
}
.copy-status {
  display: block;
  height: 14px;
  font-size: 10px;
  color: var(--accent);
  margin-top: 8px;
}
.contact-links {
  width: 235px;
  display: flex;
  flex-direction: column;
}
.contact-links > a {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  border-bottom: 1px solid #36432e;
  padding: 13px 0;
  color: #d0d6c8;
}
.contact-links > a:first-child {
  padding-top: 0;
}
.contact-links > a > span {
  color: var(--accent);
}
.contact-links > a:hover {
  color: var(--accent);
}
@media (max-width: 1100px) {
  .contact-arrow {
    font-size: 120px;
  }
}
@media (max-width: 800px) {
  .contact-section h2 {
    font-size: 72px;
  }
  .contact-arrow {
    font-size: 110px;
  }
  .email-row > a {
    font-size: 19px;
  }
  .email-row {
    gap: 12px;
  }
  .contact-links {
    width: 200px;
  }
}
@media (max-width: 560px) {
  .contact-section {
    padding: 38px 0 32px;
  }
  .contact-top > .mono {
    display: none;
  }
  .contact-top .eyebrow {
    font-size: 11px;
  }
  .contact-section h2 {
    font-size: clamp(53px, 13vw, 72px);
    letter-spacing: -2.6px;
    margin-top: 28px;
  }
  .contact-arrow {
    font-size: 73px;
    top: 5px;
    right: 0;
  }
  .contact-bottom {
    flex-direction: column;
    gap: 25px;
    padding-top: 23px;
    margin-top: 26px;
  }
  .email-row > a {
    font-size: 18px;
  }
  .email-row > button {
    font-size: 9px;
  }
  .contact-links {
    width: 100%;
  }
  .contact-links > a {
    font-size: 12px;
  }
}
[data-theme="light"] .contact-section {
  background: #e7efdb;
  border-color: #bccdac;
}
[data-theme="light"] .contact-top > .mono {
  color: #607451;
}
[data-theme="light"] .contact-bottom,
[data-theme="light"] .contact-links > a {
  border-color: #bccdac;
}
[data-theme="light"] .contact-bottom p {
  color: #5c6d50;
}
[data-theme="light"] .contact-links > a {
  color: #394c2d;
}
[data-theme="light"] .contact-links > a:hover {
  color: var(--accent);
}
[data-theme="light"] .email-row > button {
  border-color: #a6bc92;
}
.contact-links > a {
  transition:
    color 0.2s,
    padding 0.2s;
}
.contact-links > a > span {
  transition: transform 0.2s;
}
.contact-links > a:hover > span {
  transform: translate(3px, -3px);
}
.email-row > button {
  transition:
    background 0.2s,
    border-color 0.2s;
}
.email-row > button:hover {
  background: var(--panel);
  border-color: var(--accent);
}
.email-row > a {
  transition: color 0.2s;
}
.email-row > a:hover {
  color: var(--accent);
}
</style>
