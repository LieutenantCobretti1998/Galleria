// My gird constructor

import {ShowCaseModal} from "./image_opener.js";
import {AnimationManager} from "./animations.js";

export class gridConstructor{
    #animation
    constructor(data){
        this.data = data;
        this.#animation = new AnimationManager();
    }

    loadGridsImage() {

        const images_array = this.data.map((image_info, index) => {
            return {
                id : index,
                image_name: image_info.name,
                image_photo: image_info.images.thumbnail,
                author: image_info.artist.name
            }
        })

        const gallery_element = document.querySelector(".gallery-container");
        gallery_element.innerHTML = "";

        images_array.forEach(image_info => {
            const gallery_grid_item = document.createElement("div");
            gallery_grid_item.className = "gallery-container__item";
            gallery_grid_item.id = `item-${image_info.id}`;
            gallery_grid_item.innerHTML = `
                <figure>
                     <img src="${image_info.image_photo}" alt="${image_info.image_name}" id="${image_info.id}">
                     <figcaption class="image-description">
                        <span class="image-description__name">${image_info.image_name}</span>
                        <span class="image-description__author">${image_info.author}</span>
                     </figcaption>
                </figure>    
            `
            gallery_element.appendChild(gallery_grid_item);
        })
    }

    // Add all info from json data to the  modal window
    /**
     * @param {Object} image_info
     * @param {HTMLMenuElement} gallery_element
     * @param {Element} header
     */

    loadShowCaseWindow(image_info, gallery_element, header) {
            let  modal_section = document.querySelector('.modal-window');
            if (!modal_section) {
                const slide_show_button = header.querySelector(".header__start-slideshow");
                slide_show_button.remove();
                modal_section = document.createElement('section');
                modal_section.className = "modal-window";
                modal_section.innerHTML = `
                <p class="year">
                </p>
                <div class="modal-window__content show">
                    <img class="art" src="" alt="">
                    <div class="modal-window__content__image-flex">
                        <div class="image-details">
                            <h1 class="image-details__name"></h1>
                            <h2 class="image-details__author"></h2>
                        </div>
                         <img class="author-image" src="" alt="">
                    </div>
                    <div class="modal-window__content__story">
                        <span class="modal-window__content__story__text">
                            
                        </span>
                        <a class="modal-window__content__story__source" href="#">Go to Source</a>
                    </div>
                </div
              `
                gallery_element.appendChild(modal_section);
                const control_menu_section = `
                    <div class="progress-bar">
                        <div class="progress-bar__fill"></div>
                    </div>
                    <section class="control-menu">
                    <section class="image-description-overview">
                        <span class="image-description-overview__name">${image_info.name}</span>
                        <span class="image-description-overview__author">${image_info.artist.name}</span>
                    </section>
                        <div class="control-menu__leftRight">
                          <div class="control-menu__leftRight__left">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                              </svg>
                          </div>
                          <div class="control-menu__leftRight__right">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                    </section>
                `
                gallery_element.insertAdjacentHTML("afterend", control_menu_section);
                const control_menu_section_element = document.querySelector(".control-menu");
                control_menu_section_element.classList.add("opening");
                const close_button = `
                    <div class="control-menu__close-button">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                `
                header.insertAdjacentHTML("beforeend", close_button);
                header.querySelector(".control-menu__close-button").classList.add("opening");
                setTimeout(() => {
                    control_menu_section_element.classList.remove("opening");
                    header.querySelector(".control-menu__close-button").classList.remove("opening");
                }, 500);
            }
            this.updateModalContent(modal_section, image_info);
    }


    // update modal content
    /**
     * @param {HTMLMenuElement} modal_section
     * @param {Object} image_info
     */

    updateModalContent(modal_section, image_info) {
        const content_section = modal_section.querySelector('.modal-window__content');
        const left_button = document.querySelector(".control-menu__leftRight__left");
        const right_button = document.querySelector(".control-menu__leftRight__right");
        const image_description_element = document.querySelector(".image-description-overview");
        image_description_element.querySelector(".image-description-overview__name").innerText = image_info.name;
        image_description_element.querySelector(".image-description-overview__author").innerText = image_info.artist.name;
        modal_section.querySelector(".year").innerText = "";
        [left_button, right_button].forEach((button) => {
            button.classList.add("disabled");
        })
        content_section.classList.remove("visible");
        content_section.classList.add("hidden");

        // Update after images are loaded
        const show_case = new ShowCaseModal(image_info);
        show_case.loadImages()
            .then(([hero_image, author_image]) => {
                setTimeout(() => {
                    modal_section.querySelector(".art").src = hero_image.src;
                    modal_section.querySelector(".art").alt = image_info.name;
                    this.#animation.typeWriterEffect(image_info.year.toString(), modal_section, [left_button, right_button]);
                    modal_section.querySelector('.image-details__name').textContent = image_info.name;
                    modal_section.querySelector('.image-details__author').textContent = image_info.artist.name;
                    modal_section.querySelector('.author-image').src = author_image.src;
                    modal_section.querySelector('.author-image').alt = image_info.artist.name;
                    modal_section.querySelector('.modal-window__content__story__text').textContent = image_info.description;
                    modal_section.querySelector('.modal-window__content__story__source').href = image_info.source;
                    content_section.classList.add("visible");
                }, 500);
            })
            .catch((error) => {
                console.error('Error loading images:', error);
            })
    }

    // Remove dom modal el after close button
    /**
     * @param {HTMLMenuElement} slideshow_button
     * @param {HTMLMenuElement} header
     */

    closeModalWindow(slideshow_button, header) {
        const modal_section = document.querySelector(".modal-window");
        const content_section = modal_section.querySelector('.modal-window__content');
        const control_menu_section = document.querySelector(".control-menu");
        const progress_bar = document.querySelector(".progress-bar");
        const progress_bar__line = document.querySelector(".progress-bar__fill");
        const close_button = document.querySelector(".control-menu__close-button");
        const year_element = document.querySelector(".year");

        [close_button, year_element, content_section, control_menu_section, progress_bar__line].forEach((element) => {
            element.classList.add("closing");
        });

        close_button.remove();
        header.insertAdjacentElement("beforeend", slideshow_button);
        header.querySelector(".header__start-slideshow").classList.add("opening");
        setTimeout(() => {
            modal_section.parentNode.removeChild(modal_section);
            header.querySelector(".header__start-slideshow").classList.remove("opening");
            control_menu_section.parentNode.removeChild(control_menu_section);
            progress_bar.parentNode.removeChild(progress_bar);
        }, 500);
    }
}
