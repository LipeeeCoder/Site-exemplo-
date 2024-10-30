document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário

        // Validação dos campos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !telefone || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert("Sua mensagem foi enviada com sucesso!");
        form.reset(); // Limpa o formulário após o envio
    });
});
