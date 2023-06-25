function addingEventListener(input) {
    input = document.getElementById(`input`)
    console.log(input)
    input.addEventListener(`keypress`,addingEventListener)
    input.innerText = `Now`
}
addingEventListener()