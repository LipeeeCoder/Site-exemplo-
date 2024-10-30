document.addEventListener("DOMContentLoaded", function () {
    const filtroMarca = document.getElementById("marca");
    const carros = document.querySelectorAll(".carro");

    filtroMarca.addEventListener("change", function () {
        const marcaSelecionada = filtroMarca.value;

        carros.forEach(carro => {
            const marcaCarro = carro.getAttribute("data-marca");

            if (marcaSelecionada === "todas" || marcaCarro === marcaSelecionada) {
                carro.style.display = "block";
            } else {
                carro.style.display = "none";
            }
        });
    });
});