var main = document.querySelector('#main')

var curs = document.querySelector('.cursor')

main.addEventListener('mousemove',function(point){
    curs.style.left = point.x+'px'
    curs.style.top = point.y+'px'
    
})