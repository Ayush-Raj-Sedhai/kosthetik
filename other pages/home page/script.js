//ID'S OF BUTTON
var restylane = document.getElementById("restylane");
var filorga = document.getElementById("filorga");
var show = document.getElementById("showAll");


//ID'S of IMAGES
var restylaneImage = document.getElementById("rest");
var filorgaImage = document.getElementById("fil");
restylane.addEventListener("click", function() {
    // document.getElementByID("filorga").innerHTML= "none";
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "inline";
});
filorga.addEventListener("click", function() {
    // document.getElementByID("filorga").innerHTML= "none";
    restylaneImage.style.display = "none";
    filorgaImage.style.display = "inline";
});
show.addEventListener("click", function() {
    // document.getElementByID("filorga").innerHTML= "none";
    restylaneImage.style.display = "inline";
    filorgaImage.style.display = "inline";
});