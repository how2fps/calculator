const keys = document.querySelector('.calculator-buttons')
const display = document.querySelector('.calculator-screen')
keys.addEventListener('click', event => {
    if (!event.target.closest('button'))
        return
    const key = event.target
    console.log(key.textContent)
    const keyValue = key.textContent
    displayValue = display.textContent
    console.log(display.textContent)
}
)