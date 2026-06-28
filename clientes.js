const lista = document.getElementById("lista-clientes");

function carregarClientes() {
  lista.innerHTML = "<p>Carregando clientes...</p>";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (clientes) {
      let html = "";

      for (let i = 0; i < 4; i++) {
        const cliente = clientes[i];

        html += `
          <div class="card shadow-md hover:shadow-lg transition p-4">
            <h3>${cliente.name}</h3>
            <p><strong>Telefone:</strong> ${cliente.phone}</p>
            <p><strong>Cidade:</strong> ${cliente.address.city}</p>
          </div>
        `;
      }

      lista.innerHTML = html;
    })
    .catch(function (erro) {
      lista.innerHTML = "<p>Não foi possível carregar os clientes.</p>";
      console.log("Erro:", erro);
    });
}

carregarClientes();