
const block = {
    width: "25px",
    height: "25px",
    margin: "3px",
    backgroundColor: "brown",
    display: "inline-block",
};

const blank = {
    width: "25px",
    height: "25px",
    backgroundColor: "white",
    margin: "3px",
    display: "inline-block",
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

 function drawPyramid() {
     const height = document.getElementById("input").value;
     let pyramid = document.getElementById("pyramid");
     let divElem = document.createElement("div");
     for (var i = 0; i<height; i++) {
         divElem.appendChild(makeRow(i, height));
     }
     pyramid.appendChild(divElem);
 }
