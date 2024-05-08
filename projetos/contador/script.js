
///////////CONTADOR//////////////

//primeiro adiciono o contador inicial
let contador = 0
//seleciono o span(value) e os botões
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
//criarei uma funcão com o forEach. 
//Lê-se: para cada botão, adiciona o evento click e um callback
//para saber em qual botão estou clicando.
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const style = e.currentTarget.classList//lista de classe
        //agora irei criar ifs para usar como condição a variavel const que
        //retorna o valor do botão clicado
        //Lê-se decrease é decendente ou o proprio style?
        if(style.contains('decrease')){
            contador--;
        }else if(style.contains('increase')){
            contador++;
        }else{
            contador = 0
        }        
        //Agora mudarei a cor do meu contador(span .value)
        if(contador > 0){
            value.style.color = 'green'
        }else if(contador < 0){
            value.style.color = 'red'
        }else if(contador ===0){
            value.style.color = '#102a42'
        }
        //aqui irei atribuir o valor de contador ou span(value)
        value.textContent = contador
    })
})