const product = ["Active Noise Cancellation","74 Hour Playtime","Accessible Controls","Dual Mode Connectivity","USB Type-C Port"]

let text = "";
for(let data of product){
    text += `<li>${data}</li>`
}
document.getElementById('feachers-list').innerHTML = text;
