<template>
  <header class="header glass" :class="{ 'header--scrolled': isScrolled }">
    <div class="container header__content">
      <div class="header__logo">
        <span class="text-gradient fw-bold fs-large">ALAN.DEV</span>
      </div>
      <nav class="header__nav" :class="{ 'header__nav--active': isMenuOpen }">
        <a href="#hero" class="nav-link" @click="closeMenu">Home</a>
        <a href="#about" class="nav-link" @click="closeMenu">About</a>
        <a href="#skills" class="nav-link" @click="closeMenu">Skills</a>
        <a href="#projects" class="nav-link" @click="closeMenu">Projects</a>
      </nav>
      <div class="header__actions">
        <a href="#contact" class="btn btn-primary btn-sm">Let's Talk</a>
        <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
          <svg v-if="!isMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const fsLarge = 'clamp(1.2rem, 2vw, 1.4rem)'
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.header--scrolled {
  padding: 0.75rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-family: var(--font-heading);
  font-weight: 800;
  letter-spacing: -1px;
}

.header__nav {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.nav-link:hover {
  color: var(--text-primary);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.fw-bold { font-weight: 800; }
.fs-large { font-size: 1.4rem; }

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  
  .header__nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--bg-secondary);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    border-bottom: 1px solid var(--card-border);
  }
  
  .header__nav--active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
}
</style>
