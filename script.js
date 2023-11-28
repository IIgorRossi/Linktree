function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assents/avatar claro.png")
    img.setAttribute('alt', 'Foto de igor de terno azul olhando pro lado' )
  } else {
    img.setAttribute("src", "./assents/avatar.png")
    img.setAttribute('alt' , 'Foto de Igor sorindo e de terno preto')
  }
}
