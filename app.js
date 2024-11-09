// api -> internet der bdg tsanasa belen tusgai datag pcd holbodog tool, uusgej boln
// fetch(link/url) -> api holboh function
//.then() -> promise / hariu ugn
// status => 200 approved (other numbers mean not approved)
// .json() => zambaraagu datag boginosgoh
fetch('https://fakestoreapi.com/products').then(
    response => response.json()
).then(
    data => {
        console.log(data[0]);
        console.log(data[data.length-1].rating.rate);
    }
);
fetch('https://fakestoreapi.com/users').then(
    response => response.json()
).then(
    data => {
        console.log(data);
        for(key in data){
            console.log(data[key].name.firstname);
        }
    }
);


const name = document.querySelector('.name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const wind = document.querySelector('.wind');
const addBtn = document.getElementsByTagName('button')[0];
const search = document.getElementsByTagName('input')[0];
const img = document.getElementsByTagName('img')[0];

addBtn.addEventListener('click', ()=>{
    let city = search.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
        response => response.json()
    ).then(
        data => {
            console.log(data.name);
            console.log(data.main.temp);
            console.log(data.weather[0].main);
            console.log(data.wind.speed);
    name.innerText="name: "+data.name;
    temp.innerText="temperature: "+data.main.temp+"°C";
    desc.innerText="description: "+data.weather[0].description;
    wind.innerText="wind speed: "+data.wind.speed+"m/s";
    img.style.width = "35%";
    
    if(data.weather[0].main=="Clouds"){
        img.src="cloud.jpg";
    }else if(data.weather[0].main=="Rain"){
        img.src="rain.jpg";
    }else if(data.weather[0].main=="Clear"){
        img.src="sun.jpg";
    }else if(data.weather[0].main=="Snow"){
        img.src="snow.jpg";
        }else if(search.value=="sfsdfdsf"){
            alert("you need to enter any country name that exists");
        }
    }
    );
});


