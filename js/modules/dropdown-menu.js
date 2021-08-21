export default function DropdownMenu() {

}

const dropdownMenus = document.querySelectorAll('[data-dropdown]')

dropdownMenus.forEach(item => {
  item.addEventListener('click', handleClick)
  item.addEventListener('touchstart', handleClick)
})

//Forma Alternativa
// dropdownMenus.forEach(menu =>{
//   ['click', 'touchstart'].forEach(userEvent=>{
//     menu.addEventListener(userEvent, handleClick)
//   })
// })

function handleClick(event) {
  event.preventDefault()
  this.classList.add('active')
  outsideClick(this, () => {
    this.classList.remove('active');
  })
}

function outsideClick(element, callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick)

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      callback()
    }
  }
}