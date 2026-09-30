const app = document.getElementById("app");

function renderizarPagina() {
    const rota = window.location.hash.replace("#", "") || "inicio";

    app.innerHTML = "";

    if (rota === "inicio") {
        app.innerHTML = templateInicio();
    }

    if (rota === "projetos") {
        app.innerHTML = templateProjetos();
    }

    if (rota === "cadastro") {
        app.innerHTML = templateCadastro();

        const formulario = document.getElementById("formCadastro");

        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("mensagem");

            if (nome === "" || email === "") {
                mensagem.textContent = "Preencha todos os campos.";
                return;
            }

            const voluntarios =
                JSON.parse(localStorage.getItem("voluntarios")) || [];

            voluntarios.push({
                nome: nome,
                email: email
            });

            localStorage.setItem(
                "voluntarios",
                JSON.stringify(voluntarios)
            );

            mensagem.textContent =
                "Cadastro realizado com sucesso!";

            formulario.reset();
        });
    }
}

window.addEventListener("hashchange", renderizarPagina);

renderizarPagina();