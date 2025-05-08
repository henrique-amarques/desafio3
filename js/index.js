const inputPreenchido = document.querySelectorAll('.input')
const caixa = document.querySelectorAll('.caixa')
const botaoEnviar = document.getElementsByClassName('btn')[0]


botaoEnviar.addEventListener('click', () =>{
    let i = 0
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
})