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
