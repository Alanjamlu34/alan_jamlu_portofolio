<template>
  <footer class="footer">
    <div class="container footer__content flow-in">
      <div class="footer__brand">
        <h2 class="text-gradient">ALAN.DEV</h2>
        <p>I build solutions that solve business problems and provide delightful user experiences.</p>
      </div>
      <div class="footer__socials">
        <a href="https://www.linkedin.com/in/paulinus-alan-sanjaya-jamlu/" target="_blank" class="social-link" title="LinkedIn">LinkedIn</a>
        <a href="https://github.com/Alanjamlu34" target="_blank" class="social-link" title="Github">Github</a>
        <!-- <a href="#" class="social-link" title="Twitter">Twitter</a> -->
      </div>
    </div>
    <div class="container footer__note flow-in">
      <div class="important-note glass">
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
      <p>&copy; 2024 Alan Jamlu. All rights reserved.</p>
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
  background: var(--bg-secondary);
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
}

.footer__socials {
  display: flex;
  gap: 2rem;
}

.social-link {
  font-weight: 600;
  color: var(--text-secondary);
}

.social-link:hover {
  color: var(--accent-primary);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  border-top: 1px solid var(--card-border);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.footer__note {
  margin-bottom: 3rem;
}

.important-note {
  padding: 1.5rem;
  border-radius: 1rem;
  border-left: 4px solid var(--accent-primary);
  background: rgba(59, 130, 246, 0.05);
}

.important-note h3 {
  font-size: 1.15rem;
  color: var(--accent-primary);
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.important-note p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.important-note p:last-child {
  margin-bottom: 0;
}

.footer__links {
  display: flex;
  gap: 2rem;
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
