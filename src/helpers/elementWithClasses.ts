export const elementWithClasses = (item:string, classes:string[]) => {
    const element = document.createElement(item);
    element.classList.add(...classes);
    return element
}
