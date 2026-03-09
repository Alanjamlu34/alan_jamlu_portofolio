<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title text-gradient">Tech Stack</h2>
        <p class="section-subtitle">The tools and technologies I use to bring ideas to life.</p>
      </div>
      <div class="skills__grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-card clay" :style="{ borderColor: skill.color }">
          <div class="skill-card__icon" :style="{ color: skill.color }">
            <img :src="skill.iconUrl" alt="icon" style="width: 64px; height: 64px; border-radius: 12px; object-fit: cover;" />
          </div>
          <h3 class="skill-card__name">{{ skill.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'JavaScript (Vue/Nuxt)', color: '#f7df1e', iconUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop' },
  { name: 'Python (Flask)', color: '#306998', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/500px-Python-logo-notext.svg.png' },
  { name: 'MySQL', color: '#00758F', iconUrl: 'https://www.liblogo.com/img-logo/my425m198-mysql-logo-mysql-logo-free-icon-of-vector-logo.png' },
  { name: 'Tensorflow', color: '#00758F', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/1280px-TensorFlow_logo.svg.png' },
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
  padding: 2rem;
  border-radius: var(--clay-radius);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  background: white;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.05);
  border-color: currentColor;
  box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.1), var(--clay-shadow-in);
}

.skill-card__icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-card__name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.skill-card__level {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
}
</style>
