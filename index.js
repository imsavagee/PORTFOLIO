const cursor = document.querySelector(".cursor")

document.addEventListener('mousemove',e => {
    cursor.setAttribute("style","top: "+(e.pageY-10) + "px; left: "+ (e.pageX - 10) +"px")

})



// document.addEventListener('mousemove', function (dets) {
//     cursor.style.left = dets.x -10 + "px"
//     cursor.style.top = dets.y -10 + "px"

// })