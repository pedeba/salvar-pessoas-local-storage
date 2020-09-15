let nome = document.querySelector(".nome")
let idade = document.querySelector(".idade")
let listaNomes = document.querySelector("section")
let divs

for(let i = 0; i<Number(localStorage.divs);i++){
    listaNomes.appendChild(document.createElement('div')).classList.add('pessoas-div')
}
let divAdicionada = document.querySelectorAll('.pessoas-div')
divAdicionada.forEach((div,index)=>{
    div.innerText = `${JSON.parse(localStorage.pessoas)[index].nome} tem ${JSON.parse(localStorage.pessoas)[index].idade} anos.`
})

function salvar(){
    if (!nome.value || !idade.value){
        alert("Não deixe campos vazios.")
    }else{
        let novaPessoa = {nome: nome.value, idade: Number(idade.value)}
        let pessoas = localStorage.getItem("pessoas")
        let pessoasArr
        if(!pessoas){
            pessoasArr = []
        } else {
            pessoasArr = JSON.parse(localStorage.pessoas)
        }
        pessoasArr.push(novaPessoa)
        localStorage.pessoas = JSON.stringify(pessoasArr)
        listaNomes.appendChild(document.createElement('div')).classList.add('pessoas-div')
        divs = document.querySelectorAll('.pessoas-div')
        localStorage.divs = divs.length
        alert('Pessoa adicionada! Clique em "MOSTRAR" para visualizar.')
        nome.value = null
        idade.value = null
    }
}

function mostrar() {
    if(!localStorage.getItem("pessoas")) {
        alert("Nenhuma pessoa foi adicionada.")
    } else {
        JSON.parse(localStorage.pessoas).forEach((pessoa,index)=>{
            divs[index].innerText = `${pessoa.nome} tem ${pessoa.idade} anos.`
        })       
    }
}
function limpar(){
    localStorage.clear()
    window.location.reload()
}