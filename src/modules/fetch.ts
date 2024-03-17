import { createEachProductCard } from "./display.ts"

const productSection = document.querySelector('#productSection')
const topText = document.querySelector('#top-text') as HTMLDivElement;

const header = {
    "Content-type": "application/json; charset=UTF-8"
}

const options = {
    method: "GET",
    headers: header
}

type Product = {
    images: string[],
    title: string,
    description: string,
    rating: number,
    stock: number,
    category: string
};

function getAllProductsFetch() {
    const userInput = document.querySelector("#textInput") as HTMLInputElement;
    const userInputValue = userInput.value;
    const productUrl: string = `https://dummyjson.com/products/search?q=${userInputValue}`;

    fetch(productUrl, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('HTTP error')
            }
        })
        .then(data => {
            if (productSection) {
                createEachProductCard(data.products)
            }

        })
};

export { getAllProductsFetch };
export { Product }