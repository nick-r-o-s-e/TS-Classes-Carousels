import { elementWithClasses } from "../helpers/elementWithClasses";

export const createCarouselBase = (id: string, imagesUrls: string[]) => {
  const carouselDiv = elementWithClasses("div", [
    "col-12",
    "col-lg-6",
    "carousel",
    "slide",
  ]);
  carouselDiv.id = id;

  const carouselInner = elementWithClasses("div", [
    "carousel-inner",
    "shadow-1-strong",
    "rounded-3",
  ]);
  carouselDiv.appendChild(carouselInner);

  imagesUrls.forEach((url, index) => {
    const imgDiv = elementWithClasses("div", ["carousel-item"]);
    if (index == 0) {
      imgDiv.classList.add("active");
    }
    const image = elementWithClasses("img", ["d-block", "w-100"]);
    image.setAttribute("src", url);
    imgDiv.appendChild(image);
    carouselInner.appendChild(imgDiv);
  });

  ////CONTROLS////
  for (let i = 0; i < 2; i++) {
    const role = i == 0 ? "prev" : "next";
    const btn = elementWithClasses("button", [`carousel-control-${role}`]);
    btn.setAttribute("type", "button");
    btn.setAttribute("data-mdb-target", `#${id}`);
    btn.setAttribute("data-mdb-slide", role);
    carouselDiv.appendChild(btn);

    for (let i = 0; i < 2; i++) {
      const spanClass =
        i == 0 ? `carousel-control-${role}-icon` : "visually-hidden";
      const span = elementWithClasses("span", [spanClass, "control"]);
      span.setAttribute("aria-hidden", "true");
      if (i == 1) {
        span.innerHTML = role == "prev" ? "Previous" : "Next";
      }
      btn.appendChild(span);
    }
  }

  return carouselDiv;
};
