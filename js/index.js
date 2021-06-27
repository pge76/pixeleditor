function draw(image) {
    const canvas = document.getElementById("my-canvas");
    const context = canvas.getContext("2d");

    //context.fillStyle = "red";
    //context.fillRect(0,0,50, 50);
    
    context.strokeStyle = "black";
    context.lineWidth = 1;

    const width = image.width();
    const height = image.height();
    const cellSize = 50;

    const cells = image.cells();

    console.log("cells", cells);
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const index = ((y * width) + x) * 3; // index the first rgb element in the array of colors
            const color = `rgb(${cells[index + 0]}, ${cells[index + 1]}, ${cells[index + 2]})`;
            console.log("color", color);
            context.fillStyle = color;
            context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }


    for ( let x = 0; x <= width; x++) {
        context.beginPath();
        context.moveTo(x * cellSize + 0.5, 1);
        context.lineTo(x * cellSize + 0.5, width * cellSize);
        context.stroke();
    }

    for ( let y = 0; y <= height; y++) {
        context.beginPath();
        context.moveTo(1, y * cellSize + 0.5);
        context.lineTo(width * cellSize, y * cellSize);
        context.stroke();
    }

}

async function main() {
    const lib = await import("../pkg/index.js").catch(console.error);
    const image = new lib.Image(10, 10);
    console.log("image", image);

    draw(image);
}
main();
