

// readMe: it is deliberate not using methods, let's have some fun!



const sheepsArray = [
    new Sheep("Anna", "red"),
    new Sheep("Sandy", "black"),
    new Sheep("Nancy", "red"),
    new Sheep("Dolly", "brown"),
    new Sheep("Fluffy", "white"),
    new Sheep("Brandon", "black"),
    new Sheep("Coco", "yellow"),
    new Sheep("Angela", "brown"),
    new Sheep("Snow", "red"), 
    new Sheep("Blanca", "red")
];


function filteredSheeps() {

    let resultDiv = document.getElementById("resultDiv");

    let currentSheep = {};
    let currentSheepName = "";
    let currentSheepLetter;

    let currentSheepColor;

    let filteredSheep;

    let hasA;
    let hasN;

    const filteredSheepsArr = [];

    for (let i = 0 ; i < sheepsArray.length ; i++) {
        currentSheep = sheepsArray[i];
        currentSheepName = currentSheep.getName().toLowerCase();
        currentSheepColor = currentSheep.getColor().toLowerCase();

        hasA = false;
        hasN = false;
        
        for (let j = 0; j < currentSheepName.length ; j++) {
            currentSheepLetter = currentSheepName[j];

            if (currentSheepLetter.toLowerCase() === "a") {
                hasA = true;
            }

            if (currentSheepLetter === "n") {
                hasN = true;
            }

            if (hasA && hasN) {
                break;
            }
        }

        if (currentSheepColor === "red" && hasA && hasN) {
            filteredSheepsArr.push(currentSheep);
        }
    }

    resultDiv.innerHTML = `Sheeps that match:<br>`

    for (let i = 0; i < filteredSheepsArr.length; i++) {
        filteredSheep = filteredSheepsArr[i];
        resultDiv.innerHTML += filteredSheep.toString()

    }

    resultDiv.innerHTML += `Have a goodCodeNight!`;
}




function filteredSheeps() {

    let resultDiv = document.getElementById("resultDiv");

    let currentSheep = {};
    let currentSheepName = "";
    let currentSheepLetter;

    let currentSheepColor;

    let filteredSheep;

    let hasA;
    let hasN;

    const filteredSheepsArr = [];

    for (let i = 0 ; i < sheepsArray.length ; i++) {
        currentSheep = sheepsArray[i];
        currentSheepName = currentSheep.getName().toLowerCase();
        currentSheepColor = currentSheep.getColor().toLowerCase();

        hasA = false;
        hasN = false;
        
        for (let j = 0; j < currentSheepName.length ; j++) {
            currentSheepLetter = currentSheepName[j];

            if (currentSheepLetter.toLowerCase() === "a") {
                hasA = true;
            }

            if (currentSheepLetter === "n") {
                hasN = true;
            }

            if (hasA && hasN) {
                break;
            }
        }

        if (currentSheepColor === "red" && hasA && hasN) {
            filteredSheepsArr.push(currentSheep);
        }
    }

    resultDiv.innerHTML = `Sheeps that match:<br>`

    for (let i = 0; i < filteredSheepsArr.length; i++) {
        filteredSheep = filteredSheepsArr[i];
        resultDiv.innerHTML += filteredSheep.toString()

    }

    resultDiv.innerHTML += `Have a goodCodeNight!`;
}
