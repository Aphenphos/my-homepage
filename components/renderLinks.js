export function renderLink(l) {
    const a = document.createElement('a');
    a.classList.add('container');
    a.href = l.link;
    a.id = l.name;
    a.innerHTML = l.text;
    if (l.img === null) {
        l.img = 'default.png';
    }
    if (l.category === 'entertainment') {
        a.style.backgroundImage = `url(./assets/${l.img});`;
    } else {
        a.style.backgroundImage = `url(../assets/${l.img})`;
    }



    return a;
}

export default function createAllLinks(root) {
    return ({ links }) => {
        root.innerHTML = '';

        for (const l of links) {
            const li = renderLink(l);
            root.append(li);
        }
    };
}