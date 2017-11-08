
var amount = 0;
var finger = 15;
function clickCounter() {
amount++
var clickbutton = document.getElementById('clickbutton')
clickbutton.getElementsByTagName('i')[0].innerHTML = amount
document.getElementById('finger_i').innerHTML = finger
console.log("dkj")
}
function fin() {
if (amount < finger) {
    return
}
amount -= finger
document.getElementById('click').getElementsByTagName('i')[0].innerHTML = amount
finger++
document.getElementById('finger_i').innerHTML = finger
}


var el = document.getElementById('clickbutton')
el.addEventListener('click', clickCounter, false)
