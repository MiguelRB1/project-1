/* <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>; */
// var submitButton = document.getElementById('submit');
// submitButton.addEventListener("click", function(event){
//     event.preventDefault()
//     console.log(event)
//     document.querySelector("body").style.backgroundColor = "green";
// })


var submitButton = document.getElementById('submit');
submitButton.addEventListener("mouseenter", function(event){
    event.preventDefault()
    console.log(event)
    document.querySelector("body").style.backgroundColor = "pink";
})


submitButton.addEventListener("mouseleave", function(event){
    event.preventDefault()
    console.log(event)
    document.querySelector("body").style.backgroundColor = "blue";
})