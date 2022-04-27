const progressbar = document.getElementById('progressbar')
const percent = document.getElementById('percent')

let totalHeight = document.body.scrollHeight - window.innerHeight
let progress = (window.pageYOffset / totalHeight) * 100

const scrolling = () => {
  progress = (window.pageYOffset / totalHeight) * 100 
  progressbar.style.height = progress + "%"
  percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"
}

window.addEventListener('scroll', () => {
  scrolling()
})

window.addEventListener('load', () => {
  scrolling()
})
