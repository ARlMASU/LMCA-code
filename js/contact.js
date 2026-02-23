const pricesWrapper = document.querySelector(".prices__prices-wrapper"),
    modal = document.querySelector(".modal"),
    modalContent = document.querySelector(".modal__content");

function truncate(str, maxLength) {
    const truncated = str.substring(0, maxLength);
    const indexOfLastSpace = truncated.lastIndexOf(" ");
    return truncated.substring(0, indexOfLastSpace);
}

function showModal() {
    modal.classList.remove("closing");
    document.body.classList.add("modal-open");
    modal.classList.add("show");
}

function hideModal() {
    modal.classList.add("closing");

    modalContent.addEventListener(
        "animationend",
        () => {
            modal.classList.remove("show", "closing");
            document.body.classList.remove("modal-open");
        },
        { once: true },
    );
}

function openPriceModal(index, prices) {
    const selectedPrice = prices[index];

    modalContent.innerHTML = `
            <header>
                <div class="title-wrapper">
                    <h3>${selectedPrice.detailedTitle ?? selectedPrice.title}</h3>
                    <button>
                         <img src="/assets/svg/navIcons/close_dark.svg" alt="Croix" />
                    </button>
                </div>
                <div class="characteristics">
                    ${selectedPrice.characteristics
                        .map((chara) => {
                            return `
                            <p>
                                <strong>${chara}</strong>
                            </p>
                        `;
                        })
                        .join("")}
                </div>
            </header>
            <div class="line-break"></div>
            <div>
                ${selectedPrice.content
                    .map((el) => {
                        if (Array.isArray(el)) {
                            return `<ul>
                                ${el
                                    .map((li) => {
                                        return `<li>${li}</li>`;
                                    })
                                    .join("")}
                        </ul>`;
                        } else {
                            return `<p>${el}</p>`;
                        }
                    })
                    .join("")}
            </div>
            <a class="button" href="mailto:laetitiamuratore.com.animale@gmail.com">
                <img src="/assets/svg/buttons/mail.svg" alt="Lettre" />
                <p>Commander par mail</p>
            </a>
    `;

    modalContent.querySelector("button").addEventListener("click", hideModal);

    modal
        .querySelector(".modal__backdrop")
        .addEventListener("click", hideModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            hideModal();
        }
    });

    showModal();
}

async function handleData() {
    const rawData = await import("../data/pricesInfo.json", {
        with: { type: "json" },
    });
    const prices = rawData.default;

    prices.forEach((price, index) => {
        const priceDiv = document.createElement("div");
        priceDiv.classList.add("price-div");

        priceDiv.innerHTML = `
            <header>
                <h3>${price.title}</h3>
                <div>
                    ${price.characteristics
                        .map((chara) => {
                            return `
                            <p>
                                <strong>${chara}</strong>
                            </p>
                        `;
                        })
                        .join("")}
                </div>
            </header>
            <div>
               ${truncate(
                   price.content
                       .map((el) => {
                           if (Array.isArray(el)) {
                               return `<ul>
                                ${el
                                    .map((li) => {
                                        return `<li>${li}</li>`;
                                    })
                                    .join("")}
                        </ul>`;
                           } else {
                               return `<p>${el}</p>`;
                           }
                       })
                       .join(""),
                   160,
               )}...
            </div>
            <a class="button">
                <img src="/assets/svg/buttons/arrow_forward.svg" alt="Flèche vers la droite" />
                <p>En savoir plus</p>
            </a>
        `;

        const priceDivButton = priceDiv.querySelector("a");
        priceDivButton.addEventListener("click", () =>
            openPriceModal(index, prices),
        );

        pricesWrapper.append(priceDiv);
    });
}
handleData();
