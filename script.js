function calculateROI() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmountInput').value);
    const desiredReturn = parseFloat(document.getElementById('desiredReturnInput').value);
    const returnFrequency = document.getElementById('returnFrequencyInput').value;
    const returnDay = parseInt(document.getElementById('returnDayInput').value);

    const roi = (investmentAmount * (desiredReturn / 100)) / calculateFrequency(returnFrequency);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `Your ROI is: $${roi.toFixed(2)}`;

    localStorage.setItem('investmentAmount', investmentAmount);
    localStorage.setItem('desiredReturn', desiredReturn);
    localStorage.setItem('returnFrequency', returnFrequency);
    localStorage.setItem('returnDay', returnDay);

    // Calculate and display the next payout date
    const today = new Date();
    const nextPayoutDate = calculateNextPayoutDate(today, returnFrequency, returnDay);
    document.getElementById('firstPaymentDate').value = nextPayoutDate.toISOString().slice(0, 10);
}

function calculateFrequency(frequency) {
    switch (frequency) {
        case "weekly":
            return 7;
        case "bi-weekly":
            return 14;
        case "monthly":
            return 30; // Approximate number of days in a month
        default:
            return 1;
    }
}

function calculateNextPayoutDate(currentDate, returnFrequency, returnDay) {
    const frequency = calculateFrequency(returnFrequency);
    const today = currentDate.getDate();
    
    if (today <= returnDay) {
        currentDate.setDate(returnDay);
    } else {
        currentDate.setMonth(currentDate.getMonth() + 1);
        currentDate.setDate(returnDay);
    }

    while (currentDate.getDate() !== returnDay) {
        currentDate.setDate(currentDate.getDate() - 1);
    }

    return currentDate;
}

function submitContract() {
    // This function can be used to process and store the contract details.
    // You can save the bank details and other contract information as needed.
}

function donePayment() {
    // This function can be used to handle the "Done" button on the payment page.
    // You can add logic for sending confirmation emails or other actions here.
}

// Populate contract.html with the stored data when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('investmentAmountPlaceholder').textContent = localStorage.getItem('investmentAmount');
    document.getElementById('desiredReturnPlaceholder').textContent = localStorage.getItem('desiredReturn');
    document.getElementById('returnFrequencyPlaceholder').textContent = localStorage.getItem('returnFrequency');
});
