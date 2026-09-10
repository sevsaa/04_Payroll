function calculatePay() {
  const name = document.getElementById("employeeName").value;
  const hoursInput = document.getElementById("hoursWorked");
  const rateInput = document.getElementById("ratePerHour");

  const hours = parseFloat(hoursInput.value);
  const rate = parseFloat(rateInput.value);

  const error = document.getElementById("error");
  error.innerText = "";

  if (hoursInput.value === "" || rateInput.value === "") {
    error.innerText = "Please enter hours worked and rate per hour.";
    return;
  }

  if (hours < 0 || rate < 0) {
    error.innerText = "Hours worked and rate per hour cannot be negative.";
    return;
  }

  let pay = hours * rate;

  document.getElementById("result").innerText =
    name + "'s total pay is: $" + pay.toFixed(2);
}

document.getElementById("calculateBtn").onclick = calculatePay;
