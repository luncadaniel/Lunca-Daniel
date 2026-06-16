/* FILTER */

const filterButtons =
    document.querySelectorAll("[data-filter]");

const vehicles =
    document.querySelectorAll(".vehicle");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;

        vehicles.forEach(vehicle => {

            if (
                filter === "all" ||
                vehicle.classList.contains(filter)
            ) {

                vehicle.style.display = "block";

            }
            else {

                vehicle.style.display = "none";

            }

        });

    });

});

/* LIGHTBOX */

const images =
    document.querySelectorAll(".fleet-image");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");

const closeLightbox =
    document.getElementById("close-lightbox");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}