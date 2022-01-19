export default class TabNav {

  constructor(menu,content) {
     this.tabmenu = document.querySelectorAll(menu)
     this.tabcontent = document.querySelectorAll(content)
     this.activeClass = 'ativo'
  }

  activeTab(index) {
    this.tabcontent.forEach((section) => {
      section.classList.remove(this.activeClass)
    })

    const direcao = this.tabcontent[index].dataset.anime;
    this.tabcontent[index].classList.add(this.activeClass , direcao)
  }

  addTabNavEvent() {
    this.tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.activeTab(index)
      })
    })
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      this.activeTab(0)
      this.addTabNavEvent()
    }
  }
}