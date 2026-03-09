<template>
  <footer class="footer">
    <div class="container footer__content flow-in">
      <div class="footer__brand">
        <h2 class="text-gradient">ALAN.DEV</h2>
        <p>I build solutions that solve business problems and provide delightful user experiences.</p>
      </div>
      <div class="footer__socials">
        <a href="https://www.linkedin.com/in/paulinus-alan-sanjaya-jamlu/" target="_blank" class="social-pill" title="LinkedIn">LinkedIn</a>
        <a href="https://github.com/Alanjamlu34" target="_blank" class="social-pill" title="Github">Github</a>
      </div>
    </div>
    <div class="container footer__note flow-in">
      <div class="important-note">
        <h3>Service Focus & Important Note</h3>
        <p>
          I specialize exclusively in building <strong>one-page static web apps</strong> such as personal portfolios, simple business pages, and landing pages.
        </p>
        <p>
          <em>Please note:</em> I do not offer full-stack development. Building and deploying full-stack apps requires significantly more resources and complex deployments. This falls outside my initial goal of delivering simple, affordable, and highly optimized websites.
        </p>
      </div>
    </div>
    <div class="footer__bottom container flow-in">
      <p>&copy; 2026 Alan Jamlu. All rights reserved.</p>
      <div class="footer__links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 6rem 0 3rem;
  background: linear-gradient(180deg, var(--bg-primary), rgba(230, 230, 250, 0.2));
  border-top: none;
  position: relative;
}

.footer__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}

.footer__brand {
  max-width: 400px;
}

.footer__brand h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.footer__brand p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
}

.footer__socials {
  display: flex;
  gap: 1rem;
}

.social-pill {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: 0.6rem 1.3rem;
  border-radius: var(--clay-radius-pill);
  background: white;
  box-shadow: var(--clay-shadow-out), var(--clay-shadow-in);
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.social-pill:hover {
  transform: translateY(-4px) scale(1.06);
  color: var(--accent-primary);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
  background: var(--lavender-soft);
}

.footer__note {
  margin-bottom: 3rem;
}

.important-note {
  padding: 2rem 2.5rem;
  border-radius: var(--clay-radius);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--clay-shadow-deep), var(--clay-shadow-in);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  max-width: 800px;
  margin: 0 auto;
}

.important-note:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 20px 20px 45px rgba(0, 0, 0, 0.1), var(--clay-shadow-in);
}

.important-note h3 {
  font-size: 1.1rem;
  color: var(--accent-primary);
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.important-note p {
  color: var(--text-secondary);
  font-size: 0.92rem;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.important-note p:last-child {
  margin-bottom: 0;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  border-top: 1.5px solid rgba(255, 255, 255, 0.5);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.footer__links {
  display: flex;
  gap: 2rem;
}

.footer__links a {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.footer__links a:hover {
  color: var(--accent-primary);
}

@media (max-width: 768px) {
  .footer__content {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  
  .footer__bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}
</style>
