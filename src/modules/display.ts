import { createAndAppend } from "./createAndAppend.ts";
import { Product } from "./fetch.ts";


function createEachProductCard(products: Product[]) {
    const productSection = document.querySelector('#productSection') as HTMLDivElement;
    productSection.innerHTML = ' ';

    for (const product of products) {

        const eachProductCard = document.createElement('div');
        eachProductCard.classList.add('eachProductCard')
        productSection.append(eachProductCard)

        createAndAppend(eachProductCard, 'img', product.images[0])
        createAndAppend(eachProductCard, 'h2', product.title);
        createAndAppend(eachProductCard, "p", "rated: " + product.rating.toString());
        if (product.stock < 10) {
            createAndAppend(eachProductCard, 'p', product.stock.toString() + " in stock. ONLY A FEW LEFT!!!");
        } else {
            createAndAppend(eachProductCard, 'p', product.stock.toString() + " in stock");
        }
        createAndAppend(eachProductCard, 'p', "Category: " + product.category)

        const descriptionText = createAndAppend(eachProductCard, "p", product.description);
        descriptionText.classList.add('descriptionText')

        const buttonDiv = document.createElement('div')
        buttonDiv.classList.add('addToCartButtonDiv')
        eachProductCard.append(buttonDiv)
        createAndAppend(buttonDiv, 'button', 'Add to cart')
    }
}

export { createEachProductCard }

