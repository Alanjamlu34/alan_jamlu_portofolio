/**
 * useReveal — scroll-triggered reveal animation composable.
 *
 * Usage:
 *   const { revealRef } = useReveal()          // single element
 *   const { revealRefs } = useRevealGroup()    // multiple staggered elements
 *
 * In your template add:
 *   <div ref="revealRef" class="reveal">…</div>
 *
 * CSS class "reveal" starts hidden; the observer adds "revealed" when visible.
 */

export function useReveal(options = {}) {
  const revealRef = ref(null)

  const defaults = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px',
    ...options
  }

  onMounted(() => {
    if (!revealRef.value) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, defaults)

    observer.observe(revealRef.value)
  })

  return { revealRef }
}

export function useRevealGroup(options = {}) {
  const revealRefs = ref([])

  const defaults = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
    ...options
  }

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, defaults)

    revealRefs.value.forEach((el) => {
      if (el) observer.observe(el)
    })
  })

  const setRef = (el) => {
    if (el) revealRefs.value.push(el)
  }

  return { revealRefs, setRef }
}
