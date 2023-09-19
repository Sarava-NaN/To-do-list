// variables
let Input = document.getElementById("input");
let Button = document.getElementById("btn");
let List = document.getElementById("lists");
let Li = document.createElement("li");
let span = document.createElement("span");

Button.addEventListener("click", () => {
  if (Input.value == "") {
    alert("Please Add Todo Lists");
  } else {
    let Li = document.createElement("li");
    Li.innerHTML = Input.value;
    List.appendChild(Li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    Li.appendChild(span);
  }
  Input.value = "";
  saveData();
});

List.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", List.innerHTML);
}
function getData() {
  List.innerHTML = localStorage.getItem("data");
}
getData();

//Click to Enter
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    Button.click();
  }
});
