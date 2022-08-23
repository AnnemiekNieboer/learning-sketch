const canvasSketch = require('canvas-sketch');

//oefening
const favoriteArtists = ["Flogging Molly", "Lady Gaga", "Abba", "Rammstein"];

function listArtists(list) {
    list.forEach(item => {
        console.log(item)
    });
    list.map(item => {
        console.log(item);
    });
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

listArtists(favoriteArtists);

//tekening
const settings = {
    dimensions: [1080, 1080],
    // dimensions: "A4",
    // pixelsPerInch: 300,
    // orientation: "landscape",
};

const sketch = () => {
    return ({context, width, height}) => {
        context.fillStyle = 'black';
        context.fillRect(0, 0, width, height);
        context.lineWidth = width * 0.01;
        context.strokeStyle = "white";

        //Hiermee geef je met percentages aan hoe groot alles moet zijn tov de canvas grootte
        const w = width * 0.10;
        const h = height * 0.10;
        const gap = width * 0.03;
        const initialX = width * 0.17;
        const initialY = height * 0.17;

        const off = width * 0.02;

        let x, y;

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                x = initialX + (w + gap) * i;
                y = initialY + (h + gap) * j;

                context.beginPath();
                context.rect(x, y, w, h);
                context.stroke();

                if (Math.random() > 0.5) {
                    context.beginPath();
                    context.rect(x + off / 2, y + off / 2, w - off, h - off);
                    context.stroke();
                }
            }
        }
    };
}
canvasSketch(sketch, settings);
