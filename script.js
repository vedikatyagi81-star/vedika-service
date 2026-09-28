/* ==========================================
   VEDIKA DIGITAL
   JAVASCRIPT
   ========================================== */


/* ================= NAVBAR ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuButton =
    document.querySelector(".menu-btn");

const navMenu =
    document.querySelector(".nav-menu");


menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("mobile");

});


/* Close mobile menu after clicking link */

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("mobile");

    });

});


/* ================= FAQ ================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(function (item) {

    const question =
        item.querySelector(".faq-question");


    question.addEventListener("click", function () {

        /* Close other questions */

        faqItems.forEach(function (otherItem) {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

            }

        });


        /* Open selected question */

        item.classList.toggle("active");

    });

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const business =
        document.getElementById("business").value;

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value;


    /*
       CHANGE THIS EMAIL
       TO YOUR REAL BUSINESS EMAIL
    */

    const receiver =
        "hello@vedikadigital.com";


    const subject =
        encodeURIComponent(
            "New Project Inquiry - Vedika Digital"
        );


    const body =
        encodeURIComponent(
`
Hello Vedika Digital,

Name: ${name}

Email: ${email}

Business: ${business}

Service Required: ${service}

Message:
${message}
`
        );


    window.location.href =
        `mailto:${receiver}?subject=${subject}&body=${body}`;

});


/* ================= SCROLL ANIMATION ================= */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .why-card, .process-item, .work-card"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});
