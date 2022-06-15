//we store the "div" of the DOM to write
const container = document.getElementById('text')
//we store the text to be written
const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis provident veritatis, natus eius beatae repellat recusandae quod sapiente reiciendis dolores quo atque quaerat accusamus dolor necessitatibus perferendis repellendus sint quos....'
//we define a limit that represents the number of characters present in our text above
const limit = text.length
//we define the interval for the execution of the "setInterval" function
const interval = 150
//we set the index to 0, (index of our text)
let index = 0

const idInterval = setInterval(function () {
    console.log(index)
    if (index <= limit) {//if the index is smaller than or equal to the text length, we write text
        container.innerText = text.slice(0, index++)
    } else {//otherwise we stop 
        clearInterval(idInterval)
    }
}, interval)

