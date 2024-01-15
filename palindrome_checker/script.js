const checkPalindrome = () => {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');

    const inputValue = inputElement.value;

    if (inputValue === '') {
        alert('Please input a value');
        return;
    }

    const sanitizedInput = inputValue.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    const reversedInput = sanitizedInput.split('').reverse().join('');

    if (sanitizedInput === reversedInput) {
        resultElement.textContent = `${inputValue} is a palindrome`;
    } else {
        resultElement.textContent = `${inputValue} is not a palindrome`;
    }
};

const checkBtn = document.getElementById('check-btn');
checkBtn.addEventListener('click', checkPalindrome);