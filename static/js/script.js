let openMenu = false;

const showNavigationMenu = () => {
    if (openMenu === false) {
        openMenu = true;
        navigationMenu.style.display = "flex";
    } else {
        openMenu = false;
        navigationMenu.style.display = "none";
    }
}