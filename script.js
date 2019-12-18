// Add an event listener to the button
document.getElementById("arrears-btn").addEventListener("click", function() {
    

    // Get user's input date
    let inputDate1, inputDate2;
    inputDate1 = document.getElementById("start-date").value;
    inputDate2 = document.getElementById("curr-date").value;


    // Set the two dates to variables
    let date1, date2;
    date1 = new Date(inputDate1);
    date2 = new Date(inputDate2);

    // Function that calculates the number of weeks between the 2 dates.
    const weeksCalculator = () => {
    let timeDifference, timeToDays, daysToWeeks, remainingDays;

    timeDifference  = date2.getTime() - date1.getTime();
    timeToDays = timeDifference / (1000 * 3600 * 24);
    daysToWeeks = Math.floor(timeToDays / 7);
    remainingDays = timeToDays % 7;

    return daysToWeeks;

    }

    document.getElementById("num-of-weeks").innerHTML = weeksCalculator();

    // Function that calculates the arrears

    let curLoanBal, perWeek, loanPayable, arrears, numOfWeeks;
    loanPayable = document.getElementById("loan-payable").value;
    perWeek = document.getElementById("per-week").value;
    curLoanBal = document.getElementById("current-loan-bal").value;

    numOfWeeks = weeksCalculator();

    
    
    const arrearsCalculator = () => {
        arrears = loanPayable - ((curLoanBal) - (perWeek * numOfWeeks));

        if (arrears === 0) {
            document.getElementById("svg-icon-1").src = "icons8-tick-1.svg"
        } else {
            document.getElementById("svg-icon-1").src = "icons8-tick-0.svg"
        }

        return arrears
    
    }
    document.getElementById("arrears").innerHTML = arrearsCalculator();

    
});

