const menu = document.querySelector(".menu");

menu?.addEventListener('click', () => {
    const isExpanded = menu.getAttribute("aria-expanded") === "true" || false;
    menu.setAttribute("aria-expanded", String(!isExpanded));
});
