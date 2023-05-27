function ChangeOnClick(){
    var a = document.getElementById("image");
    var images = ['birds.jpg'];
    var i;
    for(i=0; i<images.length; i++){
        a.src = images[i];
    }
}