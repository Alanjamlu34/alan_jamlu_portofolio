<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title text-gradient">Featured Projects</h2>
        <p class="section-subtitle">Real-world solutions I've developed from concept to deployment.</p>
      </div>
      <div class="projects__grid">
        <div v-for="project in projects" :key="project.id" class="project-card glass group">
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
  // ,
  // {
  //   id: 2,
  //   title: 'E-Commerce Platform',
  //   description: 'A modern shopping experience built with Nuxt.js, featuring a robust shopping cart and complex payment integration.',
  //   image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1032&auto=format&fit=crop',
  //   tags: ['Nuxt 3', 'Vue Storefront', 'Stripe'],
  //   demo: '#',
  //   github: 'https://github.com/Alanjamlu34'
  // },
  // {
  //   id: 3,
  //   title: 'SaaS Dashboard',
  //   description: 'High-performance real-time data visualization dashboard developed for enterprise-level analytics.',
  //   image: 'https://images.unsplash.com/photo-1551288049-bb8c803er832?q=80&w=1032&auto=format&fit=crop',
  //   tags: ['Vue 3', 'D3.js', 'Firebase'],
  //   demo: '#',
  //   github: 'https://github.com/Alanjamlu34'
  // },
  // {
  //   id: 4,
  //   title: 'Personal Finance Tracker',
  //   description: 'Intuitive finance tracker for personal budget management with automated categorization.',
  //   image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop',
  //   tags: ['Nuxt.js', 'Typescript', 'Prisma'],
  //   demo: '#',
  //   github: 'https://github.com/Alanjamlu34'
  // }
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
  border-radius: 2rem;
  overflow: hidden;
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-primary);
}

.project-card__image {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-card__image img {
  transform: scale(1.1);
}

.project-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 17, 21, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
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
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-primary);
  background: rgba(59, 130, 246, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 99px;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.project-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.project-card__description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 480px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
