<template>
  <section id="experience" class="section container">
    <div class="section-heading">
      <div>
        <p class="eyebrow">03 / THE JOURNEY SO FAR</p>
        <h2>Learning by building<span class="accent">.</span></h2>
      </div>
      <p>
        Real teams. Real challenges.<br />A new perspective with every
        experience.
      </p>
    </div>
    <div class="experience-layout">
      <div class="experience-label">
        <span class="status-dot"></span> PROFESSIONAL EXPERIENCE
      </div>
      <div class="experience-list">
        <article class="experience-item">
          <div class="experience-top">
            <div>
              <h3>Full-Stack Developer</h3>
              <p>Samai Distillery</p>
            </div>
            <span class="date">JUL 2026</span>
          </div>
          <p>
            Developed a full-stack web application with an interactive product
            location map and admin dashboard. Integrated responsive interfaces
            and database functionality, and documented the system for developers
            and users.
          </p>
          <div class="tags">
            <span>Full-stack development</span><span>Interactive maps</span
            ><span>Admin dashboard</span>
          </div>
        </article>
        <article class="experience-item">
          <div class="experience-top">
            <div>
              <h3>Global Market</h3>
              <p>Natixis Corporate & Investment Banking</p>
            </div>
            <span class="date">JUN 2026</span>
          </div>
          <p>
            Created a client onboarding dashboard, worked with Excel and
            SharePoint data, and prepared instructional documentation for the
            business management team while collaborating in an international
            banking environment.
          </p>
          <div class="tags">
            <span>Dashboards</span><span>Data workflows</span
            ><span>Team collaboration</span>
          </div>
        </article>
      </div>
    </div>
    <div class="education">
      <span class="eyebrow">EDUCATION</span>
      <div>
        <h3>Web & Mobile Application Development</h3>
        <p>School of Business, PSE Institute</p>
      </div>
      <span class="date">2025 — PRESENT</span>
    </div>
    <div class="education">
      <span class="eyebrow">FOUNDATION</span>
      <div>
        <h3>High School · Grade 12</h3>
        <p>Chea Sim Samaki High School</p>
      </div>
      <span class="date">2024</span>
    </div>
  </section>
</template>

<style>
.date {
  font-family: var(--mono);
}
.experience-layout {
  display: grid;
  grid-template-columns: 1fr 2.3fr;
  margin-top: 45px;
  gap: 30px;
}
.experience-label {
  display: flex;
  gap: 9px;
  align-items: center;
  align-self: start;
  font: 9px var(--mono);
  letter-spacing: 0.8px;
  color: var(--muted);
  padding-top: 10px;
}
.experience-item {
  padding-bottom: 28px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 29px;
}
.experience-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
}
.experience-top h3 {
  font-size: 24px;
  letter-spacing: -0.6px;
}
.experience-top > div > p {
  font-size: 12px;
  color: var(--accent);
  margin-top: 8px;
}
.date {
  font-size: 9px;
  letter-spacing: 0.7px;
  color: var(--muted);
  white-space: nowrap;
  padding-top: 5px;
}
.experience-item > p {
  font-size: 13px;
  line-height: 1.9;
  color: var(--muted);
  margin-top: 18px;
}
.experience-item .tags {
  margin-top: 18px;
}
.education {
  display: grid;
  grid-template-columns: 1fr 1.85fr 0.45fr;
  gap: 30px;
  align-items: center;
  border-bottom: 1px solid var(--border);
  padding: 22px 0;
}
.education h3 {
  font-size: 18px;
}
.education p {
  font-size: 11px;
  margin-top: 6px;
  color: var(--muted);
}
.education > .date {
  text-align: right;
}
@media (max-width: 800px) {
  .experience-layout {
    grid-template-columns: 1fr;
    gap: 22px;
    margin-top: 35px;
  }
  .experience-top h3 {
    font-size: 22px;
  }
  .education {
    grid-template-columns: 0.65fr 1.9fr 0.7fr;
    gap: 15px;
  }
  .education h3 {
    font-size: 16px;
  }
}
@media (max-width: 560px) {
  .experience-top {
    gap: 12px;
  }
  .experience-top h3 {
    font-size: 20px;
  }
  .experience-top > div > p {
    font-size: 11px;
  }
  .experience-item > p {
    font-size: 12px;
  }
  .date {
    font-size: 8px;
  }
  .education {
    grid-template-columns: 1fr auto;
    gap: 14px;
  }
  .education > .eyebrow {
    grid-column: 1 / -1;
    font-size: 9px;
  }
  .education h3 {
    font-size: 16px;
  }
  .education p {
    font-size: 10px;
  }
}
</style>
