export function handleFooter() {
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
    window.addEventListener("resize", changeNavButtonTextContent);
}

export async function implementFooter(footerWrapper) {
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
