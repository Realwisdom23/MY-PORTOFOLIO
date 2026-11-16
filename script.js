
// =====================================
// BLESSED MBANG PORTFOLIO
// JAVASCRIPT
// =====================================


// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    const open = navLinks.classList.toggle("open");

    menuBtn.setAttribute(
        "aria-expanded",
        String(open)
    );

});


// CLOSE MENU AFTER CLICKING A LINK

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// SCROLL REVEAL ANIMATIONS

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


// APPLY ANIMATION TO ELEMENTS

document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});
