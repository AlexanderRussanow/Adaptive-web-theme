let stepblock1 = document.getElementById('stepblock1')
let stepborder1 = document.getElementById('stepborder1')
let stepblock2 = document.getElementById('stepblock2')
let stepborder2 = document.getElementById('stepborder2')
let stepblock3 = document.getElementById('stepblock3')
let stepborder3 = document.getElementById('stepborder3')


stepblock1.onmouseover = function() {
   stepborder1.style.borderBottom = '3px solid white'
}

stepblock1.onmouseout = function() {
   stepborder1.style.borderBottom = '3px solid black'
}

stepblock2.onmouseover = function() {
   stepborder2.style.borderBottom = '3px solid white'
}

stepblock2.onmouseout = function() {
   stepborder2.style.borderBottom = '3px solid black'
}

stepblock3.onmouseover = function() {
   stepborder3.style.borderBottom = '3px solid white'
}

stepblock3.onmouseout = function() {
   stepborder3.style.borderBottom = '3px solid black'
}