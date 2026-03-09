<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title text-gradient">Tech Stack</h2>
        <p class="section-subtitle">The tools and technologies I use to bring ideas to life.</p>
      </div>
      <div class="skills__grid">
        <div v-for="(skill, index) in skills" :key="skill.name" class="skill-card" :class="'skill-card--' + skill.tint">
          <div class="skill-card__icon-wrap">
            <img :src="skill.iconUrl" alt="icon" class="skill-card__icon-img" />
          </div>
          <h3 class="skill-card__name">{{ skill.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'JavaScript (Vue/Nuxt)', tint: 'mint', iconUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop' },
  { name: 'Python (Flask)', tint: 'lavender', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/500px-Python-logo-notext.svg.png' },
  { name: 'MySQL', tint: 'orange', iconUrl: 'https://www.liblogo.com/img-logo/my425m198-mysql-logo-mysql-logo-free-icon-of-vector-logo.png' },
  { name: 'Tensorflow', tint: 'pink', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/1280px-TensorFlow_logo.svg.png' },
]
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
}

.skill-card {
  padding: 2.25rem 2rem;
  border-radius: var(--clay-radius);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1.5px solid transparent;
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  background: white;
}

.skill-card--mint {
  background: var(--mint-soft);
  border-color: rgba(126, 249, 255, 0.25);
}

.skill-card--lavender {
  background: var(--lavender-soft);
  border-color: rgba(230, 230, 250, 0.4);
}

.skill-card--orange {
  background: var(--orange-soft);
  border-color: rgba(255, 179, 71, 0.25);
}

.skill-card--pink {
  background: var(--pink-soft);
  border-color: rgba(255, 224, 239, 0.4);
}

.skill-card:hover {
  transform: translateY(-10px) scale(1.05) rotate(1deg);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
}

.skill-card__icon-wrap {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: var(--clay-radius-sm);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: inset 4px 4px 10px rgba(255, 255, 255, 0.9), inset -4px -4px 10px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.skill-card:hover .skill-card__icon-wrap {
  transform: scale(1.1) rotate(-2deg);
}

.skill-card__icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-card__name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }

  .skills__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}
</style>
