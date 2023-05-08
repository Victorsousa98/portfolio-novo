const caracteresHex = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const botao = document.querySelector("[data-botao]");
const nomeCores = document.querySelector("[data-nome-cores");

const retornaNumeroAleatorio = (array) => {
  return Math.floor(Math.random() * array.length);
};

const hexadeciamalAleatorio = () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += caracteresHex[retornaNumeroAleatorio(caracteresHex)];
  }
  nomeCores.textContent = hex;
  document.body.style.backgroundColor = hex;
};

botao.addEventListener("click", hexadeciamalAleatorio);
