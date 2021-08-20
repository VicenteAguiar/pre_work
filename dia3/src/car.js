const formCar = document.querySelector('[data-js="car"]');
const table = document.querySelector('[data-js="tbody"]')

const pegarElemento = (evento) => (elemento) => {
    console.log(evento.target.elements[elemento]);
    return evento.target.elements[elemento];
};

formCar.addEventListener("submit", (e) => {
    e.preventDefault();
    const el = pegarElemento(e);
    const image = el("image");
    const marca = el("marca");
    const ano = el("ano");
    const placa = el("placa");
    const cor = el("cor");

    const elementos = [image, marca, ano, placa, cor]
    const tr = document.createElement('tr')

    elementos.forEach(elemento => {
        const td = document.createElement('td')
        td.textContent = elemento.value
        tr.appendChild(td)
    })
    table.appendChild(tr)
    e.target.reset()
    image.focus()
});
