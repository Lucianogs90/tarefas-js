// let nome = "Luciano Gomes da Silva"

// localStorage.setItem("nome", nome)

// console.log(localStorage.getItem("nome"))

const tarefas = [
    { id: 1, descricao: 'Pagar a conta de Energia' },
    { id: 2, descricao: 'Estudar para a prova' },
    { id: 3, descricao: 'Fazer tarefa de BD' }
]

localStorage.setItem("tarefas", JSON.stringify(tarefas))

const listaDeTarefas = JSON.parse(localStorage.getItem("tarefas"))

console.log(typeof(listaDeTarefas))

console.log(listaDeTarefas[0].descricao)