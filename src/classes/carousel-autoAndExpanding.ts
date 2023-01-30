// import * as $ from "jquery"

import CarouselPreviews from "./carousel-previews";
import { createExpandingBtn } from "../carousel-elements/expand-btn";
import { elementWithClasses } from "../helpers/elementWithClasses";

export default class CarouselAutoExpanding extends CarouselPreviews {
  constructor(id: string) {
    super(id);
    this.setAutoplay();
    this.addExpandBtn();
  }

  setAutoplay() {
    this.carouselDiv.setAttribute("data-mdb-ride", "carousel");
    this.carouselDiv.setAttribute("data-mdb-interval", "10000");
  }

  stopCarousel() {
    $(() => {
      $(`#${this.id}`).carousel("pause");
    });
  }

  showExpandedIimage(container: HTMLDivElement) {
    container.style.pointerEvents = "none";

    const activeImageSrc = document
      .querySelector(`#${this.id}`)
      .querySelector(".carousel-inner")
      .querySelector(".active")
      .querySelector("img").src;

    const expandedImage = elementWithClasses("img", [
      "expanded-img",
    ]) as HTMLImageElement;
    expandedImage.src = activeImageSrc;

    const expandedDiv = elementWithClasses("div", [
      "expanded-div",
    ]) as HTMLDivElement;
    expandedDiv.appendChild(expandedImage);
    document.querySelector("body").appendChild(expandedDiv);

    expandedDiv.addEventListener("click", () => {
      this.removeExpandedImage(expandedDiv, container);
    });
  }

  removeExpandedImage(
    expandedDiv: HTMLDivElement,
    mainContainer: HTMLDivElement
  ) {
    expandedDiv.remove();
    mainContainer.style.pointerEvents = "auto";
    $(`#${this.id}`).carousel("cycle");
    $(`#${this.id}`).carousel({ pause: "hover" });
  }

  addExpandBtn() {
    const btn = createExpandingBtn(this.id);
    this.carouselDiv.appendChild(btn);

    const mainContainer = document.querySelector(
      ".container"
    ) as HTMLDivElement;

    $(btn).on("click", (e) => {
      this.stopCarousel();
      this.showExpandedIimage(mainContainer);
    });
  }
}


