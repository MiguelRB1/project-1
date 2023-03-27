api_id_nutrition = '12b008ad';
app_key_nutrition = 'd5e1c45fe92fe6ff4bfa429206a54311';

api_id_calculate = '63e18821';
app_key_calculate = '834af81f9aa84aa05cecc3d1497f0065';

function opensection(section){
    btn1 = document.getElementById("nutritionanalysisbtn");
    btn2 = document.getElementById("nutritioncalculatorbtn");

    btn1.style.display = "none";
    btn2.style.display = "none";

    if(section == 1){
        btn1.style.display = "block";
    }else if(section == 2){
        btn2.style.display = "block";
    }

    modal = document.getElementById("modalDiv");
    modal.style.display = "block";
}

function getNutrition(){
    let food = document.getElementById("foodname").value;
    let formatedfood = food.replace(/ /g, '%20');

    fat_value =  document.getElementById("fatid")
    cholestral_value =  document.getElementById("cholestralid")
    cabs_value =  document.getElementById("cabsid")
    cal_value =  document.getElementById("caloriesid")
    protein_value =  document.getElementById("proteinsid")
    calcium_value =  document.getElementById("calciumid")
    potasium_value =  document.getElementById("potasiumid")
    tableBody =  document.getElementById("tableBody")
    foodname =  document.getElementById("foodnametop")


    fetch("https://api.edamam.com/api/nutrition-data?app_id=" + api_id_nutrition + "&app_key="+ app_key_nutrition +"&nutrition-type=cooking&ingr="+ formatedfood)
    .then((response) => response.json())
    .then(function(data){
        
        calories = Math.round(data.totalNutrients.ENERC_KCAL.quantity);
        fats = Math.round(data.totalNutrients.FAT.quantity);
        cabs = Math.round(data.totalNutrients.CHOCDF.quantity);
        Proteins = Math.round(data.totalNutrients.PROCNT.quantity);
        cholestral = Math.round(data.totalNutrients.CHOLE.quantity);
        Calcium = Math.round(data.totalNutrients.CA.quantity);
        Potasium = Math.round(data.totalNutrients.K.quantity);
        foodName = data.ingredients[0].parsed[0].food;

        foodQuantity = data.ingredients[0].parsed[0].quantity;
        foodUnit = data.ingredients[0].parsed[0].measure;
        foodType = data.ingredients[0].parsed[0].food;
        foodWeight = data.ingredients[0].parsed[0].weight;
        
        // newRow = "<tr><td>" + foodQuantity +"</td><td>"+ foodUnit +"</td><td>"+ foodType +"</td><td>" + calories + "</td><td>"+ foodWeight +"</td></tr>"
        // tableBody.append(newRow); 

        cal_value.innerText = calories;
        fat_value.innerText = fats;
        cholestral_value.innerText = cholestral;
        cabs_value.innerText = cabs;
        protein_value.innerText = Proteins;
        calcium_value.innerText = Calcium;
        potasium_value.innerText = Potasium;
        foodname.innerText = foodName;
        

    });
}


function calculateNutrition(){
    let food = document.getElementById("foodname").value;
    let formatedfood = food.replace(/ /g, '%20');
    let foodlist = document.getElementById("foodCalcDetails")

    fetch("https://api.edamam.com/api/food-database/v2/parser?app_id="+ api_id_calculate +"&app_key="+ app_key_calculate +"&ingr="+ formatedfood +"&nutrition-type=cooking")
    .then((response) => response.json())
    .then(function(data){
        arrayName = data.parsed
        foodDetails = [];
        for(i = 0; i < arrayName.length; i++){
            foodName = data.parsed[i].food.label;
            foodEnergy = Math.round(data.parsed[i].food.nutrients.ENERC_KCAL);
            foodCabs = Math.round(data.parsed[i].food.nutrients.CHOCDF);
            foodFats = Math.round(data.parsed[i].food.nutrients.FAT);
            foodProteins = Math.round(data.parsed[i].food.nutrients.PROCNT);

            // console.log(foodProteins);

            foodDetails += "<li><button>Qty : 1</button><button>Food : "+ foodName +"</button> <div><p>Energy: "+ foodEnergy +" kcal</p><p>Protein: "+ foodProteins +" g</p><p>Fat: "+ foodFats +" g</p><p>Carbs: "+ foodFats +" g</p></div></li>"
        }
        foodlist.innerHTML = foodDetails;
    })
}


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

// fetch("https://api.edamam.com/doc/open-api/food-db-v2.json")
// .then((response) => response.json())
// .then((data) => console.log(data));
// fetch("https://api.edamam.com/doc/open-api/nutrition-analysis-v1.json")
// .then((response) => response.json())
// .then((data) => console.log(data));
// fetch("https://api.edamam.com/doc/open-api/recipe-search-v2.json")
// .then((response) => response.json())
// .then((data) => console.log(data));