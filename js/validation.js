const bookingForm =
    document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const pickup =
            document.getElementById("pickup").value.trim();

        const destination =
            document.getElementById("destination").value.trim();

        if (name === "") {

            alert("Introduceți numele.");

            return;

        }

        if (phone.length < 8) {

            alert("Telefon invalid.");

            return;

        }

        if (!email.includes("@")) {

            alert("Email invalid.");

            return;

        }

        if (pickup === "") {

            alert("Introduceți adresa de preluare.");

            return;

        }

        if (destination === "") {

            alert("Introduceți destinația.");

            return;

        }

        alert("Comanda a fost trimisă cu succes!");

        bookingForm.reset();

    });

}