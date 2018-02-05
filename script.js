
for (x = 0; x < 11; x++) {
    var hori = document.createElement("p");
    var vert = document.createElement("p");
    var text = document.createTextNode(x);
    var htext = document.createTextNode(x);
    hori.appendChild(htext);
    vert.appendChild(text);
    document.getElementById("tabletop").appendChild(hori);
    document.getElementById("tableside").appendChild(vert);
    for (y=0; y < 11; y++) {
        var maths = document.createElement("p");
        var mtext = document.createTextNode(x*y);
        maths.appendChild(mtext);
        document.getElementById("middle").appendChild(maths);
    }
};
// for (y = 0; y < 11; y++) {
//     var vert = document.createElement("p");
//     var text = document.createTextNode(y);
//     vert.appendChild(text);
//     document.getElementById("tableside").appendChild(vert);
//     function thamaths ();
//         y *
// };
