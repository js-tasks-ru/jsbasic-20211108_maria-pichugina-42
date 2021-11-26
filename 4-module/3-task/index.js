function highlight(table) {
  const trows = table.lastElementChild.getElementsByTagName("tr");
  for (const element of trows) {
    if (element.lastElementChild.hasAttribute("data-available")) {
      if (element.lastElementChild.getAttribute("data-available") === "true") {
        element.classList.add("available");
      } else {
        element.classList.add("unavailable");
      }
    } else {
      element.setAttribute("hidden", "");
    }
    const tds = element.getElementsByTagName("td");
    for (const td of tds) {
      const n = Number(td.innerHTML);
      if (isFinite(n) && n < 18) {
        element.style.textDecoration = "line-through";
      }
      if (td.innerHTML === "f") {
        element.classList.add("female");
      }

      if (td.innerHTML === "m") {
        element.classList.add("male");
      }
    }
  }
}
