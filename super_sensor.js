elements.super_sensor = {
    color: "#ff8800",
    category: "machines",
    behavior: behaviors.WALL,
    conduct: 1,

    properties: {
        target: null,
        range: 3
    },

    tick: function(pixel) {

        // ถ้ายังไม่ได้ตั้งค่า target
        if (!pixel.target) {
            var input = prompt("ใส่ element ที่จะตรวจจับ เช่น water,sand,fire");
            if (input) {
                pixel.target = input.split(",");
            } else {
                pixel.target = ["water"];
            }
        }

        var found = false;

        for (var dx = -pixel.range; dx <= pixel.range; dx++) {
            for (var dy = -pixel.range; dy <= pixel.range; dy++) {

                if (dx === 0 && dy === 0) continue;

                var x = pixel.x + dx;
                var y = pixel.y + dy;

                if (!isEmpty(x,y,true)) {
                    var p = pixelMap[x][y];
                    if (p && pixel.target.includes(p.element)) {
                        found = true;
                    }
                }
            }
        }

        if (found) {
            pixel.color = "#00ff00";
            pixel.charge = 1;
            pixel.chargeCD = 0;
        } else {
            pixel.color = "#ff8800";
            pixel.charge = 0;
        }
    }
};
