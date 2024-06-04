export class AnimationManager {
    #timeout_ref;
    constructor() {
        // this.paused = false;
        this.#timeout_ref = null;

    }

    // changeAnimation() {
    //     document.querySelectorAll(".gallery-container__item").forEach(image => {
    //         image.addEventListener("animationend", (event) => {
    //             const viewport_width = window.innerWidth;
    //             let animation_name
    //
    //             requestAnimationFrame(() => {
    //                 image.style.animation = "resetToBottom 20s linear infinite";
    //             })
    //         })
    //     })
    // }
    //
    // startStopAnimation() {
    //     const main_container = document.querySelector(".header__start-slideshow");
    //     main_container.addEventListener("click", () => {
    //         document.querySelectorAll(".gallery-container__item").forEach(image => {
    //             image.style.animationPlayState = this.paused ? "running" : "paused";
    //             main_container.textContent = this.paused ? "Stop Slideshow" : "Start Slideshow";
    //         });
    //         this.paused = !this.paused;
    //     })
    // }

    typeWriterEffect(text, element, buttons) {
        const text_element = element.querySelector(".year");
        text_element.innerText = "";  // Clear the text initially
        let index = 0;
        const type = () => {
            if (index < text.length) {
                text_element.innerHTML += text.charAt(index);
                index += 1;
                this.#timeout_ref = setTimeout(type, 150);
            } else {
                buttons.forEach((button) => {
                    button.classList.remove("disabled");
                });
                clearTimeout(this.#timeout_ref);
            }
        }
        type();

    }
}