import { createCarouselBase } from "../carousel-elements/baseCarouselElement";

export default class Carousel {
  images: string[];
  id: string;
  carouselDiv: HTMLDivElement;
  indicatorsDiv: HTMLDivElement;
  carouselInner:HTMLDivElement;

  constructor(id: string) {
    this.images = [
      "assets/images/image-1.jpg",
      "assets/images/image-2.jpg",
      "assets/images/image-3.jpg",
      "assets/images/image-4.jpg",
      "assets/images/image-5.jpg",
    ];

    this.id = id;
    this.createCarousel();
    this.carouselDiv = document.querySelector(`#${id}`);
    this.carouselInner = this.carouselDiv.querySelector(".carousel-inner")
  }

  createCarousel() {
    document
      .querySelector(".row")
      .appendChild(createCarouselBase(this.id, this.images));
  }
}
