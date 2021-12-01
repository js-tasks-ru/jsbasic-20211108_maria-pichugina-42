function hideSelf() {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    button.setAttribute("hidden", "");
  });
}
