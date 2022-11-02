// let nome = "Luciano Gomes da Silva"

// localStorage.setItem("nome", nome)

// console.log(localStorage.getItem("nome"))

// const tarefas = [
//     { id: 1, descricao: 'Pagar a conta de Energia' },
//     { id: 2, descricao: 'Estudar para a prova' },
//     { id: 3, descricao: 'Fazer tarefa de BD' }
// ]

// localStorage.setItem("tarefas", JSON.stringify(tarefas))

// const listaDeTarefas = JSON.parse(localStorage.getItem("tarefas"))

// console.log(typeof(listaDeTarefas))

// console.log(listaDeTarefas[0].descricao)

// const inputTarefa = document.querySelector('#tarefa')
// console.log(inputTarefa.value)

// const formTarefa = document.querySelector('#form')

// formTarefa.addEventListener('submit', function(event){
//     event.preventDefault()
//     console.log(inputTarefa.value)
// })

// function imprimir(){
//     console.log("Clicou no botão")
// }

const descricaoTarefa = document.querySelector('#tarefa')
const dataTarefa = document.querySelector('#data')
const form = document.querySelector('#form')
const listaTarefas = []

function limparFormulario() {
    descricaoTarefa.value = ''
    dataTarefa.value = ''
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const tarefa = {
        descricao: descricaoTarefa.value,
        data: dataTarefa.value,
        realizado: false,
    }

    listaTarefas.push(tarefa)

    console.log(tarefa)
})