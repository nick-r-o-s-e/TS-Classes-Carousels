import CarouselIndicated from "./carousel-indicated";
import { createPreviews } from "../carousel-elements/previews";

export default class CarouselPreviews extends CarouselIndicated {
  constructor(id: string) {
    super(id);
    this.addPreviews();
    this.activePreviewListener();
  }

  addPreviews() {
    this.carouselDiv.classList.add("previews-carousel");
    this.indicatorsDiv.appendChild(createPreviews(this.id, this.images));
  }

  changeActiveIndicator(e: Event, eventName: string) {
    const thumbnails = Array.from(
      (e.target as HTMLElement).querySelectorAll(".indicator-btn")
    );
    const index = thumbnails.findIndex((dot) =>
      dot.classList.value.split(" ").includes("active")
    );

    const targetThumbnail = (e.target as HTMLElement)
      .querySelector(".previews")
      .querySelectorAll("button")[index];

    if (eventName == "slide.bs.carousel") {
      targetThumbnail.classList.remove("active");
    } else {
      targetThumbnail.classList.add("active");
    }
  }

  activePreviewListener() {
    ["slide.bs.carousel", "slid.bs.carousel"].forEach((eventName) => {
      this.carouselDiv.addEventListener(eventName, (e) => {
        this.changeActiveIndicator(e, eventName);
      });
    });
  }
}
