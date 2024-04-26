const btn1 = document.getElementById('btn1')
const box = document.getElementById('box')
const all = document.getElementsByTagName('main')[0]
const box2 = document.getElementById('box2')
function clickbox() {
   box.style.display = 'flex'
   box2.style.display = 'flex'
}
function btnclose() {
   box.style.display = 'none'
   box2.style.display = 'none'
}