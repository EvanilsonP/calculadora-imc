const form = document.getElementById('form'); // Pegando o formulário
form.addEventListener('submit', function(event) {
    // Evitando recarregamento da página ao enviar o formulário
    event.preventDefault(); 

    // Pegando ambos valores de KG e M
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Fórmula do cálculo IMC
    const bmi = (weight / (height * height)).toFixed(2);

        value.classList.add('attention');
        
        document.getElementById('infos').classList.remove('hidden');
    
        if (bmi < 18.5){
            description = 'Cuidado! Você está abaixo do peso!';
        } 

        else if (bmi >= 18.5 && bmi <= 25) {
            description = "Você está no peso ideal!";
            value.classList.remove('attention');
            value.classList.add('normal');
        }

        else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Você está com sobrepeso!";
        }

        else if (bmi > 30 && bmi <= 35) {
            description = "Cuidado! Você está com obesidade moderada!";
        }

        else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! Você está com obesidade severa!";
        }

        else {
            description = "Cuidado! Você está com obesidade morbida!";
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
});