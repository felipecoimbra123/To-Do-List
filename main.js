const texto = document.querySelector('input')
const btnInsert = document.querySelector('.divInsert button')
const btnDeleteAll = document.querySelector('.header button')
const ul = document.querySelector('ul')

let itensDB = []

texto.addEventListener('keypress', (e) => {
    if (e.key == 'Enter' && texto.value != '') {
        setItemDB()
    }
})

btnInsert.onclick = () => {
    if (texto.value != '') {
        setItemDB()
    }
}

function setItemDB() {
    if (itensDB.length >= 20) {
        alert('Limite máximo de 20 itens atingidos')
        return
    }
}

    itensDB.push({ 'item': texto.value, 'status': ''})
    updateDB()
}

function updateDB() {
    localStorage.setItem('todolist', JSON.stringify(itensDB))
    loadItens()
}

function loadItens() {
    ul.innerHTML = ""
    itensDB = JSON.parse(localStorage.getItem('todolist')) ?? []
    itensDB.forEach(item, i) => {
        insertItemTela(item.item, item.status, i)
    })
}