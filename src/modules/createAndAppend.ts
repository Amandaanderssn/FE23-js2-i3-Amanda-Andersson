export function createAndAppend(parent: HTMLDivElement, elementName: string, textContent: string): HTMLElement {

    const element = document.createElement(elementName);
    if (elementName != 'div' && elementName != 'img') element.innerText = textContent;
    else if (isThisElementImg(element)) element.src = textContent;
    element.innerText = textContent;
    parent.append(element);

    return element;
};

function isThisElementImg(element: any): element is HTMLImageElement {
    return (element as HTMLImageElement).src !== undefined;


}