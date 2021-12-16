function highlight(table) {
  const trows = table.lastElementChild.getElementsByTagName("tr");
  for (const element of trows) {
    const tds = element.getElementsByTagName("td");
    const lastTd = tds[tds.length-1];
    if ("available" in lastTd.dataset === true) {
      if (lastTd.dataset.available == "true") {
        element.classList.add("available");
      } else {
        element.classList.add("unavailable");
      }
    } else {
      element.hidden = true;
    }
    
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
