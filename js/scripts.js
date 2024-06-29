// #STICKY NAV
const sectionHeroElem = document.querySelector(".section-hero");

const docObserver = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // if HERO SEC is NOT intersecting, then add STICKY to nav
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    // if HERO SEC is interseting = true, then remove STICKY class from nav
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-160px",
  }
);
// ELE to be observed = .section-hero; since we want the STICKY nav to appear when the hero section is SCROLLED out of the VP.
docObserver.observe(sectionHeroElem);

// #NAV LINK CLICK OFFSET
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const offset = 64;

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
});

// #MOBILE NAV
const headerEle = document.querySelector(".header");
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const navLinks = document.querySelectorAll("a:link");

btnMobileNav.addEventListener("click", function () {
  headerEle.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    headerEle.classList.remove("nav-open");
  });
});
