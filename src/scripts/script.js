/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handleModal() {
    const button = document.querySelector("#button__header");
    const modalContainer = document.querySelector("#modal__controller");

    button.addEventListener('click', () => {
        modalContainer.showModal()
        closeModal();
    })
}

function closeModal () {
    const button = document.querySelector("#close__modal");
    const modalContainer = document.querySelector("#modal__controller");

    button.addEventListener('click', () => {
        modalContainer.close();
    })
}

handleModal();

