function State() {
    this.container = null;
    this.btnClose = null;
}

const state = new State();


export function init() {
    state.container = document.querySelector("#modal-google-tag");
    state.btnClose = document.querySelector("#modal-tag-close");
    

    state.btnClose.addEventListener("click", handleBtnCloseClick)

    console.log("modal iniciado");
}

export function showModal() {
    state.container.classList.add("active");
}

export function closeModal() {
    state.container.classList.remove("active");
}

function handleBtnCloseClick(event) {
    event.preventDefault();
    closeModal();
}