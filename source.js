/* Capturar de elementos */
var elementPP = document.querySelector('p.element-pp');
let elementInput = document.querySelector('input.element-input')
elementInput.focus();


/* logica */
let segredo = Math.round(Math.random() * 10);

function Verificar() {
    return (elementInput.value == segredo) ? elementPP.innerHTML = 'Você Acertou' : elementPP.innerHTML = 'Você Errou';
    elementInput.focus();
    elementInput.value = '';
}

let elementButton = document.querySelector('button.element-button');

/* Função */
elementButton.onclick = function () {
    let texto = elementInput.value;
    Verificar();
}