var card = document.querySelector("#card");
var love = document.querySelector("i");
var second = document.querySelector("#second");
var number = document.querySelector("#number");

var flag = 0;
var num = 0;

card.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%,-50%) scale(1)";
  setTimeout(function () {
    love.style.opacity = "0.8";
    second.style.color = "red";
    num += 1;
    number.innerHTML = num;
  });
  setTimeout(function () {
    love.style.transform = "translate(-50%,-50%) scale(0)";
  }, 1000);
});

second.addEventListener("click", function () {
  if (flag == 0) {
    second.style.color = "red";
        num += 1;
        number.innerHTML = num;
    flag = 1;
  } else {
    second.style.color = "white";
    flag = 0;
  }
});
