
elements.super_sensor = {
    color: "#ff8800",
    category: "machines",
    behavior: behaviors.WALL,
    state: "solid",
    density: 9999,
    conduct: 1,

    properties: {
        target: "water",
        range: 1
    },

    onSelect: function(pixel) {
        var input = prompt(
            "ใส่ element ที่จะตรวจจับ (เช่น water,sand,fire):",
            pixel.target
        );
        if (input !== null) {
            pixel.target = input;
        }
    },

    tick: function(pixel) {
        var targets = pixel.target.split(",");
        var found = false;

        for (var dx = -pixel.range; dx <= pixel.range; dx++) {
            for (var dy = -pixel.range; dy <= pixel.range; dy++) {

                if (dx === 0 && dy === 0) continue;

                var x = pixel.x + dx;
                var y = pixel.y + dy;

                if (!isEmpty(x, y, true)) {
                    var p = pixelMap[x][y];
                    if (p && targets.includes(p.element)) {
                        found = true;
                    }
                }
            }
        }

        if (found) {
            pixel.color = "#00ff00";
            pixel.charge = 1;
        } else {
            pixel.color = "#ff8800";
            pixel.charge = 0;
        }
    }
};
