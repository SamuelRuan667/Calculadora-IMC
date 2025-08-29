const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const weigth = document.getElementById('weigth').value;
    const heigth = document.getElementById('heigth').value;

    const bmi = ((weigth * 10000) / (heigth * heigth)).toFixed(1);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden')

    if (bmi < 18.5){
        description = 'Cuidado! Vc esta raquitico pra Krl'
    } else if (bmi>= 18.5 && bmi<=25){
        description = 'É ta Legalzinho!'
        value.classList.add('normal'); 
        value.classList.remove('attention');       
    }else if (bmi > 25 && bmi <= 30) {
        description = 'Gordinho Gostoso! kkkk'
    } else if(bmi>30 && bmi<=35) {
        description = 'Ta gordinho, mas indo a uma Academia resolve!'
    } else if (bmi>35 && bmi<=40) {
        description = 'Ta obeso, mas ainda tem uma minima chance!'
    } else {
        description = 'É Melhor comprar o Caixão, Vc não Tem mais Chances!!'
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});