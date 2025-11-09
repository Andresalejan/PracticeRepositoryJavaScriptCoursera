let grocery1, grocery2, grocery3;

function groceryTracker() {
    //Get value of each grocery item
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);
    //Calculate area
    let groceryTotal = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerText = `The total amount is: ${groceryTotal}`;
}