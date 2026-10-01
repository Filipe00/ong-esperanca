(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{nome:`Campanha de Alimentos`,descricao:`Arrecadação de alimentos para famílias em situação de vulnerabilidade.`},{nome:`Doação de Roupas`,descricao:`Campanha para arrecadar roupas e distribuir para pessoas que precisam.`},{nome:`Voluntariado`,descricao:`Ações para pessoas que desejam contribuir como voluntárias.`}];function t(){return`
        <section>
            <h2>Projetos da ONG</h2>

            <div class="projetos-lista">
                ${e.map(e=>`
                    <article>
                        <h3>${e.nome}</h3>
                        <p>${e.descricao}</p>
                    </article>
                `).join(``)}
            </div>
        </section>
    `}function n(){return`
        <section>
            <h2>Sobre a ONG</h2>
            <p>
                A ONG Esperança realiza ações sociais para ajudar
                pessoas em situação de vulnerabilidade.
            </p>
        </section>
    `}function r(){return`
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
    `}var i=document.getElementById(`app`);function a(){let e=window.location.hash.replace(`#`,``)||`inicio`;if(i.innerHTML=``,e===`inicio`&&(i.innerHTML=n()),e===`projetos`&&(i.innerHTML=t()),e===`cadastro`){i.innerHTML=r();let e=document.getElementById(`formCadastro`);e.addEventListener(`submit`,function(t){t.preventDefault();let n=document.getElementById(`nome`).value,r=document.getElementById(`email`).value,i=document.getElementById(`mensagem`);if(n===``||r===``){i.textContent=`Preencha todos os campos.`;return}let a=JSON.parse(localStorage.getItem(`voluntarios`))||[];a.push({nome:n,email:r}),localStorage.setItem(`voluntarios`,JSON.stringify(a)),i.textContent=`Cadastro realizado com sucesso!`,e.reset()})}}window.addEventListener(`hashchange`,a),a();