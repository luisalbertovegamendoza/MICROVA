
/* =========================================
   MICROVA - JAVASCRIPT PRINCIPAL
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // NAVBAR AL HACER SCROLL
    // =====================================

    const navbar = document.querySelector(".navbar-microva");

    function handleNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleNavbar);
    handleNavbar();


    // =====================================
    // ANIMACIONES DE APARICIÓN
    // =====================================

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("active");
        });

    }


    // =====================================
    // BOTÓN VOLVER ARRIBA
    // =====================================

    const backToTop = document.getElementById("backToTop");

    function handleBackToTop() {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }

    window.addEventListener("scroll", handleBackToTop);

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // =====================================
    // CERRAR MENÚ EN MÓVILES
    // =====================================

    const navLinks = document.querySelectorAll(
        ".navbar-microva .nav-link, .navbar-microva .btn-navbar"
    );

    const navbarCollapse = document.getElementById("navbarMicrova");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            if (
                navbarCollapse.classList.contains("show") &&
                window.bootstrap
            ) {

                const collapse = bootstrap.Collapse.getOrCreateInstance(
                    navbarCollapse
                );

                collapse.hide();

            }

        });

    });


    // =====================================
    // AÑO AUTOMÁTICO DEL FOOTER
    // =====================================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // =====================================
    // PREVENIR ANCLAS VACÍAS
    // =====================================

    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", function (event) {
            event.preventDefault();
        });

    });


});
