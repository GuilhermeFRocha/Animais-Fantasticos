export default function initTooltip () {

}

const tooltips = document.querySelectorAll('[data-tooltip]')

tooltips.forEach((item)=>{
  item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver (event) {
  console.log(event);
}

function criarTooltipBox() {
  const tooltipBox = document.createElement('div')
  const text = element.getAttribute('aria-label')
  tooltipBox.classList.add('tooltip')
}


