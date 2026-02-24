export function handleNav(navWrapper) {
    const nav = document.querySelector("#nav"),
        navHeader = document.querySelector(".nav-header"),
        navHeaderLogo = document.querySelector(".nav-header__logo"),
        hamburgerMenuButton = document.querySelector(
            ".nav-header__hamburger-menu-button",
        ),
        hamburgerMenuCloseButton = document.querySelector(
            ".hamburger-menu__header__close-button",
        ),
        desktopLogo = document.querySelector(".desktop-logo");

    function showHamburgerMenu() {
        navWrapper.style.pointerEvents = "auto";
        nav.classList.add("show");
        navHeader.classList.add("hide");
        document.body.style.overflowY = "hidden";
    }

    function hideHamburgerMenu() {
        navWrapper.style.pointerEvents = "none";
        nav.classList.remove("show");
        navHeader.classList.remove("hide");
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";
    }

    hamburgerMenuButton.addEventListener("click", () => {
        showHamburgerMenu();
    });

    hamburgerMenuCloseButton.addEventListener("click", () => {
        hideHamburgerMenu();
    });

    if (
        window.location.pathname === "/index.html" ||
        window.location.pathname === "/"
    ) {
        desktopLogo.classList.add("hide");
        navHeaderLogo.classList.add("hide");
        navHeader.style.justifyContent = "end";
    }
}

export async function implementNav(navWrapper) {
    try {
        const response = await fetch("/src/components/nav.html");
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.text();

        navWrapper.innerHTML = result;

        handleNav(navWrapper);
    } catch (error) {
        console.error(error.message);
    }
}
