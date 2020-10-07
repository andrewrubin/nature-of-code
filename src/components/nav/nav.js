const toggle = document.querySelector(".nav__toggle");
let isOpen = false;

const handleClick = (e) => {
  const target = e.currentTarget,
    parent = target.closest(".nav");

  isOpen = !isOpen;

  target.setAttribute("aria-expanded", isOpen);
  parent.dataset.open = isOpen;
};

const navInit = () => {
  toggle.addEventListener("click", handleClick);
};

export default navInit;
