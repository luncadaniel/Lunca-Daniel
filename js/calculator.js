function calculateFare() {

    const distance =
        document.getElementById("distance").value;

    const result =
        document.getElementById("result");

    const pricePerKm = 8;

    if (distance <= 0) {

        result.innerHTML =
            "Introduceți o distanță validă.";

        return;

    }

    const total =
        distance * pricePerKm;

    result.innerHTML =
        "Tarif estimativ: " +
        total +
        " lei";

}