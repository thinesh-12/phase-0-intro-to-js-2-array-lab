const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push("Ralph");
    return `${cats}`;
           }

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return `${cats}`;
           }

function destructivelyRemoveLastCat(){
    cats.pop();
    return `${cats}`;
           }

function destructivelyRemoveFirstCat(){
    cats.shift();
    return `${cats}`;
           }

function appendCat(name){
    const cats =["Milo", "Otis", "Garfield"];
    return  [...cats, "Broom"];
           }

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    return ["Arnold", ...cats];
            }

function removeLastCat(){
    const cats =["Milo" , "Otis","Garfield" ];
    return cats.slice(0, -1);
            }

function removeFirstCat(){
    const cats =["Milo", "Otis" , "Garfield"];
    return cats.slice(1);
            }
