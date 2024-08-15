function menu() {
    const content = document.querySelector("div#content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    content.appendChild(aLaCarte());
    content.appendChild(discovery());
}

function aLaCarte() {
    const aLaCarteDiv = document.createElement("div");
    aLaCarteDiv.classList.add("alacarte","menu-base");

    const container = document.createElement("div");
    container.classList.add("menu-container");

    container.appendChild(makeHeaders([
        "JOURNEY MENU",
        "A LA CARTE"
    ]));

    const starters = [
        {
            name: "Orkney Scallop",
            subtext: [
                "Miso butter, Oscietra caviar, lardo, gem lettuce",
            ]
        },
        {
            name: "Iberico Pork Cheek",
            subtext: [
                "Clam chawanmushi, spring onion, gooseberry"
            ]
        }
    ]

    const mains = [
        {
            name: "Turbot",
            subtext: [
                "Cep, hispi cabbage, oyster, lemon thyme"
            ]
        },
        {
            name: "Cornish Lamb",
            subtext: [
                "Olive and Juniper, courgette, basil"
            ]
        }
    ]

    const cheese = [
        {
            name: "Baron Bigod",
            subtext: [
                "Dried apricot, IPA, astina cress, amaretti, Roscoff onion",
                "(supplement £15)"
            ]
        }
    ]

    const desserts = [
        {
            name: "Marquis",
            subtext: [
                "70% Guanaja, olive oil, salt, pistachio, Drambuie"
            ]
        },
        {
            name: "Tulameen Raspberries",
            subtext: [
                "Beetroot, calamansi lemon, raspberry snow"
            ]
        }
    ]

    const miniatures = [
        {
            name: "Miniatures",
            subtext: [
                "Hay, dark chocolate, malt",
                "Saffron and mint",
                "Black fudge"
            ]
        }
    ]

    container.appendChild(makeCourse("STARTERS", starters, true));
    container.appendChild(makeCourse("MAIN COURSE", mains, true));
    container.appendChild(makeCourse("CHEESE", cheese, false));
    container.appendChild(makeCourse("DESSERT", desserts, true));
    container.appendChild(makeCourse("", miniatures, false));

    container.appendChild(makeFooters(85));

    aLaCarteDiv.appendChild(container);
    return aLaCarteDiv
}

function discovery() {
    const discoveryDiv = document.createElement("div");
    discoveryDiv.classList.add("discovery","menu-base");
    
    const container = document.createElement("div");
    container.classList.add("menu-container");

    container.appendChild(makeHeaders([
        "DISCOVERY MENU"
    ]));

    const tasters = [
        {
            name: "Chicken Chantilly",
            subtext: [
                "Vadouvan, quinc, pickled cucumber, shiso leaves"
            ]
        },
        {
            name: "Buckwheat",
            subtext: [
                "24 hour pork, tamarind, smoked cauliflower"
            ]
        }, 
        {
            name: "Pillow",
            subtext: [
                "Cashel Blue, rosewater, tarragon"
            ]
        },
        {
            name: "Dashi Salmon",
            subtext: [
                "Ginger fermented tomato, burnt cream, watercress"
            ]
        },
        {
            name: "Bread",
            subtext: [
                "Steve's homemade 15% rye sourdough, Abernethy butter"
            ]
        },
        {
            name: "Orkney Scallop",
            subtext: [
                "Miso butter, Oscietra caviar, lardo, gem lettuce"
            ]
        },
        {
            name: "Iberico Pork Cheek",
            subtext: [
                "Clam chawanmushi, spring onion, gooseberry"
            ]
        },
        {
            name: "Turbot",
            subtext: [
                "Cep, hispi cabbage, oyster, lemon thyme"
            ]
        },
        {
            name: "Cornish Lamb",
            subtext: [
                "Olive and Juniper, courgette, basil"
            ]
        },
        {
            name: "Baron Bigod",
            subtext: [
                "Dried Apricot, IPA, atsina cress, amaretti, Roscoff onion",
                "(supplement £15)"
            ]
        },
        {
            name: "Strawberry",
            subtext: [
                "Meadowsweet cream, salted shortbread, rocket gel"
            ]
        },
        {
            name: "Tulameen Raspberries",
            subtext: [
                "Beetroot, calamansi lemon, raspberry snow"
            ]
        }
    ]

    const miniatures = [
        {
            name: "Miniatures",
            subtext: [
                "Hay, dark chocoloate, malt",
                "Saffron and mint",
                "Black fudge"
            ]
        }
    ]

    container.appendChild(makeCourse("", tasters, false));
    container.appendChild(makeCourse("", miniatures, false));

    container.appendChild(makeFooters(125));
    
    discoveryDiv.appendChild(container);
    return discoveryDiv;
}

function makeHeaders(headers) {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("menu-headers");

    headers.forEach((headerText) => {
        headerDiv.appendChild(menuH1(headerText));
    });

    return headerDiv;
}

function makeCourse(courseName, items, separator) {
    const courseContainer = document.createElement("div");
    courseContainer.classList.add("courseBox","onMenu");
    if (courseName !== "") {
        courseContainer.appendChild(menuH3(courseName));
        courseContainer.classList.add(convertToCSSClass(courseName));
    } else {
        courseContainer.classList.add("comboCourse");
    }
    for (let i = 0; i < items.length; i++) {
        courseContainer.appendChild(makeMenuItem(items[i].name, items[i].subtext));
        if (i+1 !== items.length && separator) {
            courseContainer.appendChild(menuDescription("or"));
        }
    }
    

    return courseContainer;
}

function makeFooters(price) {
    const footerDiv = document.createElement("div");
    footerDiv.classList.add("menu-footers");

    let priceH = menuH3("£"+price);
    priceH.classList.remove("menuCourseHeader");
    priceH.classList.add("priceHeader");

    footerDiv.appendChild(priceH);
    footerDiv.appendChild(menuDescription("A discretionary service charge of 12.%",true));
    footerDiv.appendChild(menuDescription("will be added to your bill.",true));
    footerDiv.appendChild(menuDescription("Menus are subject to change",true));

    return footerDiv;
    

}

function convertToCSSClass(str) {
    let splitStr = str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
    const finalStr = splitStr.join("");

    return finalStr
}


function makeMenuItem(item, descriptions) {
    const newItem = document.createElement("div");
    newItem.classList.add("menuBlock","onMenu");

    newItem.appendChild(menuItem(item));
    descriptions.forEach((d) => {
        newItem.appendChild(menuDescription(d));
    })

    return newItem;
}


function menuH1(text) {
    const header = document.createElement("h1");
    header.classList.add("onMenu","menuHeader");
    header.textContent = text;

    return header;
}

function menuH3(text) {
    const header = document.createElement("h3");
    header.classList.add("onMenu","menuCourseHeader");
    header.textContent = text;

    return header;
}

function menuItem(text) {
    const item = document.createElement("h5");
    item.classList.add("onMenu","menuItem");
    item.textContent = text;

    return item;
}

function menuDescription(text, footer=false) {
    const description = document.createElement("p");
    description.classList.add("onMenu","menuDescription");
    description.textContent = text;

    if (footer) {
        description.classList.add("footerText");
    }

    return description
}


export { menu };