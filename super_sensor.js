elements.super_sensor = {
    color: "#ff8800",
    category: "new machines",
    behavior: behaviors.WALL,
    state: "solid",
    density: 9999,
    conduct: 1,

    properties: {
        target: "water",
        range: 3
    },

    onSelect: function() {
        var input = prompt("ใส่ element ที่จะตรวจจับ (เช่น water,sand,fire):", elements.super_sensor.properties.target);
        if (input !== null) {
            elements.super_sensor.properties.target = input;
        }
    },

    tick: function(pixel) {
        var targets = elements.super_sensor.properties.target.split(",");
        var range = elements.super_sensor.properties.range;
        var found = false;

        for (var dx = -range; dx <= range; dx++) {
            for (var dy = -range; dy <= range; dy++) {

                if (dx === 0 && dy === 0) continue;

                var x = pixel.x + dx;
                var y = pixel.y + dy;

                if (!isEmpty(x,y,true)) {
                    var p = pixelMap[x][y];
                    if (p && targets.includes(p.element)) {
                        found = true;
                        break;
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
