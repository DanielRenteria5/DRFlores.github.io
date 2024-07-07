const sectionHeroElem = document.querySelector(".section-hero");

const docObserver = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // if HERO SEC is NOT intersecting, then add STICKY to nav
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    // if HERO SEC is intersecting, then remove STICKY class from nav
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

// Element to be observed = .section-hero; since we want the STICKY nav to appear when the hero section is scrolled out of the VP.
if (sectionHeroElem) {
  docObserver.observe(sectionHeroElem);
}

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

// #MODAL-PRESCRIPT and PATIENT INFO - close
const prescOpen = document.querySelectorAll(".prescription-modal-open");
const prescClose = document.querySelector("#prescription-modal-close");

// modal-window
const prescModal = document.querySelector(".prescription-modal");

// CLOSE modal
prescClose.addEventListener("click", function () {
  prescModal.classList.add("hidden");
});

// OPEN modal
prescOpen.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    prescModal.classList.remove("hidden");
    prescModal.classList.add("flex");
  });
});

// prevents scrolling on opened MODAL
prescModal.addEventListener("wheel", function (event) {
  event.preventDefault();
});

// exit MODAL with escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    prescModal.classList.add("hidden");
  }
});

// #MODAL-ONCOLOGIST LEARN MORE
// LEARN MORE button
const oncolMoreOpen = document.getElementById("oncol-more-open");
// close button
const oncolClose = document.getElementById("oncol-close");

// oncol-learn-more-modal
const oncolModal = document.querySelector(".oncologist-more-modal");

// CLOSE modal
oncolClose.addEventListener("click", function () {
  oncolModal.classList.add("hidden");
});

// OPEN modal
oncolMoreOpen.addEventListener("click", function () {
  oncolModal.classList.remove("hidden");
  oncolModal.classList.add("flex");
});

oncolModal.addEventListener("wheel", function (event) {
  event.preventDefault();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    oncolModal.classList.add("hidden");
  }
});

// #ONCOL to REGISTRATION PAGE from REG btn
const oncolRegister = document.getElementById("oncol-register-open");

oncolRegister.addEventListener("click", function () {
  window.location.href = "oncologistRegisterForm.html";
});

// #PATIENT to REGISTRATIONG PAGE from APPLY btn
const patientRegister = document.getElementById("patient-register-open");

patientRegister.addEventListener("click", function () {
  window.location.href = "patientRegisterForm.html";
});

// #MODAL-PATIENT-LEARN MORE
const patientMoreOpen = document.getElementById("patient-more-open");
const patientModal = document.querySelector(".patient-more-modal");

patientMoreOpen.addEventListener("click", function () {
  patientModal.classList.remove("hidden");
  patientModal.classList.add("flex");
});

const patientClose = document.getElementById("patient-close");
patientClose.addEventListener("click", function () {
  patientModal.classList.add("hidden");
});

patientModal.addEventListener("wheel", function (event) {
  event.preventDefault();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    patientModal.classList.add("hidden");
  }
});

// #ANIMATIONS
// hero section
const loadAnimation = function (ele, className) {
  ele.classList.add(className);
  // Check if element has been loaded
  if (ele.complete) {
    if (typeof ele.onload === "function") {
      ele.onload();
    }
    // otherwise, ensure the class is added again on onload if needed
  } else {
    ele.onload = function () {
      ele.classList.add(className);
    };
  }
};

const heroImage = document.querySelector(".hero-image");
const heroHeader = document.querySelector(".hero-header");
const heroArrow = document.querySelector(".hero-arrow");
const heroImgMob = document.querySelector(".hero-mobile-image");

document.addEventListener("DOMContentLoaded", function () {
  loadAnimation(heroHeader, "show");
  loadAnimation(heroArrow, "show");
  loadAnimation(heroImage, "show");
  loadAnimation(heroImgMob, "show");
});

// #DISABLE preload hero for mobile
if (window.matchMedia("(min-width: 767px)").matches) {
  var heroPreLoad = document.querySelector(
    'link[href="img/hands-hero.jpg"][rel="preload"][as="image"]'
  );
  if (heroPreLoad) {
    heroPreLoad.parentNode.removeChild(heroPreLoad);
  }
}

if (window.matchMedia("(max-width: 991px)").matches) {
  var heroPreLoad = document.querySelector(
    'link[href="path/to/image.jpg"][rel="preload"][as="image"]'
  );
  if (heroPreLoad) {
    heroPreLoad.parentNode.removeChild(heroPreLoad);
  }
}
