//elements
const header = document.querySelector(".nav-header");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelector(".navbar-links");
const toggleBtn = document.querySelector(".toggle");
const sections = document.querySelectorAll("section[id]");
const app = document.querySelector("#app");
const content = document.querySelector(".projects");

// Projects
const projects = [
  {
    title: "Spectra Bank - An online bank application",
    description:
      "Spectra Bank is an online bank that helps you save with the power of technology! With our application, you can easily deposit checks, transfer money, and send and receive payments. All without any hassle. What's more: we've made sure the experience of using Spectra Bank is as seamless as possible. With a modern UI and UX, it's not hard to see why many people are switching their banking to Spectra Bank!",
    image: "https://pbs.twimg.com/media/FeSw4W6VIAEDuOg?format=jpg&name=large",
    tools: "html, css, js, parcel",
    liveLink: "https://spectra-bank.netlify.app",
    githubLink: "https://github.com/shohan-pherones/spectra-bank",
  },
  {
    title: "Tera Guard - An anti-virus website",
    description:
      "A mix of pure simplicity and functional elegance, Tera Guard is a web-based security solution that provides protection against internet threats, malware and cyber-attacks. With our robust system, you can be confident that your data and network are safe from hackers and malicious intent. Enjoy the peace of mind knowing your business is protected with our 24/7 customer support team.",
    image: "https://pbs.twimg.com/media/FeSw8ekVEAEK797?format=jpg&name=large",
    tools: "html, css, js, parcel",
    liveLink: "https://tera-guard.netlify.app",
    githubLink: "https://github.com/shohan-pherones/tera-guard",
  },
  {
    title: "Map - Pro: A workout mapping application",
    description:
      "Fitness and health have never been more accessible. Map - Pro offers an interactive workout mapping app for athletes and fitness enthusiasts who love tracking their workouts and seeing the change in their fitness. Map - Pro is an easy-to-use fitness app that provides safe and effective workouts in the form of mapped routes from different levels of intensity, suitable for all levels of fitness. Take a post-workout walk or jog with your colleagues, go on a bike ride with the family on weekends or even try taking the stairs to work!",
    image: "https://pbs.twimg.com/media/FeSw_tdVsAA4JxI?format=jpg&name=large",
    tools: "html, css, js, leaflet.js, parcel",
    liveLink: "https://map-pro-shohan.netlify.app",
    githubLink: "https://github.com/shohan-pherones/map-pro",
  },
];


//application architecture
class App {
  constructor() {
    this._stickyNavbar();
    this._scrollActive();
    this._toggleMobileNav();
    this._tagCloud();
    this._typeWriter();
    this._renderProjects();
    this._animate();
  }
  //navbar
  _stickyNavbar() {
    const navObs = new IntersectionObserver(this._stickOpn);
    navObs.observe(header);
  }
  _stickOpn(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  }
  //active links
  _scrollActive() {
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offSet = section.offsetTop - 58;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (top >= offSet && top < offSet + height) {
          navItems.forEach((item) => {
            item.classList.remove("active");
            if (
              item.querySelector(".nav-link").getAttribute("href") === `#${id}`
            ) {
              item.classList.add("active");
            }
          });
        }
      });
    });
  }
  //toggleMobileNav
  _toggleMobileNav() {
    toggleBtn.addEventListener("click", () => {
      if (toggleBtn.classList.contains("toggle-close")) {
        toggleBtn.classList.remove("toggle-close");
        setTimeout(() => {
          navLinks.classList.remove("link-open");
        }, 500);
        navLinks.style.animation = "mobileNavDisappear 0.55s 1";
      } else {
        toggleBtn.classList.add("toggle-close");
        navLinks.classList.add("link-open");
        navLinks.style.animation = "mobileNavAppear 0.5s 1";
        document.querySelector("html").style.overflow = "hidden";
      }
      navLinks.addEventListener("click", () => {
        toggleBtn.classList.remove("toggle-close");
        navLinks.classList.remove("link-open");
        document.querySelector("html").style.overflow = "visible";
      });
    });
  }
  //tagCloud
  _tagCloud() {
    const texts = [
      " better tomorrow",
      "Uncompromising commitment  ",
      "Standing Lives",
      "Farms Lands",
      "Open Lands",
      "Residential Plots",
      "Apartments ",
      "Independent Houses",
      "Villas",
      
    ];
    const tags = TagCloud(".content", texts, {
      radius: 200,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
      useContainerInlineStyles: false,
    });
  }
  //typeWriter
  _typeWriter() {
    const writer = new Typewriter(app, {
      loop: true,
      delay: 75,
    });
    writer
      .typeString("Many and  Gifts  ")
      .pauseFor(2000)
      .deleteChars(13)
      .pauseFor(2000)
      .typeString(" and Coupons")
      .pauseFor(2000)
      .start();
  }
  //projects
  _renderProjects() {
    projects.forEach((project) => {
      const html = `
<div class="project">
    <div class="project-img">
        <img src="${project.image}" alt="Photo of ${project.title}" />
    </div>
    <h3 class="project-title">
        ${project.title}
    </h3>
    <p class="project-details">
        ${project.description}
    </p>
    <p class="project-tools">Tools: <span>${project.tools}</span></p>
    <div class="project-btns">
        <a href="${project.liveLink}" target="_blank">Live Site &rarr;</a>
        <a href="${project.githubLink}" target="_blank">GitHub &rarr;</a>
    </div>
</div>
`;
      content.insertAdjacentHTML("afterbegin", html);
    });
  }
//aos animate
  _animate() {
    ScrollReveal().reveal('h2', { reset: true , delay: 500, duration: 1000, distance: '100px', origin: 'top', easing: 'ease-in-out'});
    ScrollReveal().reveal('img', { reset: true , delay: 500, duration: 1000, distance: '100px', origin: 'left', easing: 'ease-in-out'});
    ScrollReveal().reveal('p, button, input, label, h3, .project-btns', { reset: true , delay: 500, duration: 1000, distance: '100px', origin: 'right', easing: 'ease-in-out'});
  } 
}

const myApp = new App();

