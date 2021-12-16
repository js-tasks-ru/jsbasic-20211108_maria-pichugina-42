export default class UserTable {
  constructor(rows) {
  this.elem = asUWish3(rows)
  }
}

function asUWish(obj) {
  return `
  <tr>
  <td>${obj.name}</td>
  <td>${obj.age}</td>
  <td>${obj.salary}</td>
  <td>${obj.city}</td>
  <td><button>X</button></td>
</tr>
  `
}

function asUWish2(massiv){
  return `
  <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        ${massiv.map(asUWish).join('')}
    </tbody>`
}

function asUWish3(massiv){
  const table = document.createElement("table");
  table.innerHTML = asUWish2(massiv);
  const buttons = table.querySelectorAll("button")
  for (const button of buttons){
    button.addEventListener('click', (event) => 
    event.target.closest("tr").remove())
  }
  return table;
}

