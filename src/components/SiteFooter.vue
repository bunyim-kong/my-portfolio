<template>
  <footer class="container">
    <a class="logo" href="#home">kb<span>.</span></a>
    <p>© {{ new Date().getFullYear() }} Kong Bunyim · Built with Vue.js</p>
    <a href="#home" class="text-link">Back to top ↑</a>
  </footer>
</template>

<style>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  gap: 20px;
}
footer > p {
  font: 9px var(--mono);
  color: var(--muted);
}
footer .logo {
  font-size: 29px;
}
@media (max-width: 800px) {
  footer > p {
    font-size: 8px;
  }
}
@media (max-width: 560px) {
  footer {
    height: auto;
    min-height: 100px;
    flex-wrap: wrap;
    gap: 10px;
    padding-block: 24px;
  }
  footer .logo {
    font-size: 26px;
  }
  footer > p {
    order: 3;
    width: 100%;
    text-align: center;
    font-size: 8px;
  }
  footer .text-link {
    font-size: 13px;
  }
}
</style>
