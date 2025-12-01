var svg = document.getElementById('pitchLin');
var notas = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
var m = 1200. / 4200;
var xlup = 20;
var xldown = 20;
for (var i = 20; i < 109; i++) {
    var f = 440 * Math.pow(2, (i - 69) / 12);
    var x = m * f;

    var l1 = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    l1.setAttribute("x1", x);
    l1.setAttribute("y1", 110);
    l1.setAttribute("x2", x);
    l1.setAttribute("y2", 190);
    l1.setAttribute("stroke", "black");
    l1.setAttribute("strokeWidth", 2);
    svg.appendChild(l1);

    var xlr, y1, y2, y3, angle;
    if (i % 2 == 0) {
        xlr = xlup > x ? xlup : x;
        y1 = 190;
        y2 = 220;
        y3 = 230;
        angle = 90;
        xlup += 12;
    } else {
        xlr = xldown > x ? xldown : x;
        y1 = 110;
        y2 = 80;
        y3 = 70;
        angle = -90;
        xldown += 12;
    }

    var l2 = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    l2.setAttribute("x1", x);
    l2.setAttribute("y1", y1);
    l2.setAttribute("x2", xlr);
    l2.setAttribute("y2", y2);
    l2.setAttribute("stroke", "black");
    l2.setAttribute("strokeWidth", 2);
    svg.appendChild(l2);

    var label = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    label.setAttribute("x", xlr);
    label.setAttribute("y", y3);
    label.setAttribute("transform", "rotate(" + angle + " " + xlr + "," + y3 + ")");
    label.textContent = f.toFixed(1) + "(" + notas[i % 12] + ")";
    svg.appendChild(label);
};

svg = document.getElementById('pitchLog');
m = 1200. / 89;
for (var i = 20; i < 109; i++) {
    var f = 440 * Math.pow(2, (i - 69) / 12);
    var x = m * (i - 20);

    var l1 = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    l1.setAttribute("x1", x);
    l1.setAttribute("y1", 110);
    l1.setAttribute("x2", x);
    l1.setAttribute("y2", 190);
    l1.setAttribute("stroke", "black");
    l1.setAttribute("strokeWidth", 2);
    svg.appendChild(l1);

    var xlr, y1, y2, y3, angle;
    if (i % 2 == 0) {
        xlr = x;
        y1 = 190;
        y2 = 220;
        y3 = 230;
        angle = 90;
    } else {
        xlr = x;
        y1 = 110;
        y2 = 80;
        y3 = 70;
        angle = -90;
    }

    var l2 = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    l2.setAttribute("x1", x);
    l2.setAttribute("y1", y1);
    l2.setAttribute("x2", xlr);
    l2.setAttribute("y2", y2);
    l2.setAttribute("stroke", "black");
    l2.setAttribute("strokeWidth", 2);
    svg.appendChild(l2);

    var label = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    label.setAttribute("x", xlr);
    label.setAttribute("y", y3);
    label.setAttribute("transform", "rotate(" + angle + " " + xlr + "," + y3 + ")");
    label.textContent = f.toFixed(1) + "(" + notas[i % 12] + ")";
    svg.appendChild(label);
};