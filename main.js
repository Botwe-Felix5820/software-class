let circle_div = document.querySelector('.circle');
let grow_btn = document.querySelector('.grow_btn');
var size = 50;
grow_btn.addEventListener('click', GrowCircle)

function GrowCircle() {
    size += 40;
    if (size > 300) {
        size = 50

    } else {
        circle_div.style.width = size + "px";
        circle_div.style.height = size + "px";
    }


}