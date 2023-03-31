const urlData = "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json";
let data = [];
let setData = {
    color: [
        {
            background: '#ffa500',
        },
        {
            background: '#00c3ff'
        },
        {
            background: '#ff0055'
        },
        {
            background: '#00ff37'
        },
        {
            background: '#a200ff'
        },
        {
            background: '#ffe600'
        }
    ]
}

async function getData(time) {
    try {
        const response = await fetch(urlData);
        data = await response.json();

        let gridId = 'sectionRight';
        document.getElementById(gridId) ? document.getElementById(gridId).remove() : null;

        const layout = document.getElementById('gridCardsContainer')
        
        const newLayout = document.createElement("section");
        newLayout.setAttribute("id", "sectionRight");
        newLayout.setAttribute("class", "grid-cards-right");
        layout.appendChild(newLayout);

        for (let i = 1; i <= 6; i++) {
            const newCard = document.createElement("section");
            newCard.setAttribute("id", `card${i}`);
            newCard.setAttribute("class", "card");

            const card = document.createElement("section");
            card.setAttribute("id", `card${i}Content`);
            card.setAttribute("class", "card-content");

            const cardTop = document.createElement("section");
            cardTop.setAttribute("id", `card${i}Top`);
            cardTop.setAttribute("class", "grid-card-top");

            const title = document.createElement("p");
            title.setAttribute("id", `card${i}Title`);
            title.setAttribute("class", "align-left");
            title.textContent = data[i-1].title;

            const points = document.createElement("p");
            points.setAttribute("id", `card${i}ThreePoints`);
            points.setAttribute("class", "align-right");
            points.textContent = '...';

            cardTop.appendChild(title);
            cardTop.appendChild(points);

            const currentTime = document.createElement("h2");
            currentTime.setAttribute("id", `card${i}Time`);
            currentTime.setAttribute("class", "card-hour align-left");
            currentTime.textContent = `${data[i-1].timeframes[time].current}hrs`;

            const prevTime = document.createElement("h2");
            prevTime.setAttribute("id", `card${i}LastTime`);
            prevTime.setAttribute("class", "card-last-time align-left");
            prevTime.textContent = `Last register - ${data[i-1].timeframes[time].previous}hrs`;

            card.appendChild(cardTop);
            card.appendChild(currentTime);
            card.appendChild(prevTime);

            newCard.style.backgroundColor = setData.color[i - 1].background;
            newCard.appendChild(card);
            newLayout.appendChild(newCard);
        }
        console.log(data);

    } catch ( error ) {
        console.log(error);
    }
}

async function updateData(time) {
    
    const cards = document.getElementById('sectionRight');

    const childrens = cards.children;

    Object.entries(childrens).forEach((element, index ) => {
        const child = element['1'].children;
        console.log(child[0]);
        child[0].children[1].textContent = `${data[index].timeframes[time].current}hrs`;
        child[0].children[2].textContent = `Last register - ${data[index].timeframes[time].previous}hrs`;
    });
}

// Initialize project
(async () => {
    await getData('daily');
})();