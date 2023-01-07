// the for loop here makes text appear ten times
let i = 0
function addTextToTop() {
    // document is an object
    // creatElement is a function
    const newPara = document.createElement('p')
    newPara.textContent = 'This is new text!'
    newPara.classList.add('generated-text')
    // below prepends (add to top?)
    document.body.prepend(newPara)
    if(i % 2 === 0) {
        // above means, if the number is ever
        newPara.style.setProperty('color', 'red')
    } else {
        newPara.style.setProperty('color', 'blue')
    }
    i++
    }

    function addButton(buttonText, onClick) {
    const button = document.createElement('button')
    button.textContent = buttonText
    document.body.prepend(button)
    button.addEventListener('click', onClick)
    }

addButton('Remove text', () => {
let paras = document.querySelectorAll('.generated-text')
for (let para of paras) {
    para.remove()
}

})
addButton('Add text', addTextToTop)


