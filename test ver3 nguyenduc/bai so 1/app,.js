function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function calculatePrimeSum() {
    const numberA = parseInt(document.getElementById('numberA').value);
    const numberB = parseInt(document.getElementById('numberB').value);
    const resultElement = document.getElementById('result');

    if (numberA >= numberB || isNaN(numberA) || isNaN(numberB)) {
        resultElement.innerText = "Vui lòng nhập số A và B đúng định dạng!";
        return;
    }

    let primeSum = 0;
    let primeNumbers = [];

    for (let i = numberA; i <= numberB; i++) {
        if (isPrime(i)) {
            primeSum += i;
            primeNumbers.push(i);
        }
    }

    const resultText = `Các số nguyên tố trong khoảng từ ${numberA} đến ${numberB}: ${primeNumbers.join('; ')}`;
    resultElement.innerHTML = `${resultText}<br>Tổng số nguyên tố: ${primeSum}`;
}
