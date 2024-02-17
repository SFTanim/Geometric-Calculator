// Triangle Card
function triangleCard(){
    // triangle-b input
    const b = valueForCalculation('triangle-b');

    // triangle-p input
    const p = valueForCalculation('triangle-p');

    // triangle area
    let area = 0.5*b*p;
    
    // Output Result
    areaValuePrint(area, 'Triangle');
    
}

// Rectangle Card
function recCard(){
    // triangle-b input
    const W = valueForCalculation('rec-w');

    // triangle-p input
    const I = valueForCalculation('rec-i');
    
    // triangle area
    let area = W*I;
    
    // Output Result
    areaValuePrint(area, 'Rectangle');
}

// Parallelogram Card
function pellCard(){
    // Parallelogram- input
    const B = valueForCalculation('pell-b');

    // Parallelogram- input
    const H = valueForCalculation('pell-h');
    
    // area
    let area = B*H;
    
    // Output Result
    areaValuePrint(area, 'Parallelogram');
}
 
// Rhombus Card
function romCard(){
    const d1 = valueForCalculation('rom-d1');
    const d2 = valueForCalculation('rom-d2');
    let area = 0.5*d1*d2;
    areaValuePrint(area, 'Rhombus');
}

// Pentagon Card
function penCard(){
    const p = valueForCalculation('pen-p');
    const b = valueForCalculation('pen-b');
    let area = 0.5*p*b;
    areaValuePrint(area, 'Pentagon');
}

// Ellipse Card
function ellCard(){
    const a = valueForCalculation('ell-a');
    const b = valueForCalculation('ell-b');
    let area = 3.1416*a*b;
    areaValuePrint(area, 'Ellipse');
}






function valueForCalculation(inputIdOfInputValur){
    const inputValue = document.getElementById(inputIdOfInputValur);
    const intValue = inputValue.value;
    const lastValue = parseFloat(intValue);
    return lastValue
}

function areaValuePrint(areaValue, cardName){
    let resultOutput = document.getElementById('result-output');
    let pNew = document.createElement('p');
    pNew.innerHTML= `
    <p class="text-xl">
    ${cardName} Area: ${areaValue}cm<sup>2</sup>
    </p>
    `
    resultOutput.appendChild(pNew);
}