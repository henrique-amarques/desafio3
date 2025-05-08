const inputPreenchido = document.querySelectorAll('.input')
const caixa = document.querySelectorAll('.caixa')
const botaoEnviar = document.getElementsByClassName('btn')[0]
let i = 0

botaoEnviar.addEventListener('click', () =>{
    inputPreenchido.forEach(element => {
        if(element.value == ''){
            caixa[i].classList.add('falta')
            element.classList.remove('preenchido')
            
        }if(element.value !=''){
            caixa[i].classList.remove('falta');
            element.classList.add('preenchido')
            
        }
        i= i+1
    });
i=0

})