export function showModal(modal) {
    modal.classList.remove("closing");
    document.body.classList.add("modal-open");
    modal.classList.add("show");
}

export function hideModal(modal, modalContent) {
    modal.classList.add("closing");

    modalContent.addEventListener(
        "animationend",
        () => {
            modal.classList.remove("show", "closing");
            document.body.classList.remove("modal-open");
        },
        { once: true },
    );
}
