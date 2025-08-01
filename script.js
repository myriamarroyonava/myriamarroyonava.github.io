


// Inicializar GSAP con ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Función para animar elementos al hacer scroll
function animateOnScroll(selector, props) {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    },
    y: props.y || 30,
    opacity: 0,
    duration: props.duration || 0.8,
    ease: props.ease || "power2.out",
    stagger: props.stagger || 0
  });
}


// Animar títulos <h2>
animateOnScroll("h2", { y: 50, duration: 1 });

// Animar subtítulos
animateOnScroll(".subtitle", { y: 30, duration: 0.8 });
animateOnScroll("#frase blockquote", { y: 40, duration: 1 });

// Animar tarjetas de servicios
animateOnScroll(".service-card", { y: 40, duration: 0.7, stagger: 0.2 });

// Animar pasos del proceso
animateOnScroll(".paso", { y: 30, duration: 0.6, stagger: 0.2 });

// Animar "Sobre Mí"
gsap.from(".about-image-circle", { 
  scrollTrigger: { trigger: "#sobre-mi", start: "top 80%" },
  scale: 0.8,
  opacity: 0,
  duration: 0.6
});
gsap.from(".about-text-center p", { 
  scrollTrigger: { trigger: "#sobre-mi", start: "top 80%" },
  y: 20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2
});

// Animar datos de contacto
gsap.from(".info-item", {
  scrollTrigger: { trigger: "#contacto", start: "top 90%" },
  y: 20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2
});

// Animación del HERO al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".hero-title", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
  });

  gsap.from(".tagline", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.8
  });

  gsap.from(".description", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
    delay: 1.1
  });

  gsap.from(".btn-primary", {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 1.4,
  clearProps: "all" // ← Esto asegura que no queden estilos residuales
});
});

// MENÚ HAMBURGUESA
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  const overlay = document.getElementById("overlay");

  if (!menuToggle || !mobileMenu || !closeMenu || !overlay) {
    console.error("Uno o más elementos del menú no se encontraron en el DOM");
    return;
  }

  menuToggle.addEventListener("click", () => {
    mobileMenu.style.right = "0";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.style.right = "-300px";
    overlay.style.display = "none";
    document.body.style.overflow = "";
  });

  overlay.addEventListener("click", () => {
    mobileMenu.style.right = "-300px";
    overlay.style.display = "none";
    document.body.style.overflow = "";
  });

  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.style.right = "-300px";
      overlay.style.display = "none";
      document.body.style.overflow = "";
    });
  });
});

// Scroll suave al hacer clic en enlaces internos
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces que empiezan con #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Evita el salto brusco

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Ajuste por el header fijo
          behavior: "smooth"
        });
      }
    });
  });
});

// Botón "Subir al inicio"
const scrollToTopBtn = document.getElementById("scrollToTop");

// Mostrar u ocultar el botón según el scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Acción al hacer clic: subir suavemente
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});