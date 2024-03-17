import { getAllProductsFetch } from "./modules/fetch.ts";

const form = document.querySelector('#searchForm') as HTMLFormElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    getAllProductsFetch();

    form.reset();
})

getAllProductsFetch();



