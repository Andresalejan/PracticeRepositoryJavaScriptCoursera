let length;
let width;

function calculateArea() {
    //Get length and width
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    //Calculate area
    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}