function about() {
    const content = document.querySelector("div#content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    content.textContent = 'About Page';
}

export { about };