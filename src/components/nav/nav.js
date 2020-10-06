const toggle = document.querySelector(".nav__toggle");

const handleClick = (e) => {
  const target = e.currentTarget,
    currentValue = target.getAttribute("aria-expanded"),
    newValue = currentValue === "true" ? "false" : "true";

  target.setAttribute("aria-expanded", newValue);
};

const navInit = () => {
  toggle.addEventListener("click", handleClick);
};

export default navInit;
