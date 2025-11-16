<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="Simple, responsive, accessible landing page template." />
  <title>Awesome Landing — Template</title>
  <link rel="stylesheet" href="styles.css" />
  <script defer src="script.js"></script>
</head>
<body>
  <header class="site-header" role="banner">
    <div class="container">
      <a class="logo" href="#">Awesome</a>
      <button id="navToggle" class="nav-toggle" aria-expanded="false" aria-controls="primaryNav" aria-label="Toggle navigation">
        ☰
      </button>
      <nav id="primaryNav" class="nav" role="navigation">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a class="btn" href="#get-started">Get Started</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero" id="home" aria-labelledby="hero-heading">
      <div class="container hero-inner">
        <div>
          <h1 id="hero-heading">Build faster. Ship smarter.</h1>
          <p class="lead">A clean, accessible, and responsive website starter you can customize quickly.</p>
          <p class="cta-row">
            <a class="btn primary" href="#get-started">Get Started</a>
            <a class="btn outline" href="#features">See Features</a>
          </p>
        </div>
        <figure class="hero-illustration" aria-hidden="true">
          <!-- Replace with real SVG/PNG -->
          <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="220" rx="12" fill="#E6F0FF"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#1e3a8a" font-size="20">Hero Image</text>
          </svg>
        </figure>
      </div>
    </section>

    <section class="container features" id="features" aria-labelledby="features-heading">
      <h2 id="features-heading">Features</h2>
      <div class="grid">
        <article class="card">
          <h3>Fast & Lightweight</h3>
          <p>Small CSS and minimal JS for fast load times and high Lighthouse scores.</p>
        </article>
        <article class="card">
          <h3>Accessible</h3>
          <p>Semantic HTML, keyboard navigation, visible focus states and good color contrast.</p>
        </article>
        <article class="card">
          <h3>Responsive</h3>
          <p>Mobile-first layout that looks great on phones, tablets, and desktops.</p>
        </article>
      </div>
    </section>

    <section class="container pricing" id="pricing" aria-labelledby="pricing-heading">
      <h2 id="pricing-heading">Pricing</h2>
      <div class="grid pricing-grid">
        <div class="card">
          <h3>Free</h3>
          <p class="price">$0</p>
          <ul>
            <li>Starter templates</li>
            <li>Community support</li>
          </ul>
          <a class="btn" href="#get-started">Choose</a>
        </div>
        <div class="card featured">
          <h3>Pro</h3>
          <p class="price">$9/mo</p>
          <ul>
            <li>Advanced features</li>
            <li>Email support</li>
          </ul>
          <a class="btn primary" href="#get-started">Choose</a>
        </div>
      </div>
    </section>

    <section class="container contact" id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      <form id="contactForm" action="#" method="POST" novalidate>
        <label>
          <span class="sr-only">Name</span>
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          <span class="sr-only">Email</span>
          <input name="email" type="email" placeholder="Email address" required />
        </label>
        <label>
          <span class="sr-only">Message</span>
          <textarea name="message" placeholder="How can we help?" rows="4" required></textarea>
        </label>
        <button class="btn primary" type="submit">Send Message</button>
      </form>
    </section>
  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container footer-inner">
      <p>&copy; <span id="year"></span> Awesome — Built with care.</p>
      <nav aria-label="Footer">
        <ul class="footer-links">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</body>
</html>
