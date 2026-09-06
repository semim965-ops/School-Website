/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   ANIMATED STATISTICS
========================= */

const counters = document.querySelectorAll(".stat h2");

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;

            const updateCounter = () => {

                const increment = Math.max(
                    1,
                    Math.ceil(target / 60)
                );

                current += increment;

                if (current >= target) {
                    counter.textContent = target;
                    return;
                }

                counter.textContent = current;

                requestAnimationFrame(updateCounter);
            };

            updateCounter();

            observer.unobserve(counter);
        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    observer.observe(counter);
});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    alert(
        `Thank you, ${name}! Your message has been received.`
    );

    contactForm.reset();
});
