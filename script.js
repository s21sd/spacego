let searchButton = document.querySelector('#search')
let my = document.querySelector('.my');
searchButton.addEventListener("click", (e) => {

    sendApiReq();
    e.preventDefault();
})

async function sendApiReq() {
    let API_KEY = "Th4D5jWS29DA0Su7R7CWWXeqNGR24LkhteYzvq1C";
    let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    // console.log(response);

    let data = await response.json(); // changing to the json object
    // console.log(data);
    userApidata(data)
}

function userApidata(data) {

    document.querySelector(".explanation").innerHTML += data.explanation
    document.querySelector("#content").src = data.url;
   
    // document.querySelector("#content").innerHTML+=data.date



}