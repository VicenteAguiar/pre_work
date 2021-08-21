import "./style.css";

const baseUrl = "http://localhost:3333/cars";

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
                const image = createElementInTable("td", `${result[data].plate}`);
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
        console.log("Surgiu um error inesperado!", error);
    }
);
