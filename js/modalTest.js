var modalElement
window.onload = () => {
    modalElement = document.querySelector("#modal")
}

function openModal() {
    modalElement.show()
}

function closeModal() {
    modalElement.close()
}