(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();function c(){const i=document.getElementById("app");i&&(i.innerHTML=`
    ${l()}
    ${r()}
    ${d()}
    ${p()}
    ${h()}
    ${m()}
    ${u()}
    ${v()}
    ${g()}
  `,f(),b(),k(),y(),T(),S())}function l(){return`
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <h1 class="logo">PT</h1>
        <ul class="nav-links" id="navLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="theme-toggle" id="themeToggle">
          <i class="fas fa-sun"></i>
        </button>
        <button class="mobile-menu-toggle" id="mobileMenuToggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  `}function r(){return`
    <section id="home" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Hi, I'm <span class="highlight">Pranjal Tiwari</span>
        </h1>
        <h2 class="hero-subtitle">
          <span id="typingText"></span><span class="cursor">|</span>
        </h2>
        <p class="hero-description">
          MERN Stack Developer | GPS Tracking Systems Specialist | Open Source Contributor
          <br>
          Building production-grade IoT solutions and scalable web applications
        </p>

        <div class="social-links">
          <a href="https://github.com/pranjal030404" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/prajal030404" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:pranjaltiwari69058@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-envelope"></i>
          </a>
        </div>

        <a href="#experience" class="cta-button">View My Experience</a>
      </div>
      <div class="particles" id="particles"></div>
    </section>
  `}function d(){return`
    <section id="about" class="about section-padding">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="fade-in">
              I'm a highly motivated Computer Science student at Babu Banarsi Das Institute of Technology (BBDIT) 
              with a strong foundation in software development, problem-solving, and algorithms. Currently pursuing 
              my BTech in CSE with a CGPA of 8.17, I'm passionate about creating innovative software solutions.
            </p>
            <p class="fade-in">
              As a MERN Stack Intern at Atrivias Technologies, I've architected and developed a production-grade 
              GPS tracking system supporting 600,000+ devices. My expertise includes real-time data streaming, 
              microservices architecture, TCP protocol parsing, and building scalable IoT solutions with advanced 
              dashboards and live tracking capabilities.
            </p>
            <p class="fade-in">
              I'm an active open-source contributor, working with organizations like DOOCS and TheAlgorithms 
              to improve their platforms. Proficient in Python, Java, C, and the complete MERN stack, I'm eager 
              to contribute to innovative projects and continue growing my skills in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  `}function p(){return`
    <section id="experience" class="experience section-padding">
      <div class="container">
        <h2 class="section-title">Professional Experience</h2>
        
        <div class="experience-card fade-in">
          <div class="experience-header">
            <div class="experience-left">
              <div class="company-logo">
                <i class="fas fa-building"></i>
              </div>
              <div class="company-info">
                <h3>MERN Stack Developer Intern</h3>
                <h4>Atrivias Technologies Pvt. Ltd.</h4>
                <p class="location"><i class="fas fa-map-marker-alt"></i> Noida Sector 63</p>
              </div>
            </div>
            <div class="experience-right">
              <span class="duration-badge">
                <i class="fas fa-calendar"></i> Sep 2024 - Present
              </span>
            </div>
          </div>

          <div class="experience-body">
            <div class="project-highlight">
              <h4><i class="fas fa-rocket"></i> GPS Tracking & IoT Management System</h4>
              <p class="project-desc">
                Architected and developed a production-grade real-time GPS tracking platform 
                with microservices architecture, handling live vehicle monitoring and analytics.
              </p>
            </div>

            <div class="work-highlights">
              <div class="highlight-row">
                <div class="highlight-card">
                  <i class="fas fa-microchip"></i>
                  <h5>Protocol Development</h5>
                  <p>Built GT06/Concox GPS device protocol parser with TCP server for real-time data streaming</p>
                </div>
                <div class="highlight-card">
                  <i class="fas fa-project-diagram"></i>
                  <h5>Microservices Architecture</h5>
                  <p>Designed scalable system using Redis Streams for message queuing and service isolation</p>
                </div>
              </div>

              <div class="highlight-row">
                <div class="highlight-card">
                  <i class="fas fa-server"></i>
                  <h5>Backend Development</h5>
                  <p>Built RESTful APIs with Node.js/Express, MongoDB schemas, and Socket.io integration</p>
                </div>
                <div class="highlight-card">
                  <i class="fas fa-map-marked-alt"></i>
                  <h5>Real-time Dashboard</h5>
                  <p>Created React dashboard with live tracking, route history, and analytics visualization</p>
                </div>
              </div>
            </div>

            <div class="key-achievements">
              <h5><i class="fas fa-trophy"></i> Key Achievements</h5>
              <ul>
                <li>Implemented real-time vehicle tracking with live map visualization</li>
                <li>Built historical route playback with speed and distance analytics</li>
                <li>Developed geofencing alerts and notification system</li>
                <li>Created advanced fleet management dashboard with filtering capabilities</li>
              </ul>
            </div>

            <div class="tech-stack">
              <h5><i class="fas fa-code"></i> Technologies Used</h5>
              <div class="tech-badges">
                <span class="tech-badge">Node.js</span>
                <span class="tech-badge">React</span>
                <span class="tech-badge">MongoDB</span>
                <span class="tech-badge">Redis</span>
                <span class="tech-badge">Socket.io</span>
                <span class="tech-badge">Express.js</span>
                <span class="tech-badge">TCP/IP</span>
                <span class="tech-badge">Microservices</span>
                <span class="tech-badge">Leaflet.js</span>
                <span class="tech-badge">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function h(){return`
    <section id="education" class="education section-padding">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-grid">
          <div class="education-card fade-in">
            <div class="education-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>BTech in Computer Science Engineering</h3>
            <h4>Babu Banarsi Das Institute of Technology (BBDIT), AKTU</h4>
            <p class="education-year">2022 - 2026</p>
            <p class="education-grade">CGPA: 8.17</p>
          </div>

          <div class="education-card fade-in">
            <div class="education-icon">
              <i class="fas fa-school"></i>
            </div>
            <h3>12th Grade (PCM)</h3>
            <h4>Rampus, CBSE</h4>
            <p class="education-year">2021</p>
          </div>

          <div class="education-card fade-in">
            <div class="education-icon">
              <i class="fas fa-book"></i>
            </div>
            <h3>10th Grade</h3>
            <h4>Rampus, CBSE</h4>
            <p class="education-year">2019</p>
          </div>
        </div>
      </div>
    </section>
  `}function m(){return`
    <section id="skills" class="skills section-padding">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        <div class="skills-grid">
          ${[{category:"Programming Languages",skills:[{name:"JavaScript/Node.js",level:90},{name:"Python",level:85},{name:"Java",level:80},{name:"C",level:75}]},{category:"Web Development (MERN Stack)",skills:[{name:"React",level:85},{name:"Node.js & Express",level:90},{name:"MongoDB",level:85},{name:"REST APIs",level:85}]},{category:"DevOps & Cloud",skills:[{name:"Docker",level:75},{name:"Kubernetes",level:70},{name:"Linux Administration",level:80},{name:"Git/GitHub",level:85}]},{category:"Database & Caching",skills:[{name:"MongoDB",level:85},{name:"Redis",level:80},{name:"MySQL",level:80}]},{category:"IoT & Real-time Systems",skills:[{name:"TCP/IP Protocols",level:85},{name:"Socket.io/WebSockets",level:85},{name:"GPS Device Integration",level:90},{name:"Microservices",level:80}]}].map(e=>`
    <div class="skill-category">
      <h3 class="skill-category-title">${e.category}</h3>
      ${e.skills.map(t=>`
        <div class="skill-item">
          <div class="skill-info">
            <span class="skill-name">${t.name}</span>
            <span class="skill-percentage">${t.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" data-progress="${t.level}"></div>
          </div>
        </div>
      `).join("")}
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function u(){return`
    <section id="projects" class="projects section-padding">
      <div class="container">
        <h2 class="section-title">Additional Projects</h2>
        <div class="projects-grid">
          ${[{icon:"fa-code-branch",title:"DOOCS LeetCode Website",description:"Open source contribution as website developer for DOOCS organization. Managing website orientation, providing LeetCode solutions, and optimizing database loading speed for better performance.",tech:["Web Development","Database Optimization","Open Source"],github:"https://github.com/doocs",demo:"https://github.com/doocs/leetcode"},{icon:"fa-laptop-code",title:"TheAlgorithms Website Maintainer",description:"Part of website_maintainers and algorithms-explanation_maintainers team. Improvising the website and implementing Docker containerization for cross-platform compatibility.",tech:["Docker","Web Development","DevOps","Open Source"],github:"https://github.com/TheAlgorithms",demo:"https://the-algorithms.com"},{icon:"fa-book",title:"Library Management System",description:"Full-stack GUI application with Tkinter and MySQL. Complete frontend and backend integration for managing library data with easy update and upgrade capabilities.",tech:["Python","Tkinter","MySQL","GUI Development"],github:"https://github.com/pranjal030404",demo:"#"},{icon:"fa-youtube",title:"YouTube Clone",description:"GUI-based YouTube clone using Tailwind CSS with YouTube API integration. Features working like/dislike functionality and complete backend integration.",tech:["Tailwind CSS","API Integration","JavaScript","Backend"],github:"https://github.com/pranjal030404",demo:"#"},{icon:"fa-gamepad",title:"Snake Game",description:"Classic snake game built with Python using Tkinter library. Custom GUI with dynamic snake movement and food collection mechanics.",tech:["Python","Tkinter","Game Development"],github:"https://github.com/pranjal030404",demo:"#"}].map(e=>`
    <div class="project-card">
      <div class="project-icon">
        <i class="fas ${e.icon}"></i>
      </div>
      <h3>${e.title}</h3>
      <p class="project-description">${e.description}</p>
      <div class="tech-stack">
        ${e.tech.map(t=>`<span class="tech-tag">${t}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${e.github}" target="_blank">
          <i class="fab fa-github"></i> View Project
        </a>
      </div>
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function v(){return`
    <section id="contact" class="contact section-padding">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-container">
          <div class="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm eager to contribute to innovative software solutions and always open to 
              discussing new projects, internship opportunities, or full-time positions in 
              software development and IoT systems.
            </p>

            <div class="contact-details">
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>pranjaltiwari69058@gmail.com</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <span>+91 7607501687 / 8400095088</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>C-23, Noida Sector 52</span>
              </div>
              <div class="contact-item">
                <i class="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/prajal030404" target="_blank">LinkedIn Profile</a>
              </div>
              <div class="contact-item">
                <i class="fab fa-github"></i>
                <a href="https://github.com/pranjal030404" target="_blank">GitHub Profile</a>
              </div>
            </div>
          </div>

          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <input type="text" name="name" placeholder="Your Name" required>
            </div>

            <div class="form-group">
              <input type="email" name="email" placeholder="Your Email" required>
            </div>

            <div class="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" class="submit-button">Send Message</button>

            <p class="success-message" id="successMessage">Message sent successfully!</p>
          </form>
        </div>
      </div>
    </section>
  `}function g(){return`
    <footer class="footer">
      <p>&copy; 2025 Pranjal Tiwari. All rights reserved.</p>
      <div class="footer-links">
        <a href="https://github.com/pranjal030404" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/prajal030404" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:pranjaltiwari69058@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
      </div>
    </footer>
  `}function f(){const i=document.getElementById("themeToggle"),a=document.body;a.classList.add("dark-mode"),i==null||i.addEventListener("click",()=>{a.classList.toggle("dark-mode"),a.classList.toggle("light-mode");const e=i.querySelector("i");e&&(e.className=a.classList.contains("dark-mode")?"fas fa-sun":"fas fa-moon")})}function b(){const i=document.getElementById("typingText"),a="Full Stack Developer & IoT Specialist";let e=0;function t(){i&&e<a.length&&(i.textContent+=a.charAt(e),e++,setTimeout(t,100))}setTimeout(t,500)}function k(){const i={threshold:.1,rootMargin:"0px 0px -100px 0px"},a=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting&&(t.target.classList.add("visible"),t.target.classList.contains("skill-item"))){const s=t.target.querySelector(".skill-progress"),n=s==null?void 0:s.getAttribute("data-progress");s&&n&&setTimeout(()=>{s.style.width=n+"%"},200)}})},i);document.querySelectorAll(".fade-in, .skill-item, .project-card, .education-card, .experience-item").forEach(e=>{a.observe(e)})}function y(){const i=document.getElementById("contactForm"),a=document.getElementById("successMessage");i==null||i.addEventListener("submit",e=>{e.preventDefault(),a==null||a.classList.add("show"),i.reset(),setTimeout(()=>{a==null||a.classList.remove("show")},3e3)})}function T(){document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(a){a.preventDefault();const e=document.querySelector(this.getAttribute("href"));e==null||e.scrollIntoView({behavior:"smooth",block:"start"})})})}function S(){const i=document.getElementById("particles"),a=50;for(let e=0;e<a;e++){const t=document.createElement("div");t.className="particle",t.style.left=Math.random()*100+"%",t.style.top=Math.random()*100+"%",t.style.animationDelay=Math.random()*20+"s",t.style.animationDuration=Math.random()*10+15+"s",i==null||i.appendChild(t)}}document.addEventListener("DOMContentLoaded",()=>{c()});
