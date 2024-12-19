$(document).ready(function () {
    const images = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"];
    let currentIndex = 0;

    $("#profile-picture").click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        $(this).attr("src", images[currentIndex]);
    });
});
