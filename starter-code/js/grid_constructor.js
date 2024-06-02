// My gird constructor

import {ShowCaseModal} from "./image_opener.js";
import {AnimationManager} from "./animations.js";

export class gridConstructor{
    #animation
    #image_loader
    constructor(data){
        this.data = data;
        this.#animation = new AnimationManager();
        this.#image_loader = new ShowCaseModal();
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
                    <div class="view-image">
                        <div class="view-image__icon">
                            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>   
                        </div>
                        <p class="view-image__text">
                            View Image
                        </p>
                    </div>
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
                              <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/></g></svg>
                          </div>
                          <div class="control-menu__leftRight__right">
                            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/></g></svg>
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

    openFullImage(image_info) {
        let {name, images: {gallery}} = image_info;

        const image = new Image();
        image.src = gallery;
        image.alt = name;

        this.#image_loader.imageLoaded(image).
            then(loaded_image => {
            console.log(loaded_image);
            const new_element = document.createElement("div");
            new_element.className = "modal";
            new_element.innerHTML = `
                    <div class="modal-container">
                       <div class="close-container">
                           <button class="close-button">
                                <h4 class="close">Close</h4>
                           </button>
                       </div>
                       <div class="full-image">
                       </div> 
                    </div>
                `;
            const image_container = new_element.querySelector(".full-image");
            image_container.appendChild(loaded_image);
            document.body.appendChild(new_element);
            image_container.classList.add("opening");

            setTimeout(() => {
                image_container.classList.remove("opening");
            }, 600);

            const close_button = document.querySelector(".close-button");
            close_button.addEventListener("click", () => {
                image_container.classList.add("closing");
                setTimeout(() => {
                    new_element.remove();
                }, 600)
            })
        })
    }
}
