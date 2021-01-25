document.getElementById("insurance-btn").addEventListener("click", function () {
  // Calculate Insurance

  let loanGranted, numberOfMonths, insurance;
  loanGranted = document.getElementById("loan-granted").value;
  numberOfMonths = document.getElementById("months").value;

  const calculateInsurance = () => {
    insurance = ((5.03 * numberOfMonths + 3.03) * loanGranted) / 6000;

    return Math.round(insurance * 100) / 100;
  };

  document.getElementById("insurance").innerHTML = calculateInsurance();
});
