let botaoAdicionar = document.querySelector('#addProd')
botaoAdicionar.addEventListener('click', function(evento){
    evento.preventDefault()
    
    let form = document.querySelector('#form-adiciona')
    console.log(form)

    let produto = obterValoresForm(form)
    console.log(produto)

    let erros = validaPaciente(produto)
    console.log(erros)

    adicionaProdutoNaTabela(produto)
})

function obterValoresForm(form){
    let produto = {
        nome: form.nome.value,
        descricao: form.decricao.value,
        preco: form.preco.value,
        estoque: form.estoque.value
    }
    return produto
}

function validaProduto(produto){
    let erros = []

    if(produto.nome.length == 0){
        erros.push('O nome não pode estar em branco')
    }
    if(produto.gordura.length == 0){
        erros.push('A descrição não pode estar em branco')
    }
    if(produto.peso.length == 0){
        erros.push('O preço não pode estar em branco')
    }
    if(produto.altura.length == 0){
        erros.push('O estoque não pode estar em branco')
    }
    if(!validaPeso(produto.peso)){
        erros.push('peso Invalido')
    }
    if(!validaAltura(produto.altura)){
        erros.push('altura invalida')
    }

    return erros
}

function exibeMensagemDeErro(erros){
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function(erros){
        let li = document.createElement('li')
        li.textContent = erros
        ul.appendChild(li)
    })
}

function adicionaProdutoNaTabela(produto){
    let produtoTr = montarTr(produto)
    let tabela = document.querySelector('.tabelaProduto')

    tabela.appendChild(produtoTr)
}

// function validaPeso(peso){
//     if (peso >= 0 && peso <= 1000){
//         return true
//     } else{
//         return false
//     }
// }

// function validaAltura(altura){
//     if(altura >= 0 && altura <= 3.00){
//         return true
//     } else{
//         return false
//     }
// }

//  cria uma tr (fileira da tabela)
function montarTr(produto){
    let  produtoTr = document.createElement('tr')
     produto.classList.add('produto')

     produtoTr.appendChild(montarTd(produto.nome, 'prodNome'))
     produtoTr.appendChild(montarTd(produto.peso, 'prodDesc'))
     produtoTr.appendChild(montarTd(produto.altura, 'prodPreco'))
     produtoTr.appendChild(montarTd(produto.gordura, 'prodEstoq'))
   
    return  produto
}

// cria uma td (dado da tabela)
function montarTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}
console.log 