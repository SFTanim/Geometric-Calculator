// Triangle Card
function triangleCard(){
    // triangle-b input
    const triangleB = document.getElementById('triangle-b');
    const b = parseFloat(triangleB.value)

    // triangle-p input
    const triangleP = document.getElementById('triangle-p');
    const p = parseFloat(triangleP.value)
    
    // triangle area
    let areaOfTraingle = 0.5*b*p;
    
    // Output Result
    let resultOutput = document.getElementById('result-output');
    let pNew = document.createElement('p');
    pNew.innerHTML= `<p class="text-xl">Triangle Area: ${areaOfTraingle}cm<sup>2</sup></p>`
    resultOutput.appendChild(pNew);
    
}

// Rectangle Card
function recCard(){
    // triangle-b input
    const recW = document.getElementById('rec-w');
    const W = parseFloat(recW.value)

    // triangle-p input
    const recI = document.getElementById('rec-i');
    const I = parseFloat(recI.value)
    
    // triangle area
    let areaOfRec = W*I;
    
    // Output Result
    let resultOutput = document.getElementById('result-output');
    let pNew = document.createElement('p');
    pNew.innerHTML= `
    <p class="text-xl">
    Rectangle Area: ${areaOfRec}cm<sup>2</sup>
    </p>
    `
    resultOutput.appendChild(pNew);
}

// Parallelogram Card
function pellCard(){
    // Parallelogram- input
    const pellB = document.getElementById('pell-b');
    const B = parseFloat(pellB.value)

    // Parallelogram- input
    const pellH = document.getElementById('pell-h');
    const H = parseFloat(pellH.value)
    
    // area
    let area = B*H;
    
    // Output Result
    let resultOutput = document.getElementById('result-output');
    let pNew = document.createElement('p');
    pNew.innerHTML= `
    <p class="text-xl">
    Parallelogram Area: ${area}cm<sup>2</sup>
    </p>
    `
    resultOutput.appendChild(pNew);
}
 
// Rhombus Card
function romCard(){
    const romD1 = document.getElementById('rom-d1');
    const d1 = parseFloat(romD1.value)

    const romD2 = document.getElementById('rom-d2');
    const d2 = parseFloat(romD2.value)
    
    let area = 0.5*d1*d2;
    
    let resultOutput = document.getElementById('result-output');
    let pNew = document.createElement('p');
    pNew.innerHTML= `
    <p class="text-xl">
    Rhombus Area: ${area}cm<sup>2</sup>
    </p>
    `
    resultOutput.appendChild(pNew);
}

// Pentagon Card
function penCard(){
    const penP = document.getElementById('pen-p');
    const p = parseFloat(penP.value)

    const penB = document.getElementById('pen-b');
    const b = parseFloat(penB.value)
    
    let area = 0.5*p*b;
    
    let resultOutput = document.getElementById('result-output');
    let pNew = document.createElement('p');
    pNew.innerHTML= `
    <p class="text-xl">
    Pentagon Area: ${area}cm<sup>2</sup>
    </p>
    `
    resultOutput.appendChild(pNew);
}

// Ellipse Card
function ellCard(){
    const ellA = document.getElementById('ell-a');
    const a = parseFloat(ellA.value)

    const ellB = document.getElementById('ell-b');
    const b = parseFloat(ellB.value)
    
    let area = a*b;
    
    let resultOutput = document.getElementById('result-output');
    let pNew = document.createElement('p');
    pNew.innerHTML= `
    <p class="text-xl">
    Ellipse Area: ${area}cm<sup>2</sup>
    </p>
    `
    resultOutput.appendChild(pNew);
}