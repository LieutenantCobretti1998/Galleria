/**
 @param {function(number): void} callback
 @returns {number}
 */

export function imagePresentation(callback) {
    const main_container = document.querySelector('.gallery-container');
    let id
    console.log("hi");
     main_container.addEventListener("click", (event) => {

        if (event.target.tagName === "IMG") {
            id = Number(event.target.id);
            callback(id);
        }
    })
}

export class ShowCaseModal {
    constructor(image_data = null) {
        this.image_data = image_data;
    }

    loadImages() {
        const hero_image = new Image();
        const author_image = new Image();

        hero_image.src =  this.image_data.images.hero.large;
        author_image.src =  this.image_data.artist.image;

        return Promise.all([
            this.imageLoaded(hero_image),
            this.imageLoaded(author_image)
        ])
    }

    loadGridImages(data) {
        const load_promies = data.map((image) => {
            const img = new Image();
            img.src = image.images.thumbnail;
            return new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
            });
        });
        return Promise.all(load_promies);
    }

    imageLoaded(img) {
        return new Promise((resolve, reject) => {
            img.onload = () => resolve(img);
            img.onerror = reject;
        })
    }
}
