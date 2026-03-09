<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
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
</script>

<style scoped>
.header {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 3rem);
  max-width: 1200px;
  z-index: 1000;
  padding: 0.9rem 2rem;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: var(--clay-radius-pill);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  border: 1.5px solid rgba(255, 255, 255, 0.8);
}

.header--scrolled {
  padding: 0.65rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.header__logo {
  font-family: var(--font-heading);
  font-weight: 800;
  letter-spacing: -1px;
}

.header__nav {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.4rem 1rem;
  border-radius: var(--clay-radius-pill);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--lavender-soft);
  box-shadow: inset 3px 3px 6px rgba(255, 255, 255, 0.8), inset -3px -3px 6px rgba(0, 0, 0, 0.04);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.88rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  background: var(--lavender-soft);
}

.fw-bold { font-weight: 800; }
.fs-large { font-size: 1.4rem; }

@media (max-width: 768px) {
  .header {
    width: calc(100% - 2rem);
    padding: 0.8rem 1.25rem;
  }

  .menu-toggle {
    display: block;
  }
  
  .header__nav {
    position: absolute;
    top: calc(100% + 0.75rem);
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 1.5rem;
    gap: 0.5rem;
    transform: translateY(-20px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: var(--clay-radius);
    box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
    border: 1.5px solid rgba(255, 255, 255, 0.7);
  }
  
  .header__nav--active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
}
</style>
