import { truncate } from "./modules/truncate.js";
import { showModal, hideModal } from "./modules/modalHandler.js";
import { handleAnimations } from "./modules/handleAnimations.js";

const main = document.querySelector("main"),
    modal = document.querySelector(".modal"),
    modalContent = document.querySelector(".modal__content");

function openReviewModal(index, reviews) {
    const selectedReview = reviews[index];

    modalContent.innerHTML = `
            <header>
                <div class="title-wrapper">
                    <h3>${selectedReview.names}</h3>
                    <button>
                         <img src="/assets/svg/navIcons/close_dark.svg" alt="Croix" />
                    </button>
                </div>
            </header>
            <div class="line-break"></div>
            <div class="photo-frame">
                <img src="${selectedReview.img}" alt="${selectedReview.animalNames}" />
                <p>${selectedReview.animalNames}</p>
            </div>

            <div>
                ${selectedReview.content
                    .map((el) => {
                        return `<p>${el}</p>`;
                    })
                    .join("")}
            </div>
    `;

    modalContent
        .querySelector("button")
        .addEventListener("click", () => hideModal(modal, modalContent));

    modal
        .querySelector(".modal__backdrop")
        .addEventListener("click", () => hideModal(modal, modalContent));

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            hideModal(modal, modalContent);
        }
    });

    showModal(modal);
}

async function handleData() {
    const rawData = await import("../data/reviews.json", {
        with: { type: "json" },
    });
    const reviews = rawData.default;

    reviews.forEach((review, index) => {
        const reviewDiv = document.createElement("section");
        reviewDiv.classList.add("review-div", "to-animate");

        reviewDiv.innerHTML = `
            <div class="photo-frame">
                <img src="${review.img}" alt="${review.animalNames}" />
                <p>${review.animalNames}</p>
            </div>
            <div class="text-wrapper">
            <h3>${review.names}</h3>
            <div>
                ${truncate(
                    review.content
                        .map((el) => {
                            return `<p>${el}</p>`;
                        })
                        .join(""),
                    180,
                )}...
            </div>
            <a class="button">
                <img src="/assets/svg/buttons/arrow_forward.svg" alt="Flèche vers la droite" />
                <p>Lire plus</p>
            </a>
            </div>
        `;

        const reviewDivButton = reviewDiv.querySelector("a");
        reviewDivButton.addEventListener("click", () =>
            openReviewModal(index, reviews),
        );

        main.append(reviewDiv);
        handleAnimations();
    });
}
handleData();
