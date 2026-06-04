const card = [
    { image: "./IMAGES/image1.jpg" },
    { image: "./IMAGES/image2.jpg" },
    { image: "./IMAGES/image3.jpg" },
    { image: "./IMAGES/image4.jpg" },
    { image: "./IMAGES/image5.jpg" },
    { image: "./IMAGES/image6.jpg" },
    { image: "./IMAGES/image7.jpg" },
    { image: "./IMAGES/image8.jpg" },
    { image: "./IMAGES/image9.jpg" },
    { image: "./IMAGES/image10.jpg" },
    { image: "./IMAGES/image12.jpg" }

];

let index = 0;
function add(){
    document.getElementById("image-container").innerHTML +=`
    <div class= "img"> 
    <img src="${card[index].image}" >
    </div>`;

    index++;
}

let img = "";

for (let i = 0; i < card.length; i++) {
    img += `
        <div class="img">
            <img src="${card[i].image}" alt="">
        </div>
    `;
}

document.getElementById("image-container").innerHTML = img;