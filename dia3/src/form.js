// exercicio 1

const proibido = ['da', 'das', 'de', 'do', 'dos'];

const inputName = document.querySelector('[data-js="inputName"]');

inputName.addEventListener("input", (e) => {
    const word = e.target.value.split(' ')
    e.target.value = repla(word)
});


function repla(word) {
    return word.map(n => {
        if (proibido.includes(n.toLowerCase())) {
            return n.toLowerCase()
        }
        return n.replace(n[0], n.charAt(0).toUpperCase())
    }).join(' ')
}


// exercicio 2
const cores = ['yellow', 'red', 'black', 'blue', 'green']

const form = document.querySelector('form')
const select = document.createElement('select')
const novaDivCores = document.createElement('div')
novaDivCores.style.display = 'flex'

select.addEventListener('change', (e) => {
    novaDivCores.innerHTML = ''
    Array.from(e.target.selectedOptions).map(el => {
        const div = document.createElement('div')
        div.style.width = '100px'
        div.style.height = '100px'
        div.style.background = el.value
        console.log(el.value)
        novaDivCores.appendChild(div)
    })
})

cores.forEach(cor => {
    const opt = document.createElement('option')
    opt.value = cor
    opt.textContent = cor
    select.appendChild(opt)
})

select.setAttribute('multiple', '')
form.appendChild(select)
form.appendChild(novaDivCores)
