function calculateROI() {
    const initialInvestment = parseFloat(document.getElementById('investmentAmount').value);
    const finalValue = parseFloat(document.getElementById('finalValue').value);
    const duration = parseFloat(document.getElementById('duration').value);

    if (isNaN(initialInvestment) || isNaN(finalValue) || isNaN(duration)) {
        alert('Please enter valid numbers.');
        return;
    }

    if (initialInvestment < 600) {
        alert('Minimum investment amount is R600.');
        return;
    }

    const roi = ((finalValue - initialInvestment) / initialInvestment) * 100;

    document.getElementById('result').innerText = `Return on Investment: ${roi.toFixed(2)}%`;

    // Show the payment section after calculation
    document.getElementById('payment-section').style.display = 'block';
}

function makePayment() {
    const initialInvestment = document.getElementById('investmentAmount').value;
    const finalValue = document.getElementById('finalValue').value;
    const duration = document.getElementById('duration').value;
    const customerName = document.getElementById('customerName').value;

    const whatsappNumber = '+27843152270'; // Replace with your WhatsApp number
    const message = `I'm interested in making a payment. Here are the details:\n\nCustomer Name: ${customerName}\nInitial Investment: R ${initialInvestment}\nFinal Value: R ${finalValue}\nInvestment Duration: ${duration} days`;

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
}
