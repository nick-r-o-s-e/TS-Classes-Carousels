import { elementWithClasses } from "../helpers/elementWithClasses";

export const createExpandingBtn = (id: string) => {
  const btn = elementWithClasses("button", ["expanding-btn"]);

  btn.appendChild(elementWithClasses("i", ["fa-solid", "fa-expand"]));

  return btn;
};
