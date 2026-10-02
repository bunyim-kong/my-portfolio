<template>
  <div class="stack-strip">
    <div class="container">
      <span>MY EVERYDAY TOOLKIT</span>
      <div>
        <b>◈ Vue.js</b><b>△ Nuxt.js</b><b>⌘ Laravel</b><b>〈/〉 JavaScript</b
        ><b>▱ MySQL</b><b>⌥ Git & GitHub</b>
      </div>
    </div>
  </div>
</template>

<style>
.stack-strip {
  background: #161916;
  border-block: 1px solid var(--border);
}
.stack-strip > .container {
  display: flex;
  gap: 35px;
  align-items: center;
  padding-block: 23px;
}
.stack-strip > .container > span {
  font: 9px var(--mono);
  letter-spacing: 1px;
  color: #737f69;
  flex-shrink: 0;
}
.stack-strip > .container > div {
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 20px;
}
.stack-strip b {
  font-family: var(--heading);
  font-weight: 500;
  font-size: 14px;
  color: #b3bca9;
  white-space: nowrap;
}
@media (max-width: 1100px) {
  .stack-strip > .container {
    gap: 20px;
  }
  .stack-strip b {
    font-size: 12px;
  }
  .stack-strip > .container > div {
    gap: 14px;
  }
}
@media (max-width: 800px) {
  .stack-strip > .container {
    display: block;
  }
  .stack-strip > .container > div {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 17px 28px;
    margin-top: 15px;
  }
}
@media (max-width: 560px) {
  .stack-strip > .container {
    padding-block: 18px;
  }
  .stack-strip b {
    font-size: 11px;
  }
  .stack-strip > .container > div {
    gap: 16px 21px;
  }
}
[data-theme="light"] .stack-strip {
  background: #eaf0e1;
}
[data-theme="light"] .stack-strip b {
  color: #4b603e;
}
[data-theme="light"] .stack-strip > .container > span {
  color: #606f52;
}
</style>
