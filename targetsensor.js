elements.target_sensor = {
    color: "#ff8800",
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    density: 9999,
    conduct: 1,
    properties: { target: "water", range: 1 },
    onSelect: function(pixel) {
        var input = prompt("ใส่ element ที่จะตรวจจับ (คั่นด้วย comma):", pixel.target);
        if (input !== null) pixel.target = input;
    },
    tick: function(pixel) {
        var targets = pixel.target.split(",");
        var found = false;
        for (var dx=-pixel.range; dx<=pixel.range; dx++) {
            for (var dy=-pixel.range; dy<=pixel.range; dy++) {
                var x = pixel.x+dx;
                var y = pixel.y+dy;
                if (!isEmpty(x,y,true)) {
                    var p = pixelMap[x][y];
                    if (p && targets.includes(p.element)) found = true;
                }
            }
        }
        pixel.charge = found ? 1 : 0;
    }
};
