let searchButton = document.querySelector('#search');

searchButton.addEventListener("click", (e) => {
    e.preventDefault();

    let API_KEY = "Th4D5jWS29DA0Su7R7CWWXeqNGR24LkhteYzvq1C";
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`).then((response) => {
        return response.json()
    }).then((data) => {    
       const cardDeck = document.getElementById('card-deck');
        for (let i = 0; i < 10; i++) {  
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.classList.add('card-img-top');
            image.src = data["photos"][i]["img_src"];

            card.appendChild(image);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            // const title = document.createElement('h5');
            // title.classList.add('card-title');


            // cardBody.appendChild(title);

            // const description = document.createElement('p');
            // description.classList.add('card-text');

            // cardBody.appendChild(description);

            card.appendChild(cardBody);

            cardDeck.appendChild(card);
        }
    });

})
