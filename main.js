const divWrapper = document.getElementById("wrapper");
/*
    MANAGING BUTTON
*/


//To get by prompt
const numDivs = 4096;
let arrayDivs = [];

/*
    MANAGING GRID CREATION AND HOVERING
*/


//Shitty fix, might break something later on
let breakpoint = 0;
let desiredSize;

//Append divs to an array
for (let i = 0; i < numDivs; i++) 
{
    arrayDivs[i] = document.createElement("div");
}

function getSize(){
    desiredSize = Math.trunc(1000/rowElements) - 8;
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
//Generates the necesary blocks needed to be set onto a row to make a square grid.
let rowElements = Math.round(Math.sqrt(arrayDivs.length));
getSize();
createGrid();