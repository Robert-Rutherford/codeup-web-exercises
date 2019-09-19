var randomImageArray = ["exercise-img-1.jpeg","exercise-img-2.jpeg","exercise-img-3.jpeg","exercise-img-4.jpeg"];
var randomBack = ["bg_img4_pattern.jpg","backgroundimg2.jpeg"];
function getRandomImage(imgAr, path) {
    path = path || 'img/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "" class="img-fixer">';
    document.write(imgStr);
    document.close();
}

function geRandBack(imgAr, path){
    path = path || 'img/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = path + img;
    document.write(imgStr);
    document.close();
}



