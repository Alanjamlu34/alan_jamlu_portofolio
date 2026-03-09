<template>
  <section id="about" class="about">
    <div class="container about__grid">
      <div :ref="setRef" class="about__image-container reveal reveal-left">
        <div class="about__image">
          <img src="../public/profile.jpg" alt="Alan Jamlu Profile" class="img-fluid" />
        </div>
        <div class="about__experience">
          <div class="exp-number">2+</div>
          <div class="exp-text">Years Experience</div>
        </div>
      </div>
      <div class="about__content">
        <h2 :ref="setRef" class="section-title text-gradient reveal stagger-1">About Me</h2>
        <p :ref="setRef" class="about__description reveal stagger-2">
          I'm a Web Developer with a passion for building clean, efficient, and user-friendly web solutions using <span class="underline">Nuxt.js</span> and <span class="underline">Vue.js</span>. My journey in tech is driven by an obsession with <span class="highlight">Frontend Perfection</span>.
        </p>
        <div class="about__stats">
          <div :ref="setRef" class="stat-item stat-item--lavender reveal reveal-scale stagger-3">
            <span class="stat-label">Clients</span>
            <span class="stat-value">5+</span>
          </div>
          <div :ref="setRef" class="stat-item stat-item--orange reveal reveal-scale stagger-4">
            <span class="stat-label">Projects</span>
            <span class="stat-value">12+</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { setRef } = useRevealGroup()
</script>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
}

.about__image-container {
  position: relative;
}

.about__image {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--clay-radius);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
  border: 2px solid rgba(255, 255, 255, 0.7);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.about__image:hover {
  transform: translateY(-10px) scale(1.02) rotate(-0.5deg);
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.12), var(--clay-shadow-in);
  border-color: var(--lavender);
}

.about__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about__experience {
  position: absolute;
  bottom: -2rem;
  right: -1rem;
  padding: 1.5rem 2rem;
  background: var(--mint-soft);
  border-radius: var(--clay-radius);
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  border: 1.5px solid rgba(126, 249, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.about__experience:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
}

.exp-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0b4f52;
  line-height: 1;
}

.exp-text {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0b4f52;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
}

.about__description {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.highlight {
  color: var(--text-primary);
  font-weight: 700;
}

.underline {
  border-bottom: 2.5px solid var(--accent-primary);
  display: inline-block;
  padding-bottom: 1px;
}

.about__stats {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.stat-item {
  padding: 1.25rem 1.75rem;
  border-radius: var(--clay-radius-sm);
  flex: 1;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  border: 1.5px solid transparent;
}

.stat-item--lavender {
  background: var(--lavender-soft);
  border-color: rgba(230, 230, 250, 0.5);
}

.stat-item--orange {
  background: var(--orange-soft);
  border-color: rgba(255, 179, 71, 0.3);
}

.stat-item:hover {
  transform: translateY(-6px) scale(1.06);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
}

.stat-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin-bottom: 0.3rem;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text-primary);
}

.stat-item--lavender .stat-label,
.stat-item--lavender .stat-value { color: #4b4b8b; }

.stat-item--orange .stat-label,
.stat-item--orange .stat-value { color: #7b4300; }

@media (max-width: 992px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
