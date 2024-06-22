const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const tryAgain = document.querySelector("#tryAgain")

const fortune = [
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite que você pode, e você já estará no meio do caminho.",
  "Grandes realizações nascem de pequenas conquistas.",
  "Cada desafio é uma oportunidade disfarçada.",
  "A persistência é o caminho do êxito.",
  "Nunca é tarde demais para ser o que você poderia ter sido.",
  "A jornada de mil milhas começa com um único passo.",
  "Você é mais forte do que pensa e mais capaz do que imagina.",
  "Acredite nos seus sonhos e eles se tornarão realidade.",
  "O melhor ainda está por vir.",
  "A vida é 10% o que acontece com você e 90% como você reage a isso.",
  "Não espere por oportunidades, crie-as.",
  "O segredo do sucesso é começar.",
  "Tudo o que você sempre quis está do outro lado do medo.",
  "Transforme seus sonhos em planos e seus planos em realidade.",
]

fortuneCookie.addEventListener("click", handleTryClick)
tryAgain.addEventListener("click", handleResetClick)
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen2.classList.contains("hide")) {
    handleTryClick()
  } else if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
})

function handleTryClick(event) {
  toggleScreen()
  pickFortune()
}

function handleResetClick() {
  toggleScreen()
}

function pickFortune() {
  let allFortunes = fortune.length
  let randomNumber = Math.floor(Math.random() * allFortunes)
  screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`
}

function toggleScreen() {
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}
