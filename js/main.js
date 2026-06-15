document.addEventListener("DOMContentLoaded", () => {

    /* MENU */
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    /* TESTIMONIAL SLIDER */
    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {
        let current = 0;

        setInterval(() => {
            slides[current].classList.remove("active");
            current = (current + 1) % slides.length;
            slides[current].classList.add("active");
        }, 3000);
    }

    /* COUNTERS */
    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {
        counters.forEach(counter => {

            const target = +counter.dataset.target;
            let count = 0;

            const updateCounter = () => {
                count += Math.ceil(target / 100);

                if (count < target) {
                    counter.innerText = count;
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    }

    /* BACK TO TOP */
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", () => {
            topBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ACCORDION */
    const accordionBtns = document.querySelectorAll(".accordion-btn");

    if (accordionBtns.length > 0) {
        accordionBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const content = btn.nextElementSibling;
                content.style.display =
                    content.style.display === "block" ? "none" : "block";
            });
        });
    }

});


function validatePhone(phone) {
    const cleaned = phone.replace(/\s|-/g, "");
    const regex = /^(\+40|0)[0-9]{9}$/;
    return regex.test(cleaned);
}

function validateForm(event) {
    event.preventDefault();

    const phone = document.getElementById("phone").value;

    if (!validatePhone(phone)) {
        alert("Telefon invalid! Exemplu: 0712345678 sau +40712345678");
        return false;
    }

    alert("Comandă trimisă cu succes!");
    return true;
}
document.addEventListener("DOMContentLoaded", () => {

    const orderBtn = document.getElementById("orderTaxiBtn");

    if (orderBtn) {
        orderBtn.addEventListener("click", () => {

            const pickup = document.querySelector("input[placeholder='Locație de plecare']").value;
            const destination = document.querySelector("input[placeholder='Destinație']").value;

            if (!pickup || !destination) {
                alert("Completează locația și destinația!");
                return;
            }

            alert(`Comandă trimisă!\nDe la: ${pickup}\nPână la: ${destination}`);
        });
    }

});
const topOrderBtn = document.getElementById("topOrderBtn");

if (topOrderBtn) {
    topOrderBtn.addEventListener("click", () => {
        const form = document.querySelector(".hero-form") || document.querySelector("#bookingForm");

        if (form) {
            form.scrollIntoView({ behavior: "smooth" });
        }
    });
}
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}