fetch("https://api.edamam.com/doc/open-api/food-db-v2.json")
.then((response) => response.json())
.then((data) => console.log(data));
fetch("https://api.edamam.com/doc/open-api/nutrition-analysis-v1.json")
.then((response) => response.json())
.then((data) => console.log(data));
fetch("https://api.edamam.com/doc/open-api/recipe-search-v2.json")
.then((response) => response.json())
.then((data) => console.log(data));

// var apiKey = "2794cb08156d826b4ac211de1b4d6648";
// var nutan = document.getElementById("nutan");
// var nutcal= document.getElementById("nutcal");
// var recipe = document.getElementById("recipe");

// function getInformation(nutan) {
//     fetch("https://api.edamam.com/doc/open-api/nutrition-analysis-v1.json" + nutan + "&limit=3&appid=" + apiKey)
//     .then(
//         function (response) {
//             if (response.status !== 200){
//                 console.log("error");
//                 return;
//             }

//             response.json().then(function(data){
//                 if(data.length != 0){
//                     latitude = data[0].lat;
//                     longitude = data[0].lon;
//                     latitude = latitude.toString();
//                     longitude = longitude.toString();

//                     getWeather(latitude, longitude, cityName);
//                     saveCities(cityName);
                    
//                 }
//             })
//         }
//     )
// }