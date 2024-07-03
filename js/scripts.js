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

// #MODALS GLOBAL
const modalUnderlay = document.querySelector(".modal-underlay");

// #MODAL-PRESCRIPT and PATIENT INFO - close
const prescOpen = document.querySelectorAll(".prescription-modal-open");
const prescClose = document.querySelector("#prescription-modal-close");

// modal-window
const prescModal = document.querySelector(".prescription-modal");

// CLOSE modal
prescClose.addEventListener("click", function () {
  prescModal.classList.add("hidden");
  modalUnderlay.classList.add("hidden");
});

// OPEN modal
prescOpen.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    prescModal.classList.remove("hidden");
    modalUnderlay.classList.remove("hidden");
    prescModal.classList.add("flex");
  });
});

// prevents scrolling on UNDERLAY when modal is open
modalUnderlay.addEventListener("wheel", function (event) {
  event.preventDefault();
});

// prevents scrolling on opened MODAL
prescModal.addEventListener("wheel", function (event) {
  event.preventDefault();
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
  modalUnderlay.classList.add("hidden");
});

// OPEN modal
oncolMoreOpen.addEventListener("click", function () {
  oncolModal.classList.remove("hidden");
  modalUnderlay.classList.remove("hidden");
  oncolModal.classList.add("flex");
});

oncolModal.addEventListener("wheel", function (event) {
  event.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (
    (e.key === "Escape" && !oncolModal.classList.contains("hidden")) ||
    !prescModal.classList.contains("hidden")
  ) {
    // closeModal();
    oncolModal.classList.add("hidden");
    modalUnderlay.classList.add("hidden");
    prescModal.classList.add("hidden");
  }
});

modalUnderlay.addEventListener("click", function () {
  oncolModal.classList.add("hidden");
  modalUnderlay.classList.add("hidden");
  prescModal.classList.add("hidden");
});

const oncolRegOpen = document.querySelector("oncol-register-open");
