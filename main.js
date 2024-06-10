let input = document.querySelector('input')
let btn = document.querySelector('button')
let wrapper = document.querySelector('.wrapper')

let users = [
    {
        userName: 'Saidakbar',
    }
]

const ReadFunction = () => {
    wrapper.innerHTML = ''
    users.forEach((v, index) => {
        let div = document.createElement('div')
        div.innerHTML = `
            <input type="radio" id="radio${index}" name="userRadio${index}">
            <label for="radio${index}" id="label${index}" onclick="CheckFun(${index})">${v.userName}</label>
            <button onclick="DeleteFun(${index})">X</button>`
        wrapper.appendChild(div)
    })
}

ReadFunction()

btn.addEventListener('click',
    AddUserFunction = () => {
        let obj = {
            id: users.length + 1,
            userName: input.value
        }

        users.push(obj)
        ReadFunction()
        input.value = null
    }
)

const DeleteFun = (index) => {
    users.splice(index, 1)
    ReadFunction()
}

const CheckFun = (index) => {
    let radio = document.getElementById(`radio${index}`)
    let label = document.getElementById(`label${index}`)

    // Check the radio button and overline the text
    radio.checked = true
    label.style.textDecoration = "line-through"
}
