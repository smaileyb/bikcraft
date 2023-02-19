// MARCANDO QUAL PÁGINA ESTÁ ABERTA

//primeiro seleciona os links do header
const links = document.querySelectorAll(".header-menu a")
//depois, para cada link executa uma função que vai comparar o href do link ativo com a url
links.forEach((link) => {
  // pegando url com base no objeto window.location (que pode ser abreviado usando apenas location)
  const url = location.href
  //salvando numa const o href do link que estamos comparando
  const href = link.href

  // verificando, com uma condicional, se a string do url contém em algum de seus pontos uma string equivalente a da variável href
  if (url.includes(href)) {
    // se a condição for verdadeira, adiciona a classe "ativo" ao link, cujo css apenas coloca width de 100% do pseudoelemento after de sublinhado
    link.classList.add("ativo")
  }
})

//ATIVAR ITENS DO ORÇAMENTO - PUXANDO QUAL FOI PREVIAMENTE CLICADO, usando os queryParams da url

// Primeiro salva os parametros incluídos na entrada do link em uma const, usando a classe URLSearchParams()
const parametros = new URLSearchParams(location.search)
parametros.forEach((parametro) => {
  const elemento = document.getElementById(parametro)
  if (elemento) {
    elemento.checked = true
  }
}
)

// ABRIR E FECHAR PERGUNTAS NO FAQ

const perguntas = document.querySelectorAll(".perguntas button")
perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", (event) => {
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute("aria-controls")
    const resposta = document.getElementById(controls)
    resposta.classList.toggle("ativa")
    // Seta o atributo de acordo com o resultado do teste booleano acerca da presença ou não da classe ativa no elemento "resposta" - tudo isso pra colocar a seta pra cima ou pra baixo de acordo com o estado de clicada ou não
    pergunta.setAttribute("aria-expanded", resposta.classList.contains("ativa"))

  })
})


//GALERIA DE BICICLETAS

const galeria = document.querySelectorAll(".bicicleta-imagens img")
const galeriaContainer = document.querySelector(".bicicleta-imagens")

galeria.forEach((imagem) => {
  imagem.addEventListener("click", (event) => {
    const imgAtual = event.currentTarget
    const media = matchMedia("(min-width: 1000px)").matches
    if (media) {
      galeriaContainer.prepend(imgAtual)
    }

  })
})

// PLUGIN DE ANIMAÇÃO

if (window.SimpleAnime) {
  new SimpleAnime()
}