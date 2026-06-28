# 🏍️ Una Motors Palmares

Projeto desenvolvido para a disciplina de Desenvolvimento Web.

O objetivo desta atividade foi desenvolver uma página web utilizando **HTML**, **CSS** e **JavaScript**, consumindo uma **API pública** por meio da função `fetch()`. Além disso, foi utilizado o **Tailwind CSS** para complementar a estilização de alguns componentes da interface.

---

# 📷 Prévia do Projeto


![Preview](img/preview.png)

---

# 🚀 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Fetch API
* Tailwind CSS

---

# 🌐 API Utilizada

Foi utilizada a API pública **JSONPlaceholder**, que disponibiliza dados fictícios para estudos e testes.

**Endpoint utilizado:**

```text
https://jsonplaceholder.typicode.com/users
```

---

# 🔄 Consumo da API

O projeto utiliza a função `fetch()` do JavaScript para realizar uma requisição HTTP à API pública **JSONPlaceholder**. Os dados retornados em formato **JSON** são convertidos para objetos JavaScript utilizando `response.json()`. Em seguida, essas informações são percorridas e exibidas dinamicamente na página, apresentando os clientes cadastrados na seção correspondente.

---

# ⚙️ Funcionalidades

* Exibição de uma moto em destaque.
* Catálogo de modelos de motos.
* Seção de promoções.
* Consumo de API utilizando `fetch()`.
* Exibição automática de clientes cadastrados.
* Layout responsivo.
* Estilização utilizando CSS e Tailwind CSS.

---

# 🛠️ Decisões Técnicas

Durante o desenvolvimento do projeto foram tomadas as seguintes decisões:

* Utilizar a API JSONPlaceholder por ser gratuita e não exigir autenticação.
* Utilizar JavaScript puro com a função `fetch()` para realizar o consumo da API.
* Exibir apenas quatro clientes para manter a interface organizada.
* Reaproveitar um projeto desenvolvido anteriormente, adicionando apenas a funcionalidade de consumo da API.
* Utilizar o Tailwind CSS para complementar a estilização da seção de clientes, mantendo o CSS próprio já desenvolvido.

---

# ⚠️ Limitações

Este projeto possui algumas limitações:

* Os clientes exibidos são fictícios, pois pertencem à API JSONPlaceholder.
* É necessário acesso à internet para carregar os dados da API.
* O sistema não possui backend nem banco de dados próprio.
* Não é possível cadastrar, editar ou excluir clientes.

---

# ▶️ Como Executar

1. Clone ou faça o download deste repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Execute o arquivo **index.html** utilizando a extensão **Live Server**.
4. Os clientes serão carregados automaticamente ao abrir a página.

---

# 📁 Estrutura do Projeto

```text
ATIVIDADE WEB
│
├── index.html
├── style.css
├── clientes.js
├── README.md
│
└── img
    ├── destaque-img1.jpg
    ├── sport-img1.jpg
    ├── city-img1.jpg
    ├── trail-img1.jpg
    └── preview.png
```

---

# 👨‍💻 Autor

**Eduardo Artur**

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento Web.
