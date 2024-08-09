function convert() {
    var kms = document.getElementById('data').value;
    const factor = 0.621371;
    var miles = kms * factor;
    document.getElementById('result').value = miles.toFixed(2);
}