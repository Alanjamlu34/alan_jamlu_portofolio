<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header">
        <h2 :ref="setRef" class="section-title text-gradient reveal">Featured Projects</h2>
        <p :ref="setRef" class="section-subtitle reveal stagger-1">Real-world solutions I've developed from concept to deployment.</p>
      </div>
      <div class="projects__grid">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          :ref="setRef"
          class="project-card reveal"
          :class="'stagger-' + (index + 2)"
        >
          <div class="project-card__image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-card__overlay">
              <div class="overlay-buttons">
                <a :href="project.demo" target="_blank" class="btn btn-primary btn-sm">Live Demo</a>
                <a :href="project.github" target="_blank" class="btn btn-secondary btn-sm">Github</a>
              </div>
            </div>
          </div>
          <div class="project-card__content">
            <div class="project-card__tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <h3 class="project-card__title">{{ project.title }}</h3>
            <p class="project-card__description">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { setRef } = useRevealGroup()

const projects = [
  {
    id: 1,
    title: 'Personal Project',
    description: 'My previous web project showcasing my bussines.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1032&auto=format&fit=crop',
    tags: ['Portfolio', 'Vue', 'Nuxt'],
    demo: 'https://alan-jamlu.vercel.app/',
    github: 'https://github.com/Alanjamlu34'
  }
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

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.5rem;
}

.project-card {
  border-radius: var(--clay-radius);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  border: 1.5px solid rgba(255, 255, 255, 0.7);
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02) rotate(0.3deg);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
  border-color: var(--lavender);
}

.project-card__image {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: var(--clay-radius) var(--clay-radius) 0 0;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.project-card:hover .project-card__image img {
  transform: scale(1.08);
}

.project-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.overlay-buttons {
  display: flex;
  gap: 1rem;
}

.project-card__content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-card__tags {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.75rem;
  font-weight: 600;
  color: #4b4b8b;
  background: var(--lavender-soft);
  padding: 0.4rem 0.9rem;
  border-radius: var(--clay-radius-pill);
  border: 1px solid rgba(230, 230, 250, 0.5);
  box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.8), inset -2px -2px 5px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
}

.tag:hover {
  transform: scale(1.08);
  background: var(--lavender);
}

.project-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.project-card__description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.btn-sm {
  padding: 0.5rem 1.2rem;
  font-size: 0.88rem;
}

@media (max-width: 480px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
