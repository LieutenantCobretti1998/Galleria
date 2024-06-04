// starter js file
import {DataFetcher} from "./data_fetcher.js";
import {gridConstructor} from "./grid_constructor.js";
// import {AnimationManager} from "./animations.js";
import {imagePresentation, ShowCaseModal} from "./image_opener.js";

let selected_id;
document.addEventListener("DOMContentLoaded", async () => {
    const gallery_element = document.querySelector(".gallery-container");

    const data_fetcher = new DataFetcher();
    const image_logic_class = new ShowCaseModal();
    // const animation_manager = new AnimationManager();
    const header = document.querySelector(".header__name");
    const header_slideshow_button = header.querySelector(".header__start-slideshow");
    await data_fetcher.fetchData()
        .then(data => {
            const grid = new gridConstructor(data);
            image_logic_class.loadGridImages(data)
                .then(() => {
                    grid.loadGridsImage();
                    gallery_element.classList.add("opening");
                    setTimeout(() => {
                        gallery_element.classList.remove("opening");
                    }, 1000)
                });
            header_slideshow_button.addEventListener("click", () => {
                startSlideShow(data, gallery_element,header, grid);
            });
            // animation_manager.changeAnimation();
            // animation_manager.startStopAnimation();
                imagePresentation((image_id) => {
                    selected_id = image_id;
                    let selected_image = data[image_id];
                    if (selected_image) {
                        grid.loadShowCaseWindow(selected_image, gallery_element, header);
                        const close_button = document.querySelector(".control-menu__close-button");
                        close_button.addEventListener("click", () => {
                            grid.closeModalWindow(header_slideshow_button, header, gallery_element);
                            console.log(gallery_element.classList)
                            setTimeout(() => {
                                gallery_element.classList.remove("opening");

                            }, 1000)
                        });
                        const left_button = document.querySelector(".control-menu__leftRight__left");
                        const right_button = document.querySelector(".control-menu__leftRight__right");
                        const view_image = document.querySelector(".view-image");
                        fillProgressBar(selected_id + 1, data.length);


                        right_button.addEventListener("click", () => {
                            selected_id = (selected_id + 1) % data.length;
                            grid.loadShowCaseWindow(data[selected_id], gallery_element, header);
                            fillProgressBar(selected_id + 1, data.length);
                        });
                        left_button.addEventListener("click", () => {
                            selected_id = (selected_id - 1 + data.length) % data.length;
                            grid.loadShowCaseWindow(data[selected_id], gallery_element, header);
                            fillProgressBar(selected_id + 1, data.length);
                        });
                        view_image.addEventListener("click", () => {
                            grid.openFullImage(data[selected_id]);
                        });
                    }
                });
        });

    /**
     *
     * @param {Array} data
     * @param {Element} gallery_element
     * @param {Element} header
     * @param {gridConstructor} grid
     */

    function startSlideShow(data, gallery_element, header, grid) {
        selected_id = 0;
        let selected_image = data[0];
        if(selected_image) {
            grid.loadShowCaseWindow(selected_image, gallery_element, header);
            const close_button = document.querySelector(".control-menu__close-button");
            console.log(10);
            close_button.addEventListener("click", () => {
                grid.closeModalWindow(header_slideshow_button, header, gallery_element);
                setTimeout(() => {
                    gallery_element.classList.remove("opening");
                }, 1000)
            });
            const left_button = document.querySelector(".control-menu__leftRight__left");
            const right_button = document.querySelector(".control-menu__leftRight__right");
            const view_image = document.querySelector(".view-image");
            fillProgressBar(selected_id + 1, data.length);


            right_button.addEventListener("click", () => {
                selected_id = (selected_id + 1) % data.length;
                grid.loadShowCaseWindow(data[selected_id], gallery_element, header);
                fillProgressBar(selected_id + 1, data.length);
            });
            left_button.addEventListener("click", () => {
                selected_id = (selected_id - 1 + data.length) % data.length;
                grid.loadShowCaseWindow(data[selected_id], gallery_element, header);
                fillProgressBar(selected_id + 1, data.length);
            });
            view_image.addEventListener("click", () => {
                grid.openFullImage(data[selected_id]);
            });
        }
    }

    function setupModalWindow(selected_image) {
        // For future refactoring my publications in code //
    }

    /**
     *
     * @param {Number} current_index
     * @param {Number} total_count
     */
    function fillProgressBar(current_index, total_count) {
        const fill = document.querySelector(".progress-bar__fill");
        const percentage = (current_index / total_count) * 100;
        fill.style.width = `${percentage}%`;
    }
    });

