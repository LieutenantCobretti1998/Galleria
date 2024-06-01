// starter js file
import {DataFetcher} from "./data_fetcher.js";
import {gridConstructor} from "./grid_constructor.js";
import {AnimationManager} from "./animations.js";
import {imagePresentation} from "./image_opener.js";

let selected_id;
document.addEventListener("DOMContentLoaded", async () => {
    const gallery_element = document.querySelector(".gallery-container");
    const data_fetcher = new DataFetcher();
    const animation_manager = new AnimationManager();
    const header = document.querySelector(".header__name");
    const header_slideshow_button = header.querySelector(".header__start-slideshow");
    await data_fetcher.fetchData()
        .then(data => {
            console.log(data);
            const grid = new gridConstructor(data);
            grid.loadGridsImage();
            animation_manager.changeAnimation();
            animation_manager.startStopAnimation();
            imagePresentation((image_id) => {
                selected_id = image_id;
                let selected_image = data[image_id];
                if (selected_image) {
                    grid.loadShowCaseWindow(selected_image, gallery_element, header);
                    const close_button = document.querySelector(".control-menu__close-button");
                    close_button.addEventListener("click", () => {
                        grid.closeModalWindow(header_slideshow_button, header);
                    });
                    const left_button = document.querySelector(".control-menu__leftRight__left");
                    const right_button = document.querySelector(".control-menu__leftRight__right");
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
                }
            });
        });

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
