import "./style.css";

const baseUrl = "http://localhost:3333/cars";
const form = document.querySelector('[data-js="car"]')
const warn = document.querySelector('[data-js="warning"]')

// pego os elementos do form
const pegarElemento = (evento) => (elemento) => {
    return evento.target.elements[elemento];
};

// ciando os elementos da tabela
const bodyTable = document.querySelector('[data-js="tbody"]');
const createDadosTable = () => {};

function createElementInTable(element, valor) {
    const el = document.createElement(element);
    el.textContent = valor;
    const ref = el;
    return ref;
}

function dataTable() {
    return fetch(baseUrl).then((result) => result.json());
}

function edit() {
    const btnEdit = createElementInTable("button");
    const edit = createElementInTable("i");
    btnEdit.appendChild(edit);
    edit.classList.add("fas", "fa-edit");

    const btnTrash = createElementInTable("button");
    const trash = createElementInTable("i");
    btnTrash.appendChild(trash);
    trash.classList.add("fas", "fa-trash");
    btnTrash.classList.add("btn", "btn-danger", "m-1");

    const editTD = createElementInTable("td");
    btnEdit.classList.add("btn", "btn-info");
    editTD.appendChild(btnEdit);
    editTD.appendChild(btnTrash);

    return editTD;
}

function createElementImage(srcImage, altImag) {
    const td = createElementInTable('td')
    const img = createElementInTable('img')
    img.src = srcImage
    img.setAttribute('alt', altImag)
    img.classList.add('img-fluid')
    td.appendChild(img)
    return td
}

const showData = () => {
    dataTable().then(
        (result) => {
            if (result.length === 0) {
                const el = createElementInTable("td", "Nenhum carro encontrado!");
                el.setAttribute("colspan", "6");
                el.classList.add("text-center", "bg-warning");
                bodyTable.appendChild(el);
                return;
            } else {
                for (let data in result) {
                    const el = createElementInTable("tr");
                    const image = createElementImage(`${result[data].image}`, `Imagem da api`);
                    const brandModel = createElementInTable(
                        "td",
                        `${result[data].brandModel}`
                    );
                    const year = createElementInTable("td", `${result[data].year}`);
                    const plate = createElementInTable("td", `${result[data].plate}`);
                    const color = createElementInTable("td", `${result[data].color}`);
                    const editTD = edit();

                    const items = [image, brandModel, year, plate, color, editTD];
                    items.forEach((n) => {
                        el.appendChild(n);
                    });

                    bodyTable.appendChild(el);
                }
            }
        },
        (error) => {
            toasts("Surgiu um error inesperado!", error);
        }
    )
}


// cadastrar os carros
function registerCar(dados) {
    const register = fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: dados
    }).then(res => res.json())
    return register
}

function toasts(msg) {
    warn.textContent = msg
    warn.removeAttribute('hidden', 'hidden')
    return warn
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const el = pegarElemento(e)
    const image = el('image').value
    const brandModel = el('marca').value
    const year = el('ano').value
    const plate = el('placa').value
    const color = el('cor').value

    const dados = {
        image,
        brandModel,
        year,
        plate,
        color
    }


    registerCar(JSON.stringify(dados))
        .then(data => {
            toasts(`${data.message}`)
        })
    bodyTable.textContent = ''
    document.location.reload(true)
    form.reset()
    form.image.focus()

})
showData()
setInterval(() => { warn.setAttribute('hidden', 'hidden') }, 5000)
