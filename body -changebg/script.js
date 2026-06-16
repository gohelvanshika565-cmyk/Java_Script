function BGchange(){
    let colorName = prompt("Enter any colorName:");
    colorName.toLowerCase();
    document.getElementById('body').style = `background-color:${colorName}`;
}