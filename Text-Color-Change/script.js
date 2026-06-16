function textcolor(){
    let colorname= prompt("Enter color name: ");
    let bgcolorname= prompt("Enter bgcolor name: ");
    colorname.toLowerCase();
    bgcolorname.toLowerCase();
    document.getElementById('text').style = `color : ${colorname}`;
    document.getElementById('body').style = `background-color : ${bgcolorname}`;
}