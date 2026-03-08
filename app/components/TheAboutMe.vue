<template>
  <section id="about" class="about">
    <div class="container about__grid">
      <div class="about__image-container flow-in">
        <div class="about__image glass">
          <img src="/profile.jpg" alt="Alan Jamlu Profile" class="img-fluid" />
        </div>
        <div class="about__experience glass">
          <div class="exp-number">2+</div>
          <div class="exp-text">Years Experience</div>
        </div>
      </div>
      <div class="about__content">
        <h2 class="section-title text-gradient flow-in">About Me</h2>
        <p class="about__description flow-in">
          I'm a Web Developer with a passion for building clean, efficient, and user-friendly web solutions using <span class="underline">Nuxt.js</span> and <span class="underline">Vue.js</span>. My journey in tech is driven by an obsession with <span class="highlight">Frontend Perfection</span>.
        </p>
        <div class="about__stats">
          <div class="stat-item glass flow-in">
            <span class="stat-label">Clients</span>
            <span class="stat-value">5+</span>
          </div>
          <div class="stat-item glass flow-in flow-stagger-1">
            <span class="stat-label">Projects</span>
            <span class="stat-value">12+</span>
          </div>
          <!-- <div class="stat-item glass flow-in flow-stagger-2">
            <span class="stat-label">Success Rate</span>
            <span class="stat-value">99%</span>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

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
  border-radius: 2rem;
  overflow: hidden;
  padding: 2rem;
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
}

.about__image:hover {
  transform: translateY(-10px);
  box-shadow: 0 40px 70px -15px rgba(59, 130, 246, 0.3);
}

.about__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.about__experience {
  position: absolute;
  bottom: -2rem;
  right: -1rem;
  padding: 1.5rem 2rem;
  border-radius: 1.5rem;
  text-align: center;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
}

.exp-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-primary);
  line-height: 1;
}

.exp-text {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
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
}

.highlight {
  color: var(--text-primary);
  font-weight: 600;
}

.underline {
  border-bottom: 2px solid var(--accent-primary);
  display: inline-block;
}

.about__stats {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.stat-item {
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  flex: 1;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.3);
}

.stat-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent-primary);
}

@media (max-width: 992px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
