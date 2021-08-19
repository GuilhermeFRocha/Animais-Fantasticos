export default function initModal() {

  const botaoAbrir = document.querySelector('[data-modal="abrir"]')
  const botaoFechar = document.querySelector('[data-modal="fechar"]')
  const modal = document.querySelector('[data-modal="container"]')

  if (botaoAbrir && botaoFechar && modal) {

    function abrirModal(event) {
      event.preventDefault()
      modal.classList.add("ativo")
    }

    function fecharModal(event) {
      event.preventDefault()
      modal.classList.remove("ativo")
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        fecharModal(event)
      }
    }

    botaoAbrir.addEventListener('click', abrirModal)
    botaoFechar.addEventListener('click', fecharModal)
    modal.addEventListener('click', cliqueForaModal)
  }
}