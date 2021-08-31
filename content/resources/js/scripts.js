function changing() {
    var image = document.getElementById('myImage');
    if (image.src.match("develope")) {
        image.src = "./resources/images/linux-admin.png";
    } else {
        image.src = "./resources/images/develope.png";
    }
}

let day = new Date();
document.body.innerHTML = "<h2>Today's date is: " + day + "</h2>"
