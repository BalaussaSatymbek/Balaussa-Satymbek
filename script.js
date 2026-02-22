function calculateCoffee() {
  // 1. Get input values
  let name = document.getElementById("userName").value;
  let hours = document.getElementById("hoursAwake").value;
  let tiredness = document.getElementById("tirednessLevel").value;

  // 2. Convert to numbers
  hours = Number(hours);
  tiredness = Number(tiredness);

  // 3. Simple calculation
  let cups = hours + tiredness;

  // 4. Set maximum limit
  if (cups > 12) {
    cups = 12;
  }

  // 5. Choose message based on result
  let message = "";

  if (cups <= 4) {
    message = "Not too tired — you can probably skip coffee 😊";
  } else if (cups <= 9) {
    message = "Normal level — 2–4 cups should be enough ☕";
  } else {
    message = "Rough day! Grab a big mug or two ☕☕";
  }

  // 6. Build final message
  let resultText = "Hi, " + (name || "friend") + "!<br>";
  resultText += "You probably need about <strong>" + cups + "</strong> cups of coffee today.<br>";
  resultText += message;

  // 7. Show result on the page
  document.getElementById("result").innerHTML = resultText;
}// Starter JS
// Steps for students to implement:
// 1. Get user inputs
// 2. Perform calculations
// 3. Use if/else to classify results
// 4. Display results in #output
