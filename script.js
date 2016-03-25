// // Your JS goes here
// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%

var body = document.querySelector("body");
var tile, red, green, blue;
body.style.margin = 0;

for (i = 1; i <= 63; i++) {
    tile = document.createElement("div");

    tile.style.float = ("left");
    tile.style.paddingBottom = ("11.1%");
    tile.style.width = ("11.1%");

    if (i % 2 === 0) {
        red = i * 4;
        green = i * 2;
        blue = 255;
    } else {
        red = 255;
        green = i * 4;
        blue = i * 2;

    }
    tile.style.backgroundColor = ("rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")");
    body.appendChild(tile);
}