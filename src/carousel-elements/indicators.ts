import { elementWithClasses } from "../helpers/elementWithClasses";

export const createIndicators = (id: string, count: number) => {
  const indicatorsDiv = elementWithClasses("div", ["carousel-indicators"]);

  for (let i = 0; i < count; i++) {
    const btn = elementWithClasses("button", ["indicator-btn"]);
    if (i == 0) {
      btn.classList.add("active");
      btn.setAttribute("aria-current", "true");
    }
    btn.setAttribute("type", "button");
    btn.setAttribute("data-mdb-target", `#${id}`);
    btn.setAttribute("data-mdb-slide-to", String(i));
    btn.setAttribute("aria-label", `Slide ${i + 1}`);
    indicatorsDiv.appendChild(btn);
  }

  return indicatorsDiv;
};
