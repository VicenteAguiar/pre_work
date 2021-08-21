import './style.css'

const baseUrl = 'http://localhost:3333/cars'

// pego os elementos do form
const pegarElemento = (evento) => (elemento) => {
    return evento.target.elements[elemento]
}

// ciando os elementos da tabela
const bodyTable = document.querySelector('[data-js="tbody"]')
const rowBodyTable = document.createElement('tr')
const dataBodyTable = document.createElement('td')
const createDadosTable = () => {}

function dataTable() {
    return fetch(baseUrl)
        .then(result => result.json())
}

dataTable()
    .then(result => {
        if (result.length === 0) {
            dataBodyTable.textContent = "Nenhum carro encontrado!"
            dataBodyTable.setAttribute('colspan', '6')
            dataBodyTable.classList.add('text-center', 'bg-warning')
            bodyTable.appendChild(dataBodyTable)
            return
        }
    }, (error) => {
        console.log('Error: ', error)
    })
