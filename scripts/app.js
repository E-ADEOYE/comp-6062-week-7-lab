let element = document.querySelector("#inputFieldForNumber");
element.addEventListener("input", function(){
if(element.value > 10 || element.value < -10){
    alert("Above limit!");
}});
console.log(element);


const fruit = {
    name: 'Watermelon',
    color: 'Green',
    Taste: 'Delicious',

}
let fruitName = document.querySelector("#fruitName");
fruitName.innerHTML = fruit.name;
let fruitColor = document.querySelector("#fruitColor");
fruitColor.innerHTML = fruit.color;
let fruitTaste = document.querySelector("#fruitTaste");
fruitTaste.innerHTML = fruit.Taste;
 