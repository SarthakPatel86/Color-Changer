let section = document.querySelector("section");
let buttons = document.querySelectorAll("button");
let p = document.querySelector("p");

buttons.forEach((button) => {
  button.addEventListener("mousemove", () => {
    button.style.backgroundColor = button.innerText;
    console.log(button.innerText);
    p.innerText = `Click The Button Get ${button.innerText}`;
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "black";
    p.innerText = "Choose Color For Effect";
  });

  button.addEventListener("click", () => {
    section.style.backgroundColor = button.innerText;
    p.innerText = `Thank You For Choosing ${button.innerText}`;
  });
});
