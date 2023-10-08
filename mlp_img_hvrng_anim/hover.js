// var element1 = document.querySelector("#elem1")

// var image1 = document.querySelector("#elem1 img")

// element1.addEventListener("mousemove", function (point) {
//   image1.style.left = point.x + "px";
//   image1.style.top = point.y + "px";
// });

// element1.addEventListener("mouseenter",function(){
//     image1.style.opacity = 1;
// })
// element1.addEventListener("mouseleave",function(){
//     image1.style.opacity = 0;
// })

var elem = document.querySelectorAll(".elem");
// console.log(elem);
elem.forEach((val) => {
//   console.log(val.childNodes);
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
  });

  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });

    val.addEventListener("mousemove", (point) => {
      val.childNodes[3].style.left = point.x+'px';
      val.childNodes[3].style.top = point.y+'px';
    });
});
