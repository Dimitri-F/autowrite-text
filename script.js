const container = document.getElementById('text')

const text = 'Type your text here'
const limit = text.length
const interval = 400
let index = 0

const idInterval = setInterval(function () {
    console.log(index)
    if (index <= limit){
        container.innerText = text.slice(0, index++)
    }else {
        clearInterval(idInterval)
    }
})

