export function handleAnimations() {
    let toAnimateElements = document.querySelectorAll(".to-animate");

    let options = {
        rootMargin: "-25% 100% -25% 100%",
        scrollMargin: "10%",
        threshold: 0.3,
    };

    const callback = (entries) => {
        entries.forEach((entry) => {
            const element = entry.target;

            if (!element.classList.contains("animation")) {
                if (entry.isIntersecting) {
                    element.classList.add("animation");
                }
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    toAnimateElements.forEach((element) => {
        observer.observe(element);
    });

    if (window.innerWidth < 954) {
        Object.defineProperty(options, "rootMargin", {
            value: "-35% 100% -35% 100%",
        });
    }
}
