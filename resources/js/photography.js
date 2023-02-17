$(document).ready(function () {
    loadPictures();
});

const dir = "./resources/img/photography/";
function loadPictures() {
    // look through the imgLocations.txt and insert img's into DOM
    // this file is generated by a batch file (photo.bat)
    // this lists all photos in /resources/img/photography
    $.ajax({
        url: "./resources/js/imgLocations.txt",
        success: function (data) {
            const images = data.split("\n").filter(i => i);
            let photoGrid = document.getElementById("photo-grid");
            for (const image of images) {
                let img = document.createElement("img");
                img.src = dir + image;
                img.alt = "Photo taken by NES-media";
                img.setAttribute("loading", "lazy");
                photoGrid.append(img);
            }
        }
    });
}