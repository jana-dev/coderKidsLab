//Depoimentos
const depoimentos = [
    {depo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", nome:"João" },
    { depo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ", nome: "Maria" },
    { depo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", nome: "Pedro" }
]
//indice atual do depoimento
let indiceAtual = 0;

//Elementos DOM
const depoimentoElement = document.querySelector('.depo');
const nomeAlunoElement = document.querySelector('.nome-aluno');

// Função para carregar o depoimento atual
function carregarDepoimento() {
    depoimentoElement.textContent = depoimentos[indiceAtual].depo;
    nomeAlunoElement.textContent = depoimentos[indiceAtual].nome;
}

// Função para avançar ao próximo depoimento
function proximoDepoimento() {
    indiceAtual = (indiceAtual + 1) % depoimentos.length;
    carregarDepoimento();
}

// Função para voltar ao depoimento anterior
function anteriorDepoimento() {
    indiceAtual = (indiceAtual - 1 + depoimentos.length) % depoimentos.length;
    carregarDepoimento();
}

// Event listeners para os botões
document.getElementById('bt-proximo-depo').addEventListener('click', proximoDepoimento);
document.getElementById('bt-anterior-depo').addEventListener('click', anteriorDepoimento);

// Carregar o primeiro depoimento ao carregar o site
window.onload = carregarDepoimento;