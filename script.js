function calculateROI() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const desiredReturn = parseFloat(document.getElementById('desiredReturn').value);
    const returnFrequency = parseInt(document.getElementById('returnFrequency').value);
    
    const roi = (investmentAmount * (desiredReturn / 100)) / returnFrequency;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `Your ROI is: $${roi.toFixed(2)}`;
}
