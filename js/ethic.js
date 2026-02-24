const chartSections = document.querySelectorAll(".chart-section"),
    tableOfContents = document.querySelector(".table-of-contents-dropdown"),
    tableOfContentsTitle = document.querySelector(
        ".table-of-contents-dropdown__title",
    ),
    tableOfContentsLinks = document.querySelectorAll(
        ".table-of-contents-dropdown__contents__link",
    ),
    sectionTitles = document.querySelectorAll(".chart-section h3");

tableOfContentsLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        const selectedSection = document.querySelector(`h3[id='${index + 1}']`);
        selectedSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
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
