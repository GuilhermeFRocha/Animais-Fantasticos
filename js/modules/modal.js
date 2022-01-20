export default class Modal  {
  constructor (botaoAbrir,botaoFechar,modal) {
    this.botaoAbrir = document.querySelector(botaoAbrir)
    this.botaoFechar = document.querySelector(botaoFechar)
    this.modal = document.querySelector(modal)
    this.abrirModal = this.abrirModal.bind(this)
    this.fecharModal = this.fecharModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }

  abrirModal(event) {
    event.preventDefault()
    this.modal.classList.add("ativo")
  }

   fecharModal(event) {
    event.preventDefault()
    this.modal.classList.remove("ativo")
  }

   cliqueForaModal(event) {
    if (event.target === this.modal) {
      this.fecharModal(event)
    }
  }

  addModalEvents () {
    this.botaoAbrir.addEventListener('click', this.abrirModal)
    this.botaoFechar.addEventListener('click', this.fecharModal)
    this.modal.addEventListener('click', this.cliqueForaModal)
  }

  init () {
    if (this.botaoAbrir && this.botaoFechar && this.modal) {
      this.addModalEvents();
    }
    return this
  }
}