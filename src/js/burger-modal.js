(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.toggle('is-open');
  }
})();

(() => {
  const menuNavLink = document.querySelector('[data-menu-link]');
  const menuBtnRef = document.querySelector('[data-menu-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  menuNavLink.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
  });
})();
