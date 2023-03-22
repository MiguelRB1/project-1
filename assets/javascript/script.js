fetch("https://api.edamam.com/doc/open-api/food-db-v2.json")
.then((response) => response.json())
.then((data) => console.log(data));
fetch("https://api.edamam.com/doc/open-api/nutrition-analysis-v1.json")
.then((response) => response.json())
.then((data) => console.log(data));
fetch("https://api.edamam.com/doc/open-api/recipe-search-v2.json")
.then((response) => response.json())
.then((data) => console.log(data));