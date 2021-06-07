
const block = {
    width: "25px",
    height: "25px",
    margin: "3px",
    backgroundColor: "#CDB4DB",
    display: "inline-block",
    alignContent: "center",
};

const blank = {
    width: "25px",
    height: "25px",
    backgroundColor: "#F8EDEB",
    margin: "3px",
    display: "inline-block",
    alignContent: "center",
};

function styledNode(type, style) {
    const node = document.createElement(type);
    for (const [key, value] of Object.entries(style))
        node.style[key] = value;
    return node;
}

function makeRow(rowNum, height) {
    const row = document.createElement("div");
    for (var j = 0; j < height - rowNum - 1; j++) {
        row.appendChild(styledNode("div", blank));
    }
    for (var j = 0; j < rowNum + 2; j++) {
        row.appendChild(styledNode("div", block));
    }
    return row;
}

function clear(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

 function drawPyramid() {
     clear("pyramid");
     const height = document.getElementById("height").value;
     document.getElementById("display").value = height;
     let pyramid = document.getElementById("pyramid");
     let divElem = document.createElement("div");
     for (var i = 0; i<height; i++) {
         divElem.appendChild(makeRow(i, height));
     }
     pyramid.appendChild(divElem);
 }
