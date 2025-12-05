const images = [
    "../chicken-images/food-1.png",
    "../chicken-images/food-2.png",
    "../chicken-images/food-3.png",
    "../chicken-images/food-4.png",
    "../chicken-images/food-5.png",
    "../chicken-images/food-6.png"
];

let index = 0;

setInterval(()=> {
     index++;


     if(index == images.length){
        index = 0;
     }


     document.getElementById("slider").src = images[index];
}, 3000);
