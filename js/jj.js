

//let paciente = document.querySelectorAll('.pacientes')

let tabela = document.querySelector('#tabelaProduto')

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')

        setTimeout(function (){
    event.target.parentNode.remove() 
        },500)
})