document.getElementsByTagName('body').onload = function() {KeepFoot()};
var element = document.getElementById('stickyfooter');
var height = element.offsetHeight;

function KeepFoot() {
    if (height < screen.height) {
        document.getElementById("stickyfooter").style.position = "fixed";
        document.getElementById("stickyfooter").style.bottom = "0";
        document.getElementById("stickyfooter").style.left = "0";
        document.getElementById("stickyfooter").style.right = "0";
    }
}

KeepFoot();