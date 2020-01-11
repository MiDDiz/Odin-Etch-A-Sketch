const divWrapper = document.getElementById("wrapper");

const numDivs = 64;
let arrayDivs = [];

//Shitty fix, may break something later on
let breakpoint = 0;

for (let i = 0; i < numDivs; i++) {
    arrayDivs[i] = document.createElement("div");
}

let sizeBreakpoint = Math.round(Math.sqrt(arrayDivs.length));

arrayDivs.forEach(element => {

    if(breakpoint === sizeBreakpoint)
    {
        breakpoint = 0; 
        divWrapper.append(document.createElement("br"));
    } 
    breakpoint++;
    element.classList.add("grid");
    divWrapper.appendChild(element);
    
});