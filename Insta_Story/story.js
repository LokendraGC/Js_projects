var arr = [
  {
    dp: "https://th.bing.com/th/id/OIP.1Jowf3OZt2cS7TIjvQN-IwHaKX?w=184&h=257&c=7&r=0&o=5&pid=1.7",
    story:
      "https://th.bing.com/th/id/OIP.OAT5KNtYkgN9JAACH1iSHwHaGB?pid=ImgDet&rs=1",
  },
  {
    dp: "https://images.unsplash.com/photo-1567361678487-b386b0763596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGUlM0J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGUlM0J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.9BYJrMQPy3CNAybsW77gYQHaEr?w=295&h=186&c=7&r=0&o=5&pid=1.7",
    story:
      "https://th.bing.com/th/id/OIP.QhFKOhiontp5m9fzxgSSpgHaFj?w=248&h=186&c=7&r=0&o=5&pid=1.7",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.DjyPSeO-t7bK2agoLSYJzgHaHa?w=197&h=198&c=7&r=0&o=5&pid=1.7",
    story:
      "https://th.bing.com/th/id/OIP.wyrawJNQuEKPtIhOrgY20QHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    dp: "https://th.bing.com/th/id/OIP.Grs694wabFvY5eR4TwR4gQHaE8?w=294&h=196&c=7&r=0&o=5&pid=1.7",
    story:
      "https://th.bing.com/th/id/OIP.qtDLt3E1nw3O-raBRkiDGQHaFj?w=231&h=180&c=7&r=0&o=5&pid=1.7",
  },
];

var storyHaru = document.querySelector("#stories");
var clutter = "";

arr.forEach((elem, id) => {
  clutter += `<div class="story">
            <img id="${id}" src="${elem.dp}" alt="">
          </div>`
});

storyHaru.innerHTML =clutter;
var ar=0;

storyHaru.addEventListener("click",function(dets){
        console.log(arr[dets.target.id].story);  
        document.querySelector("#full_screen").style.display = "block"
        
  
        document.querySelector("#full_screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
     
    setTimeout(function(){
                
                document.querySelector("#full_screen").style.display = `none`;
            
   },3000)

})
