function toggleText() {
  const button = document.querySelector("button")
  const div = document.getElementById("text")
  button.addEventListener("click", (event) => {
    if (!div.hasAttribute("hidden")) {
       div.setAttribute("hidden", "")
    } else { div.removeAttribute("hidden")};
})
}