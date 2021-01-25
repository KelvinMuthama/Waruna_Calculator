// Get the target form
const targetForm = document.forms[0];

// Get the form data
const [loan, balance, weekly, startDate, today] = targetForm.elements;

// Function that calculates the number of weeks between the 2 dates.
const weeksCalculator = () => {
  let timeDifference, timeToDays, daysToWeeks;

  timeDifference =
    new Date(today.value).getTime() - new Date(startDate.value).getTime();
  timeToDays = timeDifference / (1000 * 3600 * 24);
  daysToWeeks = Math.floor(timeToDays / 7);

  return daysToWeeks;
};

// Calculate the arrears
const arrearsCalculator = () => {
  arrears = balance.value - (loan.value - weekly.value * weeksCalculator());
  return arrears < 0 ? 0 : arrears;
};

// Listen for the button click
document.getElementById("arrears-btn").addEventListener("click", () => {
  const arrears = arrearsCalculator();

  document.getElementById("num-of-weeks").innerHTML = weeksCalculator();
  document.getElementById("arrears").innerHTML = arrearsCalculator();

  arrears <= 0
    ? (document.getElementById("svg-icon-1").src = "icons8-tick-1.svg")
    : (document.getElementById("svg-icon-1").src = "icons8-tick-0.svg");
});
