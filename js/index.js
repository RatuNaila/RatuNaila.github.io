document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.querySelector('.input-field');
    const resultDiv = document.querySelector('.result');
    const explanationPara = document.querySelector('.explanation');
    const explanationDetailPara = document.querySelector('.explanation-detail');
    let isCelsius = true; 

    function switchLabels() {
        const inputLabel = document.querySelector('.input-section label');
        const resultLabel = document.querySelector('.result-label');
        if (isCelsius) {
            inputLabel.textContent = 'Celsius (°C)';
            resultLabel.textContent = 'Fahrenheit (°F)';
        } else {
            inputLabel.textContent = 'Fahrenheit (°F)';
            resultLabel.textContent = 'Celsius (°C)';
        }
    }

    document.getElementById('convert-button').addEventListener('click', function() {
        const inputValue = parseFloat(inputField.value);
        if (!isNaN(inputValue)) {
            if (isCelsius) {
                const fahrenheit = (inputValue * 9/5) + 32;
                resultDiv.textContent = `${fahrenheit.toFixed(2)} °F`;
                const explanation = `Cara kalkulasi: (${inputValue} × 9/5) + 32 = ${fahrenheit.toFixed(2)}`;
                explanationPara.textContent = explanation;
                const explanationDetail = `Suhu dalam satuan Fahrenheit (°F) sama dengan suhu dalam satuan Celcius (°C) kali 9/5 ditambah 32. (°F)= ((°C) x 9/5)+32`;
                explanationDetailPara.textContent = explanationDetail;
            } else {
                const celsius = (inputValue - 32) * 5/9;
                resultDiv.textContent = `${celsius.toFixed(2)} °C`;
                const explanation = `Cara kalkulasi: (${inputValue} - 32) × 5/9 = ${celsius.toFixed(2)}`;
                explanationPara.textContent = explanation;
                const explanationDetail = `Suhu dalam satuan Celcius (°C) sama dengan suhu dalam satuan Fahrenheit (°F) dikurangi 32 lalu hasilnya dikali 5/9. (°C) = (°F - 32) × 5/9`;
                explanationDetailPara.textContent = explanationDetail;
            }
        } else {
            alert('Masukkan suhu dalam angka!');
        }
    });

    document.getElementById('reset-button').addEventListener('click', function() {
        reset();
    });

    document.getElementById('reverse-button').addEventListener('click', function() {
        isCelsius = !isCelsius; 
        switchLabels(); 
        inputField.value = ''; 
        resultDiv.textContent = ''; 
        explanationPara.textContent = ''; 
        explanationDetailPara.textContent = ''; 
    });

    function reset() {
        inputField.value = '';
        resultDiv.textContent = '';
        explanationPara.textContent = '';
        explanationDetailPara.textContent = '';
        isCelsius = true; 
        switchLabels();
    }

    switchLabels();
});

