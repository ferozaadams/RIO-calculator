function calculateROI() {
    const initialInvestment = parseFloat(document.getElementById('investmentAmount').value);
    const finalValue = parseFloat(document.getElementById('finalValue').value);

    if (isNaN(initialInvestment) || isNaN(finalValue)) {
        alert('Please enter valid numbers.');
        return;
    }

    const roi = ((finalValue - initialInvestment) / initialInvestment) * 100;

    document.getElementById('result').innerText = `Return on Investment: ${roi.toFixed(2)}%`;

    // Show the payment section after calculation
    document.getElementById('payment-section').style.display = 'block';
}

function makePayment() {
    // In a real-world scenario, you would implement a secure payment process here.
    // For simplicity, let's assume a successful payment and redirect to WhatsApp.

    const whatsappNumber = '+27843152270'; // Replace with your WhatsApp number
    const message = 'I\'m interested in making a payment.';

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
}
