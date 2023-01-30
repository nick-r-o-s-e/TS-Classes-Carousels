import { elementWithClasses } from "../helpers/elementWithClasses";

export const createPreviews = (id: string, images: string[]) => {
  const previewsDiv = elementWithClasses("div", [
    "carousel-indicators",
    "previews",
  ]);

  for (let i = 0; i < images.length; i++) {
    const btn = elementWithClasses("button", ["preview-btn"]);
    if (i == 0) {
      btn.classList.add("active");
      btn.setAttribute("aria-current", "true");
    }
    btn.setAttribute("data-mdb-target", `#${id}`);
    btn.setAttribute("data-mdb-slide-to", String(i));
    btn.setAttribute("aria-label", `Slide ${i + 1}`);
    previewsDiv.appendChild(btn);

    const image = elementWithClasses("img", [
      "d-block",
      "w-100",
      "shadow-1-strong",
      "rounded",
      "img-fluid",
    ]);
    image.setAttribute("src", images[i]);
    btn.appendChild(image);
  }

  return previewsDiv;
};
