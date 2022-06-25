let interval = 50
let blinkInterval = 600

elmList = document.getElementsByClassName("typous")
for(let i = 0; i < elmList.length; i++){
  elm = elmList[i]
  let txt = elm.innerHTML
  elm.innerHTML = "|"
  type(txt, elm)
}
function type(s, elm){
  setTimeout(()=>{
    let c = s.charAt(0)
    if(c == ''){
      blink(elm)
      return
    }
    elm.innerHTML = elm.innerHTML.slice(0,-1) + c + '|'
    type(s.slice(1), elm)
  }, interval)
}

function blink(elm){
  setTimeout(()=>{
    elm.innerHTML = elm.innerHTML.slice(0,-1)
    setTimeout(()=>{
      elm.innerHTML += '|'
      blink(elm)
    },blinkInterval)
  }, blinkInterval)
}
