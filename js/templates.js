const projetos = [
    {
        nome: "Campanha de Alimentos",
        descricao: "Arrecadação de alimentos para famílias em situação de vulnerabilidade."
    },
    {
        nome: "Doação de Roupas",
        descricao: "Campanha para arrecadar roupas e distribuir para pessoas que precisam."
    },
    {
        nome: "Voluntariado",
        descricao: "Ações para pessoas que desejam contribuir como voluntárias."
    }
];

function templateProjetos() {
    return `
        <section>
            <h2>Projetos da ONG</h2>

            <div class="projetos-lista">
                ${projetos.map(projeto => `
                    <article>
                        <h3>${projeto.nome}</h3>
                        <p>${projeto.descricao}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

function templateInicio() {
    return `
        <section>
            <h2>Sobre a ONG</h2>
            <p>
                A ONG Esperança realiza ações sociais para ajudar
                pessoas em situação de vulnerabilidade.
            </p>
        </section>
    `;
}

function templateCadastro() {
    return `
        <section>
            <h2>Cadastro de Voluntário</h2>

            <form id="formCadastro">

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" required>

                <button type="submit">Enviar cadastro</button>

                <p id="mensagem"></p>

            </form>
        </section>
    `;
}