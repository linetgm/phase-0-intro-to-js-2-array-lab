// Write your solution here

const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Tom){
    cats.push(Tom);
    return cats;
}
function destructivelyPrependCat(Tom){
    cats.unshift(Tom);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(name){
    const newArray = cats.slice();
    newArray.push(name);
    return newArray;
}
function prependCat(name){
    const newArray = cats.slice();
    newArray.unshift(name);
    return newArray;
}
function removeLastCat(name){
    const newArray = cats.slice();
    newArray.pop(name);
    return newArray;
}
function removeFirstCat(name){
    const newArray = cats.slice();
    newArray.shift(name)
    return newArray;
}



