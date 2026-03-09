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
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
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
  padding: 1.5rem 2rem;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  /* Combined Claymorphism and Glassmorphism */
  box-shadow: 
    16px 16px 32px rgba(0, 0, 0, 0.1), 
    inset 10px 10px 20px rgba(255, 255, 255, 0.9), 
    inset -10px -10px 20px rgba(0, 0, 0, 0.03);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  max-width: 800px;
  margin: 0 auto;
}

.important-note:hover {
  transform: translateY(-3px) scale(1.01);
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 
    20px 20px 40px rgba(0, 0, 0, 0.12), 
    inset 10px 10px 20px rgba(255, 255, 255, 0.95), 
    inset -10px -10px 20px rgba(0, 0, 0, 0.05);
}

.important-note h3 {
  font-size: 1.05rem;
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.important-note p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
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
