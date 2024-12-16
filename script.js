function compute() {
  let p = document.getElementById("principal").value;
  let r = document.getElementById("rate").value;
  let y = document.getElementById("years").value;
  let interest = (p * y * r) / 100;
  let amount = parseInt(p) + parseFloat(interest);
  let result = document.getElementById("result");
  let d = new Date().getFullYear() + parseInt(y);

  if (p <= 0) {
    alert("Please enter a positive number.");
    document.getElementById("principal").focus();
  } else {
    result.innerHTML = `If you deposit <b>${p}</b>,<br>
at an interest rate of <b>${r}%</b>.<br>
You will receive an amount of <b>$${amount.toFixed(2)}</b>,<br>
in the year <b>${d}</b><br>`;
  }
}

function updateRate() {
  let rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").textContent = rateval;
}
