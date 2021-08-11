const tabmenu = document.querySelectorAll(".js-tabmenu li")
const tabcontent = document.querySelectorAll(".js-tabcontent section")

console.log(tabcontent);

function activeTab (index) {
  tabcontent.forEach((section)=>{
    section.classList.remove('ativo')
  })

  tabcontent[index].classList.add('ativo')
}

tabmenu.forEach((itemMenu, index)=>{
  itemMenu.addEventListener("click", ()=>{
    activeTab(index)
  })
})