document.getElementById('bnt0').addEventListener('click', function(event){
    const valor1 = parseFloat(document.getElementById('number1').value);
    const valor2 = parseFloat(document.getElementById('number2').value);
    window.alert("O resultado da soma é: " + (valor1 + valor2));
});