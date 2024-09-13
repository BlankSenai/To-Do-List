function addNew (task) {
    const id = crypto.randomUUID()

    const list = document.querySelector('#list')
    
    const li = document.createElement('li')
    li.textContent = task
    li.dataset.key = id

    const iconDiv = document.createElement('div')
    iconDiv.classList.add('icon-container')

    const doneIcon = document.createElement('span')
    doneIcon.classList.add('material-icons')
    doneIcon.textContent = 'done'
    doneIcon.dataset.key = id

    doneIcon.addEventListener('click', () => {
        for (const item of list.children) {
            if (item.dataset.key === doneIcon.dataset.key) {
                item.classList.add('done')
            }
        }
    })
    
    const removeIcon = document.createElement('span')
    removeIcon.classList.add('material-icons')
    removeIcon.textContent = 'delete'
    removeIcon.dataset.key = id

    removeIcon.addEventListener('click', () => {
        for (const item of list.children) {
            if (item.dataset.key === removeIcon.dataset.key) {
                list.removeChild(item)
            }
        }
    })

    iconDiv.appendChild(doneIcon)
    iconDiv.appendChild(removeIcon)
    li.appendChild(iconDiv)
    list.appendChild(li)
}

const btn = document.querySelector('#addBtn')

btn.addEventListener('click', () => {
    const input = document.querySelector('#input')

    if (input.value === '') {
        alert('Escreva alguma coisa!')
        return
    }

    addNew(input.value)
    input.value = ''
})