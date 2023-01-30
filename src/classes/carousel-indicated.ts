import Carousel from "./carousel";
import { createIndicators } from "../carousel-elements/indicators";

export default class CarouselIndicated extends Carousel {
  indicatorsDiv: HTMLDivElement;

  constructor(id: string) {
    super(id);
    this.addIndicaters();
    this.indicatorsDiv = this.carouselDiv.querySelector(".carousel-indicators");
  }

  addIndicaters() {
    this.carouselDiv.appendChild(createIndicators(this.id, this.images.length));
  }
}
