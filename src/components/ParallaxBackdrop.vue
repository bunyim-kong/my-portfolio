<template>
  <div class="parallax-backdrop" aria-hidden="true">
    <div class="parallax-aura aura-green"></div>
    <div class="parallax-aura aura-blue"></div>
    <div class="parallax-grid"></div>
    <svg
      class="parallax-streams"
      viewBox="0 0 1440 850"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="stream-color" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stop-color="#b8f87b" stop-opacity="0" />
          <stop offset=".55" stop-color="#b8f87b" stop-opacity=".6" />
          <stop offset="1" stop-color="#83d5d1" stop-opacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#stream-color)">
        <path d="M-120 740C260 800 310 270 760 400S1120 910 1530 250" />
        <path d="M-120 770C260 830 340 300 790 430S1150 940 1560 280" />
        <path
          class="stream-highlight"
          d="M-120 740C260 800 310 270 760 400S1120 910 1530 250"
        />
      </g>
    </svg>
    <span
      v-for="(star, index) in [
        [8, 18],
        [22, 72],
        [35, 10],
        [49, 86],
        [60, 27],
        [72, 12],
        [82, 77],
        [94, 39],
        [12, 90],
        [91, 91],
      ]"
      :key="index"
      class="parallax-star"
      :style="{
        left: `${star[0]}%`,
        top: `${star[1]}%`,
        '--star-depth': ((index % 3) + 1) * 8 + 'px',
      }"
    ></span>
  </div>
</template>

<style scoped>
.parallax-backdrop {
  position: absolute;
  inset: 0 -40px;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
  mask-image: linear-gradient(transparent, #000 12%, #000 75%, transparent);
}
.parallax-aura {
  position: absolute;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  opacity: 0.7;
}
.aura-green {
  top: -12%;
  right: -10%;
  background: radial-gradient(circle, #9bd86518, transparent 65%);
  transform: translate3d(
    calc(var(--pointer-x, 0) * -24px),
    calc(var(--pointer-y, 0) * -20px + var(--scroll-depth, 0) * 100px),
    0
  );
}
.aura-blue {
  width: 420px;
  height: 420px;
  bottom: 0;
  left: 15%;
  background: radial-gradient(circle, #65c9b512, transparent 65%);
  transform: translate3d(
    calc(var(--pointer-x, 0) * 18px),
    calc(var(--scroll-depth, 0) * -65px),
    0
  );
}
.parallax-grid {
  position: absolute;
  width: 140%;
  height: 60%;
  left: -20%;
  bottom: -19%;
  background-image:
    linear-gradient(#a4cb751c 1px, transparent 1px),
    linear-gradient(90deg, #a4cb751c 1px, transparent 1px);
  background-size: 58px 58px;
  transform: perspective(480px) rotateX(61deg)
    translate3d(
      calc(var(--pointer-x, 0) * -18px),
      calc(var(--scroll-depth, 0) * 90px),
      0
    );
  mask-image: radial-gradient(ellipse, #000, transparent 68%);
}
.parallax-streams {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  transform: translate3d(
    calc(var(--pointer-x, 0) * -12px),
    calc(var(--scroll-depth, 0) * -75px),
    0
  );
}
.stream-highlight {
  stroke-width: 2;
  stroke-dasharray: 35 1800;
  animation: stream-travel 16s linear infinite;
}
.parallax-star {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--accent);
  opacity: 0.4;
  border-radius: 50%;
  box-shadow: 0 0 12px #b8f87b66;
  transform: translate3d(
    calc(var(--pointer-x, 0) * var(--star-depth)),
    calc(
      var(--pointer-y, 0) * var(--star-depth) + var(--scroll-depth, 0) * -80px
    ),
    0
  );
}
.parallax-star:nth-of-type(3n) {
  width: 5px;
  height: 5px;
  opacity: 0.65;
}
@keyframes stream-travel {
  to {
    stroke-dashoffset: -1835;
  }
}
@media (max-width: 1100px) {
  .parallax-backdrop {
    inset-inline: -24px;
  }
}
@media (max-width: 800px) {
  .parallax-backdrop {
    inset-inline: -16px;
  }
  .parallax-grid {
    opacity: 0.5;
  }
  .parallax-aura {
    width: 450px;
    height: 450px;
  }
  .parallax-streams {
    opacity: 0.18;
  }
}
</style>
