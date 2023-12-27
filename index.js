let display = document.getElementById("displayId");

function appendToDisplay(inputValue){
    display.value +=inputValue;
}

function allClear(){
    display.value='';
}

function deleteValue(){
    display.value = display.value.toString().slice(0,-1)
}

function calculate(){
    display.value = eval(display.value);
}