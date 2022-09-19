
import { Link } from './components/Link.js';
import createAllLinks from './components/renderLinks.js';

document.getElementById('entertainment').classList.add('underline');
let links = [];

const main = document.querySelector('#main-container');
const drawLinks = createAllLinks(main);

async function onPageLoad() {
    links = await Link.entertainment;
    drawLinks({ links });
}



onPageLoad();