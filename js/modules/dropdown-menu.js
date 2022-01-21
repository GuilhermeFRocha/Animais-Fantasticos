import outsideClick from './outsideclick.js'

export default class DropdownMenu  {

  constructor (dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    if (events === undefined) {
      this.events = ['click', 'touchstart']
    } else {
      this.events = events;
    }
    
    this.activeClass = 'active'
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }
  
  activeDropdownMenu (event) {
   event.preventDefault()
   const element = event.currentTarget;
   element.classList.add(this.activeClass)
   outsideClick(element, this.events, () => {
     element.classList.remove('active');
   })
 }

  addDropdownMMenusEvent () {
    this.dropdownMenus.forEach(item => {
      item.addEventListener(this.events, this.activeDropdownMenu)
      item.addEventListener(this.events, this.activeDropdownMenu)
    })
  }

  init () {
    if (this.dropdownMenus.length) {
      this.addDropdownMMenusEvent();
    }
    return this;
  }

  //Forma Alternativa
  // dropdownMenus.forEach(menu =>{
  //   ['click', 'touchstart'].forEach(userEvent=>{
  //     menu.addEventListener(userEvent, handleClick)
  //   })
  // })

}