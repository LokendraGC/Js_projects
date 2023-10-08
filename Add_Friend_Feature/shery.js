var istatus = document.querySelector("h3")

var addFriend = document.querySelector("#add")

var remove = document.querySelector('#remove')

addFriend.addEventListener("click",function(){
    istatus.innerHTML= "Friends"
    istatus.style.color="Green"
    addFriend.innerHTML='Friends'
})

remove.addEventListener("click",function(){
    istatus.innerHTML = 'Stranger'
    istatus.style.color = 'red'
    addFriend.innerHTML = 'Add Friend'
})
