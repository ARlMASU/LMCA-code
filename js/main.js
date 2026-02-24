const navWrapper = document.querySelector("#nav-wrapper"),
    footerWrapper = document.querySelector("#footer-wrapper");

function handleNav() {
    const nav = document.querySelector("#nav"),
        navHeader = document.querySelector(".nav-header"),
        navHeaderLogo = document.querySelector(".nav-header__logo");
    ((hamburgerMenuButton = document.querySelector(
        ".nav-header__hamburger-menu-button",
    )),
        (hamburgerMenuCloseButton = document.querySelector(
            ".hamburger-menu__header__close-button",
        )),
        (desktopLogo = document.querySelector(".desktop-logo")));

    function showHamburgerMenu() {
        navWrapper.style.pointerEvents = "auto";
        nav.classList.add("show");
        navHeader.classList.add("hide");
        document.body.style.overflow = "hidden";
    }

    function hideHamburgerMenu() {
        navWrapper.style.pointerEvents = "none";
        nav.classList.remove("show");
        navHeader.classList.remove("hide");
        document.body.style.overflow = "scroll";
    }

    hamburgerMenuButton.addEventListener("click", () => {
        showHamburgerMenu();
    });

    hamburgerMenuCloseButton.addEventListener("click", () => {
        hideHamburgerMenu();
    });

    if (window.location.pathname === "/index.html") {
        desktopLogo.classList.add("hide");
        navHeaderLogo.classList.add("hide");
        navHeader.style.justifyContent = "end";
    }
}

function handleFooter() {
    const mailButtonText = document.querySelector(
        ".footer__right-section__contact__mail-button p",
    );
    // phoneButtonText = document.querySelector(
    //     ".footer__right-section__contact__phone-button p",
    // );

    function changeNavButtonTextContent() {
        if (window.innerWidth < 1205) {
            mailButtonText.textContent = "Mail";
            // phoneButtonText.textContent = "Téléphone";
        } else {
            mailButtonText.textContent =
                "laetitiamuratore.com.animale@gmail.com";
            // phoneButtonText.textContent = "0477/91.66.03 (appel ou SMS)";
        }
    }

    changeNavButtonTextContent();
    window.addEventListener("resize", () => changeNavButtonTextContent());
}

async function implementNav() {
    try {
        const response = await fetch("/src/components/nav.html");
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.text();

        navWrapper.innerHTML = result;

        handleNav();
    } catch (error) {
        console.error(error.message);
    }
}

async function implementFooter() {
    try {
        const response = await fetch("/src/components/footer.html");
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.text();

        footerWrapper.innerHTML = result;

        handleFooter();
    } catch (error) {
        console.error(error.message);
    }
}

implementNav();
implementFooter();

toAnimateElements = document.querySelectorAll(".to-animate");

let options = {
    rootMargin: "-25% 100% -25% 100%",
    scrollMargin: "0%",
    threshold: 0.2,
};

const callback = (entries) => {
    entries.forEach((entry) => {
        const element = entry.target;

        if (!element.classList.contains("animation")) {
            if (entry.isIntersecting) {
                element.classList.add("animation");
                console.log("added");
            }
        }
    });
};

const observer = new IntersectionObserver(callback, options);

toAnimateElements.forEach((element) => {
    observer.observe(element);
});
