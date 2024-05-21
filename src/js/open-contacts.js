(() => {
  const refs = {
    openModalBtn: document.getElementById("open-contacts"),
    closeModalBtn: document.getElementById("close-contacts"),
    modal: document.getElementById("contacts__window"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  }
})();
