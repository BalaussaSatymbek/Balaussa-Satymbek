document.getElementById("coffeeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Получаем данные
  let name = document.getElementById("name").value;
  let hours = Number(document.getElementById("hours").value);
  let tiredness = Number(document.getElementById("tiredness").value);

  // Простая формула: чашки = (часы / 6) + (усталость / 4)
  let cups = Math.round((hours / 6) + (tiredness / 4));

  if (cups < 1) {
    cups = 1; // минимум одна чашка
  }

  // Определяем категорию
  let category;
  if (cups <= 2) {
    category = "Low need";
  } else if (cups <= 4) {
    category = "Normal need";
  } else {
    category = "High need";
  }

  // Выводим результат
  document.getElementById("result").innerHTML =
    "Hello, " + name + "!<br>" +
    "You may need about <strong>" + cups + "</strong> cups of coffee.<br>" +
    "Category: <strong>" + category + "</strong>";
});
