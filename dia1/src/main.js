import './style.css'

const ancora = document.querySelector('[data-js="ancora"]')
const app = document.querySelector('[data-js="app"]')

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

ancora.addEventListener('click', (e) => {
    e.preventDefault()
    if (!app.classList.contains('show')) {
        app.classList.add('show')
    } else {
        app.classList.remove('show')
    }
}, false)