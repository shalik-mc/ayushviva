/*==================================================
  AYUSHVIVA V2.0
  SCRIPT.JS
==================================================*/

/*======================
  MOBILE MENU TOGGLE
=======================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu when clicking a link (mobile UX fix) */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/*======================
  HEADER SCROLL EFFECT
=======================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/*======================
  FAQ ACCORDION
=======================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");

        // Close others (optional cleaner UX)
        faqItems.forEach(other => {
            if (other !== item) {
                other.classList.remove("active");
            }
        });
    });
});

/*======================
  BACK TO TOP BUTTON
=======================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/*======================
  ACTIVE NAV LINK ON SCROLL
=======================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/*======================
  SMOOTH SCROLL ENHANCEMENT
=======================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/*======================
  SIMPLE LOAD ANIMATION
=======================*/

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


/*==================================================
  WHATSAPP LEAD SYSTEM (BUSINESS CORE)
==================================================*/

const leadForm = document.getElementById("leadForm");

leadForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value;

    const businessNumber = "918606073042";

    const whatsappMessage = `
New Lead from AyushViva Website 🚀

Name: ${name}
Phone: ${phone}
Interest: ${interest}
Message: ${message}
    `;

    const url = `https://wa.me/${businessNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
});

/*==================================================
  PRODUCT CLICK TRACKING (SIMPLE ANALYTICS)
==================================================*/

document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {

        const product = card.querySelector("h3")?.innerText;

        const msg = `Interest in product: ${product}`;

        console.log(msg);

        // Optional WhatsApp quick lead (can be enabled later)
        // window.open(`https://wa.me/918606073042?text=${msg}`);
    });
});