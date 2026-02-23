const tableOfContentsLinks = document.querySelectorAll(
        ".table-of-contents-dropdown__contents__link",
    ),
    chartSections = document.querySelectorAll(".chart-section"),
    tableOfContentsTitle = document.querySelector(
        ".table-of-contents-dropdown__title",
    ),
    tableOfContents = document.querySelector(".table-of-contents-dropdown");

tableOfContentsLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        const selectedSection = document.querySelector(`h3[id='${index + 1}']`);
        selectedSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });
        chartSections[index].classList.add("highlight-chart-section");
        setTimeout(() => {
            chartSections[index].classList.remove("highlight-chart-section");
        }, 1200);
    });
});

tableOfContentsTitle.addEventListener("click", () => {
    tableOfContents.classList.toggle("active");
});
