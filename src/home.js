function home() {
    const content = document.querySelector("div#content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    content.appendChild(addHighlights());
    content.appendChild(belowFold());
}


function addHighlights() {
    const aboveFold = document.createElement("div");
    aboveFold.classList.add("aboveFold");
    

    const h1 = document.createElement("h1");
    h1.textContent = "Simplicity Inspired By Discovery";
    aboveFold.appendChild(h1); 

    const recognition = document.createElement("div");
    const recs = [
        "4 AA Rosettes 2024",
        "Michelin Star 2024",
        "Harden's UK Top 100 2024"
    ];

    for (let i = 0; i < recs.length; i++) {
        const recognitionDiv = document.createElement("div");
        recognitionDiv.textContent = recs[i];

        recognition.appendChild(recognitionDiv);
    }

    aboveFold.appendChild(recognition);
    return aboveFold;
}

function belowFold() {
    const belowFold = document.createElement("div");
    belowFold.classList.add("belowFold");

    const belowFoldContent = document.createElement("div");
    belowFoldContent.classList.add("belowFoldContent");

    const h2 = document.createElement("h2");
    h2.textContent = "In the kitchen, we aim to constantly develop our ideas, inspired by the best produce on offer"

    belowFoldContent.appendChild(h2);

    const philosophy = document.createElement("p");
    philosophy.textContent = "We believe passionately in our open kitchen philosophy. \
        This means we share our ideas, our creative process and of course our cooking \
        with our guests, and with talented chefs. We look forward to welcoming you.";
    philosophy.classList.add("philosophy");

    belowFoldContent.appendChild(philosophy);

    belowFold.appendChild(belowFoldContent);

    return belowFold;
}

export { home };