/* EXERCICIOS */  

/*let imgs = document.querySelectorAll("img")
console.log(imgs);

imgs.forEach((item)=>{
  console.log(item);
})*/

/* var paragrafo = document.querySelectorAll("p")
console.log(paragrafo);

paragrafo.forEach(item=>{
  console.log(item);
  console.log(item.innerText);
})*/

/* const imgs = document.querySelectorAll("img")

imgs.forEach((item, index) =>{
  console.log(item,index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
})

imgs.forEach(()=> i++)*/

/* let menu = document.querySelectorAll(".menu a")

let menuArray = Array.from(menu)

     menuArray.forEach(item=>{
  return  item.setAttribute("class" ,"ativo")
}) 

   menuArray.forEach(item=>{
  item.classList.add("ativo")
}) 

  menuArray.forEach(item=>{
  return  item.removeAttribute("class" ,"ativo")
})  

menuArray.forEach(item=>{
  item.classList.remove("ativo")
}) 

/menuArray[0].forEach(item=>{
  item.classList.add("ativo")
}) 

 let imgs = document.querySelectorAll("img") 
imgs.forEach((img)=> {
console.log( img.hasAttribute("alt"))
}) 

 let http = document.querySelector('a[href^="http"]')
http.setAttribute( 'href', 'https://www.google.com/') 
 */

/* 
function handleKeyboard ( event) {
  if(event.key === "a") {
    document.menu.classList.toggle ("azul")
  }
}
 window.addEventListener("keydown", handleKeyboard) 
 */


/* let menu = document.querySelectorAll('a[href^="#"]')


function handleClick(event) {
  event.preventDefault ()

  menu.forEach((item) =>{
    item.classList.remove(".ativo")
  })
  event.currentTarget.classList.add(".ativo")
  
}

menu.forEach((item) => {
  item.addEventListener('click', handleClick)
})
 */

/* 
let menu = document.querySelectorAll('a[href^="#"]')

function handleclick (event){
  event.preventDefault()
  event.currentTarget.classList.toggle(".ativo")
}

menu.forEach((item)=>{
  item.addEventListener('click', handleclick)
})
 */

/* let mapa = document.querySelector(".mapa")

const novoh1 = document.createElement("h1")
novoh1.innerText = "Novo title"
novoh1.classList.add ("titulo")

mapa.appendChild(novoh1) */

/* let menu = document.querySelector(".menu")
let copy = document.querySelector(".copy")

let cloneMenu = menu.cloneNode(true)

copy.appendChild(cloneMenu) */

/* let dt = document.querySelector(".faq-lista")

let Dt = (dt.querySelector("dt"));

let dd = (dt.querySelector("dd"));*/

/* let faq = document.querySelector("#faq")
let animais = document.querySelector("#animais")

faq.innerHTML = animais.innerHTML */

