
import { Link } from '../components/Link.js';
import createAllLinks from '../components/renderLinks.js';

document.getElementById('tools').classList.add('underline');
let links = [];

const main = document.querySelector('#main-container');
const drawLinks = createAllLinks(main);

async function onPageLoad() {
    links = await Link.tools;
    drawLinks({ links });
}



onPageLoad();