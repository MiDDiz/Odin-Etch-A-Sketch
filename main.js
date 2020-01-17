const divWrapper = document.getElementById("wrapper");
const btnReset = document.querySelector("button");


//Defaut setted. Then get by prompt with btnReset
let numDivs = 64;
let arrayDivs = [];

/*
    MANAGING GRID CREATION AND HOVERING
*/


//Shitty fix, might break something later on
let breakpoint = 0;
let desiredSize;

function init(num){
    breakpoint = 0;
    arrayDivs = []
    //Append divs to an array
    for (let i = 0; i < num; i++) 
    {
        arrayDivs[i] = document.createElement("div");
    }
    /*
        Generates the necesary blocks needed to be set onto a row to make a square grid. 
        
        Silly mistake I made was understanding the assignment told you a number of grid elementes 
        and you had to calculate how many needed to go to a single row/column...
    */
    rowElements = Math.round(Math.sqrt(arrayDivs.length));
}


function getSize(){
    desiredSize = Math.trunc(1000/rowElements);
}

function createGrid(){
    // For each element add class grid. If our element is the "sizebreakpoint"-th set a <br> element to generate a new row 


    arrayDivs.forEach(element => {    

        if(breakpoint === rowElements)
        {
            breakpoint = 0; 
            divWrapper.append(document.createElement("br"));
        } 
        breakpoint++;
        //Styling
        element.classList.add("grid");
        element.style.width=desiredSize+"px";
        element.style.height=desiredSize+"px";
        //Event for hovering
        element.addEventListener("mouseenter", () =>{
            element.classList.add("hovered");
        });
        //Appends the edited child
        divWrapper.appendChild(element);
        
    });
}
init(numDivs);
getSize();
createGrid();

/*
    MANAGING BUTTON
*/

function removeChilds()
{
    //Discuraged method. If I have time i should work better on this.
    divWrapper.innerHTML="";
}

btnReset.addEventListener("click", () =>{
    removeChilds();
    init(Math.pow(prompt("Introduce the number of squares pero row you want"),2));
    getSize();
    createGrid();
});